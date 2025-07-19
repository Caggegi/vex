import { Box, Card, Flex } from "@radix-ui/themes";
import styles from "./shipping_widget.module.css";
import AddressWidget from "../address_widget/address_widget";
import ShipmentMethodWidget from "../shipment_method_widget/shipment_method_widget";

export default function ShippingWidget() {
    return (
        <Flex gap="3" align="center" className={styles.main_box}>
            <Card>
                <AddressWidget title="Mittente"/>
            </Card>
            <Box>
                <ShipmentMethodWidget/>
            </Box>
            <Card>
                <AddressWidget title="Destinatario"/>
            </Card>
        </Flex>
    )
}