import { useState, useEffect } from "react";

interface props {
    url: string
}
export default function useFetch<T = unknown>({ url }: props) {

    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<unknown>()
    const [isLoading, setIsLoading] = useState<boolean>()

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(url);
                setIsLoading(true)
                if (!response.ok) {
                    throw new Error('hubo un error al acceder al los datos')
                }
                else {
                    const data: T = await response.json()
                    setData(data)
                    setIsLoading(false)
                }
            }
            catch (error) {
                setError(error)
                throw new Error('el error es' + error)
            }


        }
        fetchData()
    }, [url])

    return { data, isLoading, error }
}