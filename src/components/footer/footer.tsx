import { Box, Flex, TextField } from "@radix-ui/themes";
import styles from "./footer.module.css";
import SocialPane from "../social_pane/social_pane";
import { useTranslations } from "next-intl";
import { mdiEmail } from "@mdi/js";
import Icon from "@mdi/react";

export default function footer() {
    const p = useTranslations('paragraph');
    return (
        <Box className={styles.main}>
            <Flex direction="column" align="center" justify="center" style={{gap:"24px"}}>
                <h1>{p("subscribe_news_letter")}</h1>
                <span>{p("discount")}</span>
                <TextField.Root
                    color="gray"
                    variant="soft"
                    placeholder={p("mail_address")}
                    style={{width:"30%"}}>
                    <TextField.Slot>
                        <Icon path={mdiEmail} size={0.8} color={"rgba(143, 143, 143, 1)"} />
                    </TextField.Slot>
                </TextField.Root>
            </Flex>
            {false && <SocialPane />}
        </Box>)
}