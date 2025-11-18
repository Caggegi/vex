import React, { useCallback, useEffect, useState } from 'react';
import styles from './package_widget.module.css';
import { Card, Flex, Text, Button, Select, Tooltip } from '@radix-ui/themes';
import { mdiBagChecked, mdiEmailOutline, mdiPackageVariantClosed, mdiShippingPallet } from '@mdi/js';
import { useTranslations } from 'next-intl';
import { Icon } from '@mdi/react';
import { PackageDimensionWidget } from './dimension_widgets/package_dimension_widget/package_dimension_widget';
import { MailWidget } from './dimension_widgets/mail_widget/mail_widget';
import { ceilPowerOfTwo } from 'three/src/math/MathUtils.js';
import { selectOrder, selectReceiver, selectSender, setOrder } from '@/features/shipments/orderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

type Package = {
    count: number;
    type: 'package' | 'pallet' | 'mail';
    index: number;
    weight?: number;
    length?: number;
    width?: number;
    height?: number;
}

export const PackageWidget = () => {

    const s = useTranslations('standard_sizes');
    const p = useTranslations('placeholders');
    const order = useSelector(selectOrder)
    const sender = useSelector(selectSender)
    const receiver = useSelector(selectReceiver)
    const dispatch = useDispatch()
    const router = useRouter()

    const [packages, setPackages] = useState<Package[]>([]);

    const removePackage = useCallback((index: number) => {
        setPackages((prevPackages) => prevPackages.filter((pkg) => pkg.index !== index));
    }, [packages]);

    useEffect(() => {
        dispatch(setOrder({ ...order, packages: packages }))
    }, [packages])

    return (
        <Flex direction="column" justify="center" align="center">
            <Card style={{ paddingBottom: "32px" }}>
                <Flex direction="column" gap="1" align="start" width="100%">
                    <Flex direction="column" gap="4">
                        <Text as="div" size="2" weight="bold">
                            Aggiungi i colli alla spedizione
                        </Text>
                        <Flex gap="2" align="center" justify="center" width="100%">
                            <Button>
                                <Icon path={mdiPackageVariantClosed} size={1} />
                                <span style={{ padding: "12px 24px" }} onClick={() => {
                                    setPackages([...packages, { count: 1, type: "package", index: packages.length }])
                                }}>Pacco</span>
                            </Button>
                            <Button>
                                <Icon path={mdiShippingPallet} size={1} />
                                <span style={{ padding: "12px 24px" }} onClick={() => {
                                    setPackages([...packages, { count: 1, type: "pallet", index: packages.length }])
                                }}>Pallet</span>
                            </Button>
                            <Button>
                                <Icon path={mdiEmailOutline} size={1} />
                                <span style={{ padding: "12px 24px" }} onClick={() => {
                                    setPackages([...packages, { count: 1, type: "mail", index: packages.length }])
                                }}>Busta</span>
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex direction="column" gap="4">
                        <Text as="div" size="2" weight="bold">
                            Inserisci: numero colli uguali - Peso - Dimensioni
                        </Text>
                        <Flex direction="column" gap="2" maxHeight="150px" overflow="auto">
                            {packages.map((pkg, index) => {
                                return pkg.type !== 'mail' ?
                                    <PackageDimensionWidget key={index} id={pkg.index} removePackage={removePackage} /> :
                                    <MailWidget key={index} id={pkg.index} removePackage={removePackage} />
                            })}
                        </Flex>
                    </Flex>
                </Flex>
            </Card>
            <Tooltip content={(!sender.city.length || !sender.zip.length || !sender.country.length ||
                        !receiver.city.length || !receiver.zip.length || !receiver.country.length ||
                        !packages.length
                    )?"Compila tutti i campi per comparare i prezzi":"Compara i prezzi"}>
                <Button variant='solid'
                    onClick={() => {
                        router.push("/shipping-preferences")
                    }}
                    disabled={!sender.city.length || !sender.zip.length || !sender.country.length ||
                        !receiver.city.length || !receiver.zip.length || !receiver.country.length ||
                        !packages.length
                    }
                    style={{ marginTop: '-16px', zIndex: '3', width: 'fit-content', padding: '24px 32px' }}>
                    <Text size="6">Compara</Text>
                </Button>
            </Tooltip>
        </Flex>
    )
}