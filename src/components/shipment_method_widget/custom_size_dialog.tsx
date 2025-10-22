import { Dialog, Button, Flex, TextField, Text, Box, Slider, Switch, Tooltip } from "@radix-ui/themes";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import style from "./shipment_method_widget.module.css"
import { useTranslations } from "next-intl";
import Box3D from "./box_3d";
import Icon from "@mdi/react";
import { mdiAbTesting, mdiRuler } from "@mdi/js";

export default function CustomSizeDialog() {
    const default_dimentions: [width: number, height: number, depth: number] = [200, 200, 200]
    const [maxDimention, setMaxDimention] = useState<number>(1000)
    const min_dimention: number = 10
    const [inches, setInches] = useState(false)
    const [wireframe, showWireframe] = useState(false)
    const [animate, toggleAnimation] = useState(true)
    const [dimentions, setDimentions] = useState<[width: number, height: number, depth: number]>(default_dimentions)

    useEffect(() => {
        if (maxDimention < min_dimention) return;
        if (dimentions[0] > maxDimention) setDimentions((old) => [maxDimention, old[1], old[2]])
        if (dimentions[1] > maxDimention) setDimentions((old) => [old[0], maxDimention, old[2]])
        if (dimentions[2] > maxDimention) setDimentions((old) => [old[0], old[1], maxDimention])
    }, [maxDimention])

    const o = useTranslations('others');

    return (
        <Dialog.Content maxWidth="72vw">
            <Dialog.Title>{o("custom_shipping")}</Dialog.Title>
            <Dialog.Description size="2" mb="4">
                {o("custom_shipping_subtitle")}
            </Dialog.Description>

            <Flex className={style.flex_new_box} gap="2">
                <Box className={style.flex_content_new_box}>
                    <Canvas fallback={<div>Sorry no WebGL supported!</div>} camera={{ position: [0, 0, 6] }}>
                        <Box3D dimentions={dimentions}
                            wireframe={wireframe}
                            animate={animate}
                            ratio={4 / maxDimention} />
                    </Canvas>
                </Box>
                <Flex direction="column" gap="3" className={style.flex_content_new_box}>

                    <Flex align="center" justify="between">
                        <Box maxWidth="100px">
                            <Tooltip 
                            content={`${o("box_max_dim_tooltip")}`}>
                            <TextField.Root
                                color="gray"
                                variant="soft"
                                value={maxDimention}
                                onChange={(event) => {
                                    let value = parseInt(event.currentTarget.value);
                                    if (value > min_dimention) setMaxDimention(value)
                                }}>
                                <TextField.Slot>
                                    <Icon path={mdiRuler} size={0.8} color={"rgba(143, 143, 143, 1)"} />
                                </TextField.Slot>
                            </TextField.Root>
                            </Tooltip>
                        </Box>
                        <Flex align="center">
                            <label
                                htmlFor="cm"
                                style={{ paddingRight: 8 }}
                                className="lowercase"
                            >
                                {o("metric")}
                            </label>
                            <Switch checked={inches} color="gray" onCheckedChange={setInches} />
                            <label
                                htmlFor="inch"
                                style={{ paddingLeft: 8 }}
                                className="lowercase"
                            >
                                {o("imperial")}
                            </label>
                        </Flex>

                    </Flex>
                    <label>
                        <Flex direction="row" justify="between" align="center">
                            <Text as="div" size="2" mb="2" weight="bold">
                                {o("width")}
                            </Text>
                            <Text as="div" size="2" mb="2">{(dimentions[0] / (inches ? 2.54 : 1)).toFixed(2)} {inches ? o("inch") : "cm"}</Text>
                        </Flex>
                        <Slider defaultValue={[default_dimentions[0]]} value={[dimentions[0]]} onValueChange={(value) => {
                            setDimentions((old) => [value[0], old[1], old[2]])
                        }} max={maxDimention} min={min_dimention} />
                    </label>
                    <label>
                        <Flex direction="row" justify="between" align="center">
                            <Text as="div" size="2" mb="2" weight="bold">
                                {o("height")}
                            </Text>
                            <Text as="div" size="2" mb="2">{(dimentions[1] / (inches ? 2.54 : 1)).toFixed(2)} {inches ? o("inch") : "cm"}</Text>
                        </Flex>
                        <Slider defaultValue={[default_dimentions[1]]} value={[dimentions[1]]} onValueChange={(value) => {
                            setDimentions((old) => [old[0], value[0], old[2]])
                        }} max={maxDimention} min={min_dimention} />
                    </label>
                    <label>
                        <Flex direction="row" justify="between" align="center">
                            <Text as="div" size="2" mb="2" weight="bold">
                                {o("depth")}
                            </Text>
                            <Text as="div" size="2" mb="2">{(dimentions[2] / (inches ? 2.54 : 1)).toFixed(2)} {inches ? o("inch") : "cm"}</Text>
                        </Flex>
                        <Slider defaultValue={[default_dimentions[2]]} value={[dimentions[2]]} onValueChange={(value) => {
                            setDimentions((old) => [old[0], old[1], value[0]])
                        }} max={maxDimention} min={min_dimention} />
                    </label>
                    <Flex align="center">
                        <label
                            htmlFor="wireframe"
                            style={{ paddingRight: 8 }}
                            className="capitalize"
                        >
                            {o("wireframe")}
                        </label>
                        <Switch checked={wireframe} onCheckedChange={showWireframe} />
                    </Flex>
                    <Flex align="center">
                        <label
                            htmlFor="animate"
                            style={{ paddingRight: 8 }}
                            className="capitalize"
                        >
                            {o("animate")}
                        </label>
                        <Switch checked={animate} onCheckedChange={toggleAnimation} />
                    </Flex>
                </Flex>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray" className="capitalize">
                        {o("cancel")}
                    </Button>
                </Dialog.Close>
                <Dialog.Close>
                    <Button className="capitalize">
                        {o("save")}
                    </Button>
                </Dialog.Close>
            </Flex>
        </Dialog.Content>)

}