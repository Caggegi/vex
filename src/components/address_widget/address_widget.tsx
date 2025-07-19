import { Box, Card, Flex, TextField } from "@radix-ui/themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./address_widget.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

type AddressProps = {
    title: string;
    icon: IconProp;
}

export default function AddressWidget(props: AddressProps) {
    const t = useTranslations('others');
    const p = useTranslations('placeholders');

    return (
        <Card className={styles.card}>
            <Flex className={styles.card_header}>
                <FontAwesomeIcon icon={props.icon} className={styles.icon} />
                <span className={styles.title}>{props.title}</span>
            </Flex>
            <Flex direction="column">
                <Box className={styles.form_row}>
                    <span className="capitalize">
                        {t("address")}
                    </span>
                    <TextField.Root placeholder={p("address")}>
                        <TextField.Slot>
                            <FontAwesomeIcon icon={faMagnifyingGlass} height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                </Box>
                <Flex className={styles.form_row}>
                    <Flex direction="column" style={{margin:"0 4px 0 0"}}>
                        <span className="capitalize">
                            {t("city")}
                        </span>
                        <TextField.Root placeholder={p("city")}>
                            <TextField.Slot>
                                <FontAwesomeIcon icon={faMagnifyingGlass} height="16" width="16" />
                            </TextField.Slot>
                        </TextField.Root>
                    </Flex>
                    <Flex direction="column" style={{margin:"0 0 0 4px"}}>
                        <span className="capitalize">
                            {t("zip")}
                        </span>
                        <TextField.Root placeholder={p("zip")}>
                            <TextField.Slot>
                                <FontAwesomeIcon icon={faMagnifyingGlass} height="16" width="16" />
                            </TextField.Slot>
                        </TextField.Root>
                    </Flex>
                </Flex>
                <Box className={styles.form_row}>
                    <span className="capitalize">
                        {t("country")}
                    </span>
                    <TextField.Root placeholder={p("country")}>
                        <TextField.Slot>
                            <FontAwesomeIcon icon={faMagnifyingGlass} height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                </Box>
            </Flex>
        </Card>
    )
}