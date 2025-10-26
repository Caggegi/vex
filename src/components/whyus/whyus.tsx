import { Flex } from "@radix-ui/themes"
import styles from "./whyus.module.css"
import { useTranslations } from "next-intl";

export default function WhyUS() {
    const p = useTranslations('paragraph');
    
    return <div className={styles.toColumn} style={{ alignItems: "center" }}>
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
    </div>
}