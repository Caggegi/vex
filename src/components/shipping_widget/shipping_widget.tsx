'use client'
import { Box, Card, Flex } from "@radix-ui/themes";
import styles from "./shipping_widget.module.css";
import AddressWidget from "../address_widget/address_widget";
import ShipmentMethodWidget from "../shipment_method_widget/shipment_method_widget";
import { useTranslations } from 'next-intl';
import { mdiHomeOutline, mdiMapMarkerOutline } from "@mdi/js";
import { useEffect, useRef } from "react";
import { createTimeline, stagger, text } from 'animejs';

export default function ShippingWidget() {
    const t = useTranslations('others');
    const p = useTranslations('placeholders');

    const titleRef = useRef(null);

    useEffect(() => {
        if(!titleRef.current) return;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { words, chars } = text.split(titleRef.current, {
            words: { wrap: 'clip' },
            chars: true,
        });

        createTimeline({
            loop: false,
            defaults: { ease: 'inOut(3)', duration: 500 }
        })
            .add(words, {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                y: [($el:any) => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
            }, stagger(125))
            .init();
    }, [])

    return (
        <>
            <div className={styles.title} ref={titleRef}>
                <h1 className="animated">{p("shipping_widget_title")}</h1>
                <p className="animated">
                    {p("shipping_widget_subtitle")}
                </p>
            </div>
            <Card className={styles.shipping_widget}>
                <Flex gap="3" align="center" className={styles.main_box}>
                    <Box>
                        <AddressWidget title={t("from")} icon={mdiHomeOutline} />
                    </Box>
                    <Box>
                        <ShipmentMethodWidget />
                    </Box>
                    <Box>
                        <AddressWidget title={t("to")} icon={mdiMapMarkerOutline} />
                    </Box>
                </Flex>
            </Card>
        </>
    )
}