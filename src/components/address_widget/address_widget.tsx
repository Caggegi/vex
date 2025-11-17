import { Box, Card, Flex, TextField } from "@radix-ui/themes";
import styles from "./address_widget.module.css";
import { useTranslations } from "next-intl";
import Icon from '@mdi/react';
import { mdiCityVariantOutline, mdiHomeMapMarker, mdiMagnify, mdiTicketConfirmationOutline } from "@mdi/js";

type AddressProps = {
    title: string;
    icon: string;
    address: {
        city: string,
        zip: string,
        country: string
    };
    onAddressUpdate: (address:{city:string, zip:string, country:string}) => void
}

export default function AddressWidget(props: AddressProps) {
    const t = useTranslations('others');
    const p = useTranslations('placeholders');

    return (
        <Card className={styles.card} variant="ghost">
            <Flex className={styles.card_header}>
                <Icon path={props.icon} className={styles.icon} color="#3376F7"/>
                <span className={styles.title}>{props.title}</span>
            </Flex>
            <form>
                <Flex direction="column">
                    <Flex className={styles.form_row}>
                        <Flex direction="column" style={{ margin: "0 4px 0 0" }}>
                            <span className="capitalize">
                                {t("city")}
                            </span>
                            <TextField.Root placeholder={p("city")} defaultValue={props.address.city}
                            onChange={(event)=>{
                                props.onAddressUpdate({
                                    ...props.address,
                                    city: event.currentTarget.value
                                })
                                }}>
                                <TextField.Slot>
                                    <Icon path={mdiCityVariantOutline} size={0.5} />
                                </TextField.Slot>
                            </TextField.Root>
                        </Flex>
                        <Flex direction="column" style={{ margin: "0 0 0 4px" }}>
                            <span className="capitalize">
                                {t("zip")}
                            </span>
                            <TextField.Root type="number" placeholder={p("zip")} defaultValue={props.address.zip}
                            onChange={(event)=>{
                                props.onAddressUpdate({
                                    ...props.address,
                                    zip: event.currentTarget.value
                                })
                                }}>
                                <TextField.Slot>
                                    <Icon path={mdiTicketConfirmationOutline} size={0.5} />
                                </TextField.Slot>
                            </TextField.Root>
                        </Flex>
                    </Flex>
                    <Box className={styles.form_row}>
                        <span className="capitalize">
                            {t("country")}
                        </span>
                        <TextField.Root placeholder={p("country")} defaultValue={props.address.country}
                            onChange={(event)=>{
                                props.onAddressUpdate({
                                    ...props.address,
                                    country: event.currentTarget.value
                                })
                                }}>
                            <TextField.Slot>
                                <Icon path={mdiHomeMapMarker} size={0.5} />
                            </TextField.Slot>
                        </TextField.Root>
                    </Box>
                </Flex>
            </form>
        </Card>
    )
}