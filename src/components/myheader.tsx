import './myheaderstyles.css'
import { useSelector } from 'react-redux';

function MyHeader() {
    const {name} = useSelector((state: any) => state.person)

    // const styles = {
    //     container: {
    //         display: 'flex',
    //         qwidth: '100%',
    //         border: '1px solid green'
    //     }
    // }

    console.log({name})

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