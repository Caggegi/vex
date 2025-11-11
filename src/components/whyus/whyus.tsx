import { Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes"
import styles from "./whyus.module.css"
import { useTranslations } from "next-intl";
import WhyUSCard from "./whyus_card";
import { mdiAbTesting, mdiBatteryChargingOutline, mdiClock, mdiClockDigital, mdiCursorDefault, mdiCursorPointer, mdiDigitalOcean, mdiEmail, mdiFormatTextWrappingOverflow, mdiMouse, mdiMouseBluetooth, mdiReceipt, mdiTableColumnPlusAfter } from "@mdi/js";

export default function WhyUS() {
    const p = useTranslations('paragraph');

    return (
        <Flex className={styles.whyusContainer} direction="column" align="start" justify="start" gap="32px">
            <Box>
                <Badge color="blue" radius="full" size="3">{p("whyus_chips")}</Badge>
                <h1>{p("whyus_title")}</h1>
                <p className={styles.subtitle}>{p("whyus_subtitle")}</p>
            </Box>
            <Flex direction="row" gap="12px" align="center" justify="center">
                <WhyUSCard icon={mdiEmail} title={p("card_1_title")} description={p("card_1_description")} button={p("card_1_button")}/>
                <WhyUSCard icon={mdiClock} title={p("card_2_title")} description={p("card_2_description")} button={p("card_2_button")}/>
                <WhyUSCard icon={mdiCursorDefault} title={p("card_3_title")} description={p("card_3_description")} button={p("card_3_button")}/>
            </Flex>
            <Card>
                <Flex direction="column" align="center" justify="center" gap="8px">
                    <Text>{p("calcola_risparmio")}</Text>
                    <Button>{p("calcola_risparmio_button")}</Button>
                </Flex>
            </Card>
        </Flex>
    )
    
    return (<div className={styles.toColumn} style={{ alignItems: "center" }}>
        <img src="/images/Cardboard_Boxes.png" alt="boxes" style={{ width: "40%", height: "100%" }} />
        <Flex direction="column">
            <h1 data-line="2" className={styles.whyus}>
                {p("p3")}
            </h1>
            <br />
            <ul style={{ marginLeft: "32px" }}>
                <li><span data-line="3">{p("ul1")}</span></li>
                <li><span data-line="4">{p("ul2")}</span></li>
                <li><span data-line="5">{p("ul3")}</span></li>
                <li><span data-line="6">{p("ul4")}</span></li>
            </ul>
            <br />
            <br />
            <span data-line="7">
                {p("p4")}
            </span>
        </Flex>
    </div>)
}