import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export interface Box3DProps {
    wireframe: boolean,
    animate: boolean,
    dimentions: [width: number, height: number, depth: number]
    ratio: number
}

export default function Box3D(props: Box3DProps) {

    const boxMesh = useRef(null)
    useFrame(({clock}) => {
        if(!props.animate || !boxMesh || !boxMesh.current) return
        //console.log("Hey, I'm executing every frame!")
        (boxMesh.current as any).rotation.y = clock.elapsedTime/5;
    })
    return (
            <group scale={[props.ratio, props.ratio, props.ratio]}>
                <mesh visible rotation={[0, 1, 0]} ref={boxMesh}>
                    <boxGeometry args={props.dimentions} />
                    <meshBasicMaterial wireframe color="gray" />
                    {!props.wireframe && <meshBasicMaterial color={"rgba(174, 137, 104, 1)"} />}
                </mesh>
            </group>)
}