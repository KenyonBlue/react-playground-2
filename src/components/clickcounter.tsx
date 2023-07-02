import withCounter from './higherOrder'

function ClickCounter(props: any) {

    return (
        <>
        <div style={{width: '100vw', height: 16, margin: '10px 0px 10px'}} onClick={() => props.updateCount()}> {props.name} click me {props.count} </div>
        </>
    )

}

export default withCounter(ClickCounter);