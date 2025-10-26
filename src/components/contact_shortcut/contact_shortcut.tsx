import { Button, Flex } from "@radix-ui/themes"
import styles from "./contact_shortcut.module.css"
import { useTranslations } from "next-intl";

export default function ContactShortcut() {
    const p = useTranslations('paragraph');
    const n = useTranslations('Navbar');
    
    return <div className={styles.toColumn} style={{ alignItems: "center" }}>
        <img src="/images/Taped_Cardboard_Box_3.jpg" alt="cardboard" style={{ width: "40%", height: "100%", padding:"24px" }} />
        <Flex direction="column">
            <h1 data-line="2" className={styles.contact_header}>
                {p("p5")}
            </h1>
            <br />
            <ul style={{ marginLeft: "32px" }}>
                <li><span data-line="3">{p("ul5")}</span></li>
                <li><span data-line="4">{p("ul6")}</span></li>
                <li><span data-line="5">{p("ul7")}</span></li>
                <li><span data-line="6">{p("ul8")}</span></li>
            </ul>
            <Button color="gray" radius="none" style={{width:"fit-content", margin:"24px 0"}}>
                <span style={{padding:"24px 24px"}}>{n("contacts")}</span>
                </Button>
        </Flex>
    </div>
}