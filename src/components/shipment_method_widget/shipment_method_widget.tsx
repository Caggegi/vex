import { Dialog, Flex, Select } from "@radix-ui/themes";
import styles from "./shipment_method_widget.module.css";
import { mdiBagChecked, mdiPackageVariantClosed, mdiPackageVariantClosedPlus, mdiPlusBox, mdiPlusBoxOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useTranslations } from "next-intl";
import TruckLoader from "../truck_loader/truck_loader";
import CustomSizeDialog from "./custom_size_dialog";

export default function ShipmentMethodWidget() {
    const s = useTranslations('standard_sizes');
    const p = useTranslations('placeholders');

    const standard_sizes: { icon: string, value: string, placeholder: string }[] = [
        {
            icon: mdiPackageVariantClosed,
            value: "1",
            placeholder: s("1kpkg")
        }, {
            icon: mdiPackageVariantClosed,
            value: "2",
            placeholder: s("3kpkg")
        }, {
            icon: mdiPackageVariantClosed,
            value: "3",
            placeholder: s("5kpkg")
        }, {
            icon: mdiPackageVariantClosed,
            value: "4",
            placeholder: s("10kpkg")
        }, {
            icon: mdiPackageVariantClosed,
            value: "5",
            placeholder: s("20kpkg")
        }, {
            icon: mdiPackageVariantClosed,
            value: "6",
            placeholder: s("30kpkg")
        }, {
            icon: mdiBagChecked,
            value: "7",
            placeholder: s("small")
        }, {
            icon: mdiBagChecked,
            value: "8",
            placeholder: s("medium")
        }, {
            icon: mdiBagChecked,
            value: "9",
            placeholder: s("large")
        }, {
            icon: mdiPackageVariantClosedPlus,
            value: "10",
            placeholder: s("custom_size")
        }
    ]
    return (
    <Flex className={styles.shipment_method}>
        <div className={styles.shipping}>
            <div className={styles.line}></div>
            {/*<Icon path={mdiTruckFastOutline} className={styles.icon} size={2.5} />*/}
                <TruckLoader/>
            <div className={styles.line}></div>
        </div>
        <Flex direction="column" style={{alignItems:"center"}}>
            <div className={styles.vline}></div>
        <Flex  className={styles.formbox} direction="column">
            <span className={styles.package_size_title}>
                {p("select_package_size")}
            </span>
            <form className={styles.form}>
                <Select.Root size="3" defaultValue={standard_sizes[0].value}>
                    <Select.Trigger style={{width:"100%"}}/>
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
            <div className={styles.vline}></div>
        </Flex>
        <Dialog.Root open={false}>
            <CustomSizeDialog/>
        </Dialog.Root>
    </Flex>
    )
}