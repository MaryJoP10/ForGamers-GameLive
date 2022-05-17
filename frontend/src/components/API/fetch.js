import {useState, useEffect} from 'react';

export const Fetch = (url) => {
    const [result, setResult] = useState({loanding: true, data: null})

    useEffect( () => {
        getData(url)
    }, [url])

    async function getData(url){
        try{
            setResult({loanding: true, data: null})
        const res = await fetch(url)
        const data = await res.json()
        setResult({loanding: false, data})
        }
        catch(e){
            console.log(e)
        }
    }

    return result
}