import { Box } from "@radix-ui/themes";
import styles from "./footer.module.css";
import SocialPane from "../social_pane/social_pane";

export default function footer() {
    return (<Box className={styles.main}>
            <SocialPane />
    </Box>)
}