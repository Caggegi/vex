import { Button, Flex } from "@radix-ui/themes";
import styles from "./setup_shipping.module.css"
import { useTranslations } from "next-intl";
import SetupShippingCard from "./setup_shipping_card";

export default function SetupShipping(){

    const p = useTranslations('paragraph');
    
    return <Flex align="center" justify="center" direction="column">
        <h1>{p("setup_shipping_title")}</h1>
        <p className={styles.subtitle}>{p("setup_shipping_subtitle")}</p>
        <Flex gap="16px" style={{margin:"24px 0"}}>
            <SetupShippingCard title={p("step_1_title")} description={p("step_1_subtitle")} index={1}/>
            <SetupShippingCard title={p("step_2_title")} description={p("step_2_subtitle")} index={2}/>
            <SetupShippingCard title={p("step_3_title")} description={p("step_3_subtitle")} index={3}/>
            <SetupShippingCard title={p("step_4_title")} description={p("step_4_subtitle")} index={4}/>
        </Flex>
        <Button>{p("start_shipping")}</Button>
    </Flex>
}