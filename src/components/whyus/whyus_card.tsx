import Icon from "@mdi/react";
import { Box, Button, Card, Flex } from "@radix-ui/themes";
import styles from "./whyus.module.css"
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";


export default function WhyUSCard({ icon, title, description, button }: { icon: string, title: string, description: string, button: string }) {
    return (
        <Card className={styles.card} variant="classic">
            <Flex direction="column" align="start" justify="between" height="240px">
                <Box>
                    <Flex justify="start" align="center" gap="8px">
                        <div className={styles.icon_card}>
                            <Icon path={icon} size={1} color="white" style={{ margin: 0 }} />
                        </div>
                        <h3>{title}</h3>
                    </Flex>
                    <p>{description}</p>
                </Box>
                <Button variant="ghost">
                    <span>{button}</span>
                    <Icon path={mdiArrowRight} size={0.8}></Icon>
                </Button>
            </Flex>
        </Card>
    )
}