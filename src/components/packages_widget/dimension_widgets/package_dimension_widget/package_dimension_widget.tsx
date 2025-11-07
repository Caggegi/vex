import { mdiBagChecked, mdiMinus, mdiPackageVariantClosed, mdiPlus } from "@mdi/js"
import Icon from "@mdi/react"
import { Card, Text, Flex, IconButton, Separator, Select } from "@radix-ui/themes"
import { Form } from "radix-ui"
import "./package_dimension_widget.css"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

type PackageDimensionWidgetProps = {
    id: number;
    removePackage: (id: number) => void;
}

export const PackageDimensionWidget = ({id, removePackage}:PackageDimensionWidgetProps) => {
    const s = useTranslations('standard_sizes');
    const p = useTranslations('placeholders');

    const [count, setCount] = useState(1);

    const handleMinus = () => {
        setCount((value) => {
            if (value > 0) {
                return value - 1
            }
            removePackage(id);
            return value
        })
    }

    const handlePlus = () => {
        setCount((value) => {
            if (value < 99) {
                return value + 1
            }
            return value
        })
    }


    const standard_sizes: { icon: string, value: string, weight: number, placeholder: string }[] = [
        {
            icon: mdiPackageVariantClosed,
            value: "1",
            placeholder: s("1kpkg"),
            weight: 1
        }, {
            icon: mdiPackageVariantClosed,
            value: "2",
            placeholder: s("3kpkg"),
            weight: 3
        }, {
            icon: mdiPackageVariantClosed,
            value: "3",
            placeholder: s("5kpkg"),
            weight: 5
        }, {
            icon: mdiPackageVariantClosed,
            value: "4",
            placeholder: s("10kpkg"),
            weight: 10
        }, {
            icon: mdiPackageVariantClosed,
            value: "5",
            placeholder: s("20kpkg"),
            weight: 20
        }, {
            icon: mdiPackageVariantClosed,
            value: "6",
            placeholder: s("30kpkg"),
            weight: 30
        }, {
            icon: mdiBagChecked,
            value: "7",
            placeholder: s("small"),
            weight: 1
        }, {
            icon: mdiBagChecked,
            value: "8",
            placeholder: s("medium"),
            weight: 1
        }, {
            icon: mdiBagChecked,
            value: "9",
            placeholder: s("large"),
            weight: 1
        }, /*{
            icon: mdiPackageVariantClosedPlus,
            value: "10",
            placeholder: s("custom_size")
        }*/
    ]

    const [currentValue, setCurrentValue] = useState<string>(standard_sizes[0].value)

    useEffect(()=>{
        if(count<1)
            removePackage(id);
    },[count])

    return (
        <Card style={{ minHeight: "64px" }}>
            <Flex gap="2" align="center">
                <Icon path={mdiPackageVariantClosed} size={1}></Icon>
                <Flex align="center">
                    <IconButton variant="ghost" aria-label="Mail Icon" onClick={handleMinus}><Icon path={mdiMinus} size={1}></Icon></IconButton>
                    <Form.Root className="FormRoot">
                        <Form.Field className="FormField" name="number_of_mails">
                            <Form.Control asChild>
                                <input type="number" className="Input" required value={count} />
                            </Form.Control>
                        </Form.Field>
                    </Form.Root>
                    <IconButton variant="ghost" aria-label="Mail Icon" onClick={handlePlus}><Icon path={mdiPlus} size={1}></Icon></IconButton>
                </Flex>
                <Separator orientation="vertical" />
                <form>
                    <Select.Root size="3" defaultValue={standard_sizes[0].value} onValueChange={setCurrentValue}>
                        <Select.Trigger style={{ width: "100%" }} />
                        <Select.Content>
                            {standard_sizes.map(element => (
                                <Select.Item key={element.value} value={element.value}>
                                    <Flex><Icon path={element.icon} size={1} /><span>{element.placeholder}</span></Flex>
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Root>
                </form>
            </Flex>
        </Card>
    )
}