import { useEffect, useState } from "react"

export const usePosition = () => {
    console.log("Get geolocation")
    const [position, setPosition] = useState<{longitude: number | undefined, latitude: number | undefined}>({longitude: undefined, latitude: undefined})

    useEffect(() => {
        const geolocation = navigator.geolocation; 
        if(!geolocation) {
            console.log("Please allow geolocation on your browser.")
            return
        }

        geolocation.getCurrentPosition(({coords}) =>
        {
            
                setPosition(
                    {
                        longitude: coords.longitude,
                        latitude: coords.latitude
                    })})

            

    }, [])

    return {...position}
}