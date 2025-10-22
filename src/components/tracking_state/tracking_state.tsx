import { Box, Card, Flex, Avatar, Text, Badge, Progress, RadioCards, Separator } from "@radix-ui/themes"
import { useTranslations } from "next-intl";
import { useState } from "react"

export interface TrackingStateProps {
    tracking_number: string
}

export default function TrackingState(props: TrackingStateProps) {
    const tp = useTranslations('tracking');
    const [service, setService] = useState<{ name: string }>({ name: "fedex" })
    const [order_status, setOrderStatus] = useState<string>("placed")

    return <Box>
        <Box>
            <Flex gap="3" align="start" justify={"between"}>
                <Flex gap="3" align="center" justify={"start"}>
                    <Avatar
                        size="3"
                        src={"https://logo.clearbit.com/" + service.name + ".com"}
                        radius="full"
                        color="brown"
                        fallback={service.name[0].toUpperCase()}
                    />
                    <Box>
                        <Text as="div" size="2" weight="bold">
                            # - {props.tracking_number}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            Delivery by: {service.name[0].toUpperCase()+service.name.slice(1)}
                        </Text>
                    </Box>
                </Flex>
                <Badge color="amber" className="capitalize">{tp("status."+order_status)}</Badge>
            </Flex>
            <Box pt="16px">
                <Box>
                    <RadioCards.Root value={order_status} columns={{ initial: "1", sm: "4" }}>
                        <RadioCards.Item value="placed">
                            <Flex direction="column" width="100%">
                                <Text weight="bold">Effettuato</Text>
                                <Text>02 ottobre 2025</Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value="in_progress">
                            <Flex direction="column" width="100%">
                                <Text weight="bold">Spedito</Text>
                                <Text>02 ottobre 2025</Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value="out">
                            <Flex direction="column" width="100%">
                                <Text weight="bold">In consegna</Text>
                                <Text>--</Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value="completed">
                            <Flex direction="column" width="100%">
                                <Text weight="bold">Consegnato</Text>
                                <Text>--</Text>
                            </Flex>
                        </RadioCards.Item>
                    </RadioCards.Root>
                </Box>
            </Box>
        </Box>
    </Box>
}