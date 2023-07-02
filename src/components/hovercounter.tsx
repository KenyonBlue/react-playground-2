import HigherOrderComponent from './higherOrder'

function HoverCounter(props: any) {
    return (
        <>
        <div style={{width: '100vw', height: 16, margin: '10px 0px 10px'}} onMouseOver={() => props.updateCount()}> {props.name} hover over me {props.count} </div>
        </>
    )
}

export default HigherOrderComponent(HoverCounter);