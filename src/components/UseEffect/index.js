import { useState, useEffect } from "react";


export function getData(url) {
    const [data, setData] = useState([])

    function getApi(url) {
        fetch(url)
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
    }, [url])

    return data
}