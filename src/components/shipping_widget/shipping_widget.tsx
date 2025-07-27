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

    return (
        <>
            <div className={styles.title}>
                <h1>{p("shipping_widget_title")}</h1>
                <p>
                    {p("shipping_widget_subtitle")}
                </p>
            </div>
            <Card className={styles.shipping_widget}>
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
            </Card>
        </>
    )
}