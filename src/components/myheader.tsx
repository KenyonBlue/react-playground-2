import './myheaderstyles.css'
function MyHeader() {
    const styles = {
        container: {
            display: 'flex',
            qwidth: '100%',
            border: '1px solid green'
        }
    }

    return (
        <>
        <div className="container">
            my header
        </div>
        </>
    )
}
export default MyHeader;

export function SecondHeader() {
    return (<div>
        
    </div>)
}