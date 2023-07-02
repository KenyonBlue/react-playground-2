import axios from "axios"
import { useState, useEffect } from "react"

const useAxios = (url: string) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<any[]>()
    const [error, setError] = useState<any>()

    useEffect(() => {
        setLoading(true)
        // axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            console.log('here', url)
            const fetchData = () => {
             axios.get(url).then((res) => {
              const ten = res.data.slice(0,49)
              
              setData(ten);
            }).catch((error) => {
                console.log(error)
            })    
            
            setLoading(false)
        }

        fetchData()
    }, [url])

    return {loading, data, error}
}

export default useAxios;