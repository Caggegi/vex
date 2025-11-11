import { Flex } from "@radix-ui/themes";
import style from "./couriers_strip.module.css"
import Image from "next/image";

export default function CouriersStrip(){

    const couriers:{color:string, site:string}[] = [
        {
            color: "blue",
            site: "sda.it"
        },
        {   
            color:"purple",
            site: "fedex.com"
        },
        {
            color:"red",
            site: "brt.it"
        },
        {
            color:"orange",
            site: "tnt.it"
        },
        {
            color:"purple",
            site: "euroexpress.com"
        },
        {
            color:"brown",
            site: "ups.com"
        },
    ]

    function getLogo(courier:string):string{
        return "https://logo.clearbit.com/"+courier;
    }

    return <Flex align="center" justify="between" className={style.strip}>
        {couriers.map((element)=>{
            return (
                <div key={element.site}>
                    <Image className={style.logo} src={getLogo(element.site)} height={100} width={64} alt={element.site}/>
                </div>
            )
        })}
    </Flex>
}