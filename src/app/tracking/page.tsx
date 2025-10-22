'use client'
import { Box, Button, Card, Flex, TextField } from "@radix-ui/themes"
import styles from "./tracking.module.css"
import {  mdiPound } from "@mdi/js"
import { text, createTimeline, stagger } from "animejs"
import { useTranslations } from "next-intl"
import { useRef, useEffect, useState } from "react"
import Icon from "@mdi/react"
import TrackingState from "@/components/tracking_state/tracking_state"


export default function Tracking() {
  const t = useTranslations('others');
  const tp = useTranslations('tracking');
  const p = useTranslations('placeholders');
  const n = useTranslations('Navbar');

  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
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
        y: [($el: any) => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
      }, stagger(125))
      .init();
  }, [])

  const [tracking_number, setTrackingNumber] = useState<string>("")

  return (
    <>
      <div className={styles.title} ref={titleRef}>
        <h1 className="animated">{n("tracking")}</h1>
      </div>
      <Card className={styles.tracking_widget}>
        <Box className={styles.form_row}>
          <span>
            # - {tp("number")}
          </span>
          <TextField.Root placeholder={tp("example")} >
            <TextField.Slot>
              <Icon path={mdiPound} size={0.5} /> - 
            </TextField.Slot>
          </TextField.Root>
          <Button 
            className={styles.search_button+" capitalize"}
            onClick={()=>{setTrackingNumber("UAS912321")}}
          >{n("tracking")}</Button>
        </Box>
        {tracking_number.length > 0 && 
          <Box pt="24px">
            <TrackingState tracking_number={tracking_number} />
          </Box>
        }
      </Card>
    </>
  )
}