import { Flex } from "@radix-ui/themes"
import styles from "./introduction.module.css"
import { useTranslations } from "next-intl";

export default function WhyUS() {
    const p = useTranslations('paragraph');

    return <div className={styles.toColumn}>
        <Flex direction="column">
            <span data-line="0">
                {p("p1")}
            </span>
            <br />
            <br />
            <span data-line="1">
                {p("p2")}
            </span>
        </Flex>
        <img src="/images/Cardboard_Boxes.png" alt="boxes" style={{ width: "40%", height: "100%" }} />
    </div>
}