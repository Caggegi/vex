'use client'
import { selectSender, selectReceiver, selectOrder } from "@/features/shipments/orderSlice"
import { Card, Checkbox, Flex, Text, Box, Slider, SegmentedControl, Button, Badge, Avatar, TextField } from "@radix-ui/themes"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import style from "./shipping_preferences.module.css"
import { mdiLabelPercent } from "@mdi/js"
import Icon from "@mdi/react"

export default function ShippingPreferences() {

    const order = useSelector(selectOrder)
    const sender = useSelector(selectSender)
    const receiver = useSelector(selectReceiver)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(order)
    }, [])

    const corrieri: string[] = ["DHL", "SDA", "GLS", "inPos", "UPS", "BRT"]
    const servizi: string[] = ["Assicurazione", "Ritiro a domicilio", "Punto di ritiro"]

    const offerte = [{
        name: "BRT",
        cat: "Express",
        delivery: "1-2 giorni",
        pickup: "Ritiro a domicilio",
        price: 12.50
    }, {
        name: "SDA",
        cat: "Economy",
        delivery: "2-4 giorni",
        pickup: "Punto di ritiro",
        price: 14.90
    }]

    const economy = {
        name: "UPS",
        cat: "Standard",
        delivery: "1-2 giorni",
        pickup: "Ritiro a domicilio",
        price: 9.99
    }

    const fastest = {
        name: "DHL",
        cat: "Express",
        delivery: "1 giorno",
        pickup: "Ritiro a domicilio",
        price: 18.50
    }

    return <Flex style={{ padding: "32px" }} justify="start" gap="6">
        <Card style={{ width: "300px" }}>
            <Flex direction="column" gap="3">
                <Text style={{ fontWeight: "bolder" }}>Filtra per</Text>
                <Box>
                    <Text className={style.filter_cat}>CORRIERE</Text>
                    <Flex gapY="2" gapX="8" wrap="wrap">
                        {corrieri.map((corriere, index) =>
                            <Text as="label" size="2" key={corriere}>
                                <Flex gap="2">
                                    <Checkbox defaultChecked />
                                    {corriere}
                                </Flex>
                            </Text>
                        )}

                    </Flex>
                </Box>
                <Box>
                    <Text className={style.filter_cat}>PREZZO MASSIMO</Text>
                    <Box>
                        <span style={{ textAlign: "right", width: "100%", display: "block" }}><Text>€ 50,00</Text></span>
                        <Slider min={4.99} max={50} step={0.1} defaultValue={[9.99]}></Slider>
                    </Box>
                </Box>
                <Box>
                    <Text className={style.filter_cat}>TEMPI</Text>
                    <Box>
                        <SegmentedControl.Root defaultValue="all" radius="full">
                            <SegmentedControl.Item value="all">Tutti</SegmentedControl.Item>
                            <SegmentedControl.Item value="fastest">Più veloci</SegmentedControl.Item>
                            <SegmentedControl.Item value="economy">Economy</SegmentedControl.Item>
                        </SegmentedControl.Root>
                    </Box>

                </Box>
                <Box>
                    <Text className={style.filter_cat}>SERVIZI</Text>
                    <Flex gapY="2" gapX="8" wrap="wrap">
                        {servizi.map((servizio, index) =>
                            <Text as="label" size="2" key={servizio}>
                                <Flex gap="2">
                                    <Checkbox />
                                    {servizio}
                                </Flex>
                            </Text>
                        )}

                    </Flex>
                </Box>
            </Flex>
        </Card>
        <Flex direction="column" gap="4">
            <Card style={{ width: "46vw" }}>
                <h2>
                    <Text>
                        {sender.city} {sender.zip} → {receiver.city} {receiver.zip}
                    </Text>
                </h2>
                <Flex justify="between" align="end">
                    <Flex direction="column" gap="4">
                        <Flex justify="between" gap="8">
                            <Flex direction="column">
                                <Text className={style.filter_cat}>MITTENTE</Text>
                                <Text>
                                    {sender.city} {sender.zip} - {sender.country}
                                </Text>
                            </Flex>
                            <Flex direction="column">
                                <Text className={style.filter_cat}>DESTINATARIO</Text>
                                <Text>
                                    {receiver.city} {receiver.zip} - {receiver.country}
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex gap="2" wrap="wrap">
                            {order && order.packages.map((pkg: any) => (
                                <Badge key={pkg.index} color="gray" className="capitalize">{pkg.type}.{pkg.index}</Badge>
                            ))}
                        </Flex>
                    </Flex>
                    <Flex direction="column">
                        <span>tariffa da: <Text style={{ fontSize: "2rem", fontWeight: "bolder" }}>€9.99</Text></span>
                        <Button>Modifica</Button>
                    </Flex>
                </Flex>
            </Card>
            <Card style={{ width: "46vw" }}>
                <Flex justify="between" gap="2">
                    <Box>
                        <Avatar fallback={economy.name} color="gray" />
                    </Box>
                    <Box width="100%">
                        <Flex gap="2">
                            <span style={{ fontWeight: "bolder" }}><Text>{economy.name}</Text></span>
                            <span><Text>{economy.cat}</Text></span>
                            <Badge color="green" className="capitalize">Miglior prezzo</Badge>
                        </Flex>
                        <Flex gap="2">
                            <span><Text>{economy.delivery}</Text></span>
                            <span>-</span>
                            <span><Text>{economy.pickup}</Text></span>
                        </Flex>
                    </Box>
                    <Flex direction="column">
                        <Text style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>€{economy.price}</Text>
                        <Button>Scegli</Button>
                    </Flex>
                </Flex>
            </Card>
            <Card style={{ width: "46vw" }}>
                <Flex justify="between" gap="2">
                    <Box>
                        <Avatar fallback={fastest.name} color="gray" />
                    </Box>
                    <Box width="100%">
                        <Flex gap="2">
                            <span style={{ fontWeight: "bolder" }}><Text>{fastest.name}</Text></span>
                            <span><Text>{fastest.cat}</Text></span>
                            <Badge color="blue" className="capitalize">Più veloce</Badge>
                        </Flex>
                        <Flex gap="2">
                            <span><Text>{fastest.delivery}</Text></span>
                            <span>-</span>
                            <span><Text>{fastest.pickup}</Text></span>
                        </Flex>
                    </Box>
                    <Flex direction="column">
                        <Text style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>€{fastest.price}</Text>
                        <Button>Scegli</Button>
                    </Flex>
                </Flex>
            </Card>
            {offerte.map((offerta, index) => (
                <Card style={{ width: "46vw" }} key={index}>
                    <Flex justify="between" gap="2">
                        <Box>
                            <Avatar fallback={offerta.name} color="gray" />
                        </Box>
                        <Box width="100%">
                            <Flex gap="2">
                                <span style={{ fontWeight: "bolder" }}><Text>{offerta.name}</Text></span>
                                <span><Text>{offerta.cat}</Text></span>
                            </Flex>
                            <Flex gap="2">
                                <span><Text>{offerta.delivery}</Text></span>
                                <span>-</span>
                                <span><Text>{offerta.pickup}</Text></span>
                            </Flex>
                        </Box>
                        <Flex direction="column">
                            <Text style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>€{offerta.price}</Text>
                            <Button>Scegli</Button>
                        </Flex>
                    </Flex>
                </Card>
            )
            )}
        </Flex>
            <Card style={{ width: "300px" }}>
                <Flex direction="column" justify="between" height="100%">
                <Flex direction="column" gap="3">
                    <h2><Text>Servizio selezionato:</Text></h2>
                    <Card>
                        <Flex justify="between" gap="2">
                            <Box>
                                <Avatar fallback={economy.name} color="gray" />
                            </Box>
                            <Box width="100%">
                                <Flex gap="2">
                                    <span style={{ fontWeight: "bolder" }}><Text>{economy.name}</Text></span>
                                    <span><Text>{economy.cat}</Text></span>
                                    <Badge color="green" className="capitalize">Miglior prezzo</Badge>
                                </Flex>
                                <Flex gap="2">
                                    <span><Text>{economy.delivery}</Text></span>
                                    <span>-</span>
                                    <span><Text>{economy.pickup}</Text></span>
                                </Flex>
                            </Box>
                        </Flex>
                    </Card>
                    <TextField.Root placeholder="CODICE SCONTO" >
                        <TextField.Slot>
                            <Icon path={mdiLabelPercent} size={0.5} />
                        </TextField.Slot>
                    </TextField.Root>
                    <Flex justify="between">
                        <p style={{display:"block"}}>Prezzo</p>
                        <p style={{display:"block"}}>€ 9.99</p>
                    </Flex>
                    <Flex justify="between">
                        <p style={{display:"block"}}>Sconto</p>
                        <p style={{display:"block"}}>-0</p>
                    </Flex>
                    <Flex justify="between">
                        <h2>Totale</h2>
                        <h2>€ 9.99</h2>
                    </Flex>
                </Flex>
                <Flex direction="column" gap="3">
                    <Button>Stampa</Button>
                    <Button color="lime">Acquista</Button>
                </Flex>
                </Flex>
            </Card>
    </Flex>
}