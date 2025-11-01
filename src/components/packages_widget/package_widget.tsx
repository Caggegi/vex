import React, { useCallback, useState } from 'react';
import styles from './package_widget.module.css';
import { Card, Flex, Text, Button, Select } from '@radix-ui/themes';
import { mdiBagChecked, mdiEmailOutline, mdiPackageVariantClosed, mdiShippingPallet } from '@mdi/js';
import { useTranslations } from 'next-intl';
import { Icon } from '@mdi/react';
import { PackageDimensionWidget } from './dimension_widgets/package_dimension_widget/package_dimension_widget';
import { MailWidget } from './dimension_widgets/mail_widget/mail_widget';

type Package = {
    count: number;
    type: 'package' | 'pallet' | 'mail';
    weight?: number;
    length?: number;
    width?: number;
    height?: number;
}

export const PackageWidget = () => {
    const s = useTranslations('standard_sizes');
    const p = useTranslations('placeholders');

    const standard_sizes: { icon: string, value: string, weight: number, placeholder: string }[] = [
        {
            icon: mdiPackageVariantClosed,
            value: "1",
            placeholder: s("1kpkg"),
            weight: 1
        }, {
            icon: mdiPackageVariantClosed,
            value: "2",
            placeholder: s("3kpkg"),
            weight: 3
        }, {
            icon: mdiPackageVariantClosed,
            value: "3",
            placeholder: s("5kpkg"),
            weight: 5
        }, {
            icon: mdiPackageVariantClosed,
            value: "4",
            placeholder: s("10kpkg"),
            weight: 10
        }, {
            icon: mdiPackageVariantClosed,
            value: "5",
            placeholder: s("20kpkg"),
            weight: 20
        }, {
            icon: mdiPackageVariantClosed,
            value: "6",
            placeholder: s("30kpkg"),
            weight: 30
        }, {
            icon: mdiBagChecked,
            value: "7",
            placeholder: s("small"),
            weight: 1
        }, {
            icon: mdiBagChecked,
            value: "8",
            placeholder: s("medium"),
            weight: 1
        }, {
            icon: mdiBagChecked,
            value: "9",
            placeholder: s("large"),
            weight: 1
        }, /*{
            icon: mdiPackageVariantClosedPlus,
            value: "10",
            placeholder: s("custom_size")
        }*/
    ]

    const [currentValue, setCurrentValue] = useState<string>(standard_sizes[0].value)
    const [packages, setPackages] = useState<Package[]>([{ count: 1, type: "package" }, { count: 1, type: "mail" },])

    const addPackage = useCallback((pkg?: Package) => {
        console.log(currentValue)
        //setPackages([...packages, pkg]);
    }, [currentValue])

    return (
        <Flex direction="column" justify="center" align="center">
            <Card style={{paddingBottom:"32px"}}>
                <Flex direction="row" gap="8" align="start">
                    <Flex direction="column" gap="4">
                        <Text as="div" size="2" weight="bold">
                            Aggiungi i colli alla spedizione
                        </Text>
                        <Flex gap="2">
                            <Button>
                                <Icon path={mdiPackageVariantClosed} size={1} />
                                <span style={{ padding: "12px 24px" }} onClick={() => { addPackage() }}>Pacco</span>
                            </Button>
                            <Button>
                                <Icon path={mdiShippingPallet} size={1} />
                                <span style={{ padding: "12px 24px" }}>Pallet</span>
                            </Button>
                            <Button>
                                <Icon path={mdiEmailOutline} size={1} />
                                <span style={{ padding: "12px 24px" }}>Busta</span>
                            </Button>
                        </Flex>
                        <form className={styles.form}>
                            <Select.Root size="3" defaultValue={standard_sizes[0].value} onValueChange={setCurrentValue}>
                                <Select.Trigger style={{ width: "100%" }} />
                                <Select.Content>
                                    {standard_sizes.map(element => (
                                        <Select.Item key={element.value} value={element.value}>
                                            <Flex><Icon path={element.icon} size={1} /><span>{element.placeholder}</span></Flex>
                                        </Select.Item>
                                    ))}
                                </Select.Content>
                            </Select.Root>
                        </form>
                    </Flex>
                    <Flex direction="column" gap="4">
                        <Text as="div" size="2" weight="bold">
                            Inserisci: numero colli uguali - Peso - Dimensioni
                        </Text>
                        <Flex direction="column" gap="2">
                            {packages.map((pkg, index) => {
                                return pkg.type !== 'mail' ?
                                    <PackageDimensionWidget key={index} /> :
                                    <MailWidget key={index} />
                            })}
                        </Flex>
                    </Flex>
                </Flex>
            </Card>
            <Button variant='solid' style={{ marginTop: '-16px', zIndex: '3', width: 'fit-content', padding: '24px 32px' }}>
	            <Text size="6">Compara</Text>
            </Button>
        </Flex>
    )
}