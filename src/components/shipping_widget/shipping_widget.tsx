import { Box, Card, Flex } from "@radix-ui/themes";
import styles from "./shipping_widget.module.css";
import AddressWidget from "../address_widget/address_widget";
import ShipmentMethodWidget from "../shipment_method_widget/shipment_method_widget";
import { faHome, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import {useTranslations} from 'next-intl';

export default function ShippingWidget() {
    const t = useTranslations('others');
    return (
        <Flex gap="3" align="center" className={styles.main_box}>
            <Box>
                <AddressWidget title={t("from")} icon={faHome}/>
            </Box>
            <Box>
                <ShipmentMethodWidget/>
            </Box>
            <Box>
                <AddressWidget title={t("to")} icon={faLocationArrow}/>
            </Box>
        </Flex>
    )
}