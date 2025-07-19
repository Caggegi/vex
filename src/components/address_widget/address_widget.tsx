type AddressProps = {
    title: string;
}

export default function AddressWidget(props:AddressProps) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}