import { mdiMinus, mdiPackageVariantClosed, mdiPlus } from "@mdi/js"
import Icon from "@mdi/react"
import { Card, Text, Flex, IconButton, Separator } from "@radix-ui/themes"
import { Form } from "radix-ui"
import "./package_dimension_widget.css"
import { useState } from "react"

export const PackageDimensionWidget = () => {

    const [count, setCount] = useState(1);

    const handleMinus=() => {
        setCount((value)=>{
            if(value>0){
                return value-1
            }
            return value
        })
    }
    
    const handlePlus=() => {
        setCount((value)=>{
            if(value<99){
                return value+1
            }
            return value
        })
    }

    return (
        <Card>
            <Flex gap="2" align="center">
                <Icon path={mdiPackageVariantClosed} size={1}></Icon>
                <Flex align="center">
                    <IconButton variant="ghost" aria-label="Mail Icon" onClick={handleMinus}><Icon path={mdiMinus} size={1}></Icon></IconButton>
                    <Form.Root className="FormRoot">
                        <Form.Field className="FormField" name="number_of_mails">
                            <Form.Control asChild>
                                <input type="number" className="Input" required value={count}/>
                            </Form.Control>
                        </Form.Field>
                    </Form.Root>
                    <IconButton variant="ghost" aria-label="Mail Icon" onClick={handlePlus}><Icon path={mdiPlus} size={1}></Icon></IconButton>
                </Flex>
                <Separator orientation="vertical" />
                <Text>Peso in kg</Text>
                <Separator orientation="vertical" />
                <Text>Lato 1 cm</Text>
                <Separator orientation="vertical" />
                <Text>Lato 2 cm</Text>
                <Separator orientation="vertical" />
                <Text>Lato 3 cm</Text>
            </Flex>
        </Card>
    )
}