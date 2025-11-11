import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import styles from "./setup_shipping.module.css"

export default function SetupShippingCard({ index, title, description }: { index: number, title: string, description: string }) {
    return (
        <Card className={styles.card} variant="ghost">
            <Flex direction="column" align="center" justify="start" height="240px" gap="16px">
                <div className={styles.index} style={{
                    color:index%2?"white":"black",
                    backgroundColor:index%2?"#3873f6":"#d9fe54"
                }}>
                    <Text>{index}</Text>
                </div>
                <Flex direction="column">
                    <h3 className={styles.text}>{title}</h3>
                    <p className={styles.text}>{description}</p>
                </Flex>
            </Flex>
        </Card>
    )
}