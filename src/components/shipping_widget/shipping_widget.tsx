import { Box, Card, Flex, Select } from "@radix-ui/themes";
import styles from "./shipping_widget.module.css";
import AddressWidget from "../address_widget/address_widget";
import ShipmentMethodWidget from "../shipment_method_widget/shipment_method_widget";
import { useTranslations } from 'next-intl';
import { mdiBagChecked, mdiHomeOutline, mdiLanguageGo, mdiMapMarkerOutline, mdiPackageVariantClosed, mdiZipBox } from "@mdi/js";
import Icon from "@mdi/react";

export default function ShippingWidget() {
    const t = useTranslations('others');
    const p = useTranslations('placeholders');
    const s = useTranslations('standard_sizes');

    const standard_sizes:{icon:string, value:string, placeholder:string}[] = [
        {
            icon: mdiPackageVariantClosed,
            value: "1",
            placeholder: s("1kpkg")
        },{
            icon: mdiPackageVariantClosed,
            value: "2",
            placeholder: s("3kpkg")
        },{
            icon: mdiPackageVariantClosed,
            value: "3",
            placeholder: s("5kpkg")
        },{
            icon: mdiPackageVariantClosed,
            value: "4",
            placeholder: s("10kpkg")
        },{
            icon: mdiPackageVariantClosed,
            value: "5",
            placeholder: s("20kpkg")
        },{
            icon: mdiPackageVariantClosed,
            value: "6",
            placeholder: s("30kpkg")
        },{
            icon: mdiBagChecked,
            value: "7",
            placeholder: s("small")
        },{
            icon: mdiBagChecked,
            value: "8",
            placeholder: s("medium")
        },{
            icon: mdiBagChecked,
            value: "9",
            placeholder: s("large")
        }
    ]

    return (
        <>
            <Flex gap="3" align="center" className={styles.main_box}>
                <Box>
                    <AddressWidget title={t("from")} icon={mdiHomeOutline} />
                </Box>
                <Box>
                    <ShipmentMethodWidget />
                </Box>
                <Box>
                    <AddressWidget title={t("to")} icon={mdiMapMarkerOutline} />
                </Box>
            </Flex>
            <Card>
                <span className={styles.package_size_title}>
                   {p("select_package_size")}
                </span>
                <form>
                    <Select.Root size="3" defaultValue={standard_sizes[0].value}>
                        <Select.Trigger />
                        <Select.Content>
                            {standard_sizes.map(element=>(
                                <Select.Item key={element.value} value={element.value}>
                                    <Flex><Icon path={element.icon} size={1}/><span>{element.placeholder}</span></Flex>
                                    </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Root>
                </form>
            </Card>
        </>
    )
}