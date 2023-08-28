import { useState, useEffect } from "react";


export function GetData(url) {
    const [data, setData] = useState([])

    async function getApi(url) {
        await fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error occurred!')
            }
            return response.json()
        })
        .then((data) => setData(data))
        .catch((err) => {
            throw new Error('Бен, я нид хелп!')
        })
    }

    useEffect(() => {
        getApi(url)
    }, [])

    return data
}