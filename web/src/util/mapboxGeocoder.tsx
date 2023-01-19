import axios from 'axios';
export const getStreetNameForLocation = async (location: {lat: number, lng: number}) => {
    const apiKey = "pk.eyJ1IjoiZ3Vuc2JsYXppbiIsImEiOiJjbGNtcG00cjIwdG9nM29yMDE1enNpOXByIn0.Jjga3PH602hNS7V9iH0iJg";
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.lng},${location.lat}.json`, {params: {
        access_token: apiKey
    }});
    const resultItem = response.data["features"].find((el: Record<string, any>) => el["place_type"].includes("address")) ?? response.data["features"].find((el: Record<string, any>) => el["place_type"].includes("place"));
    if (!resultItem) return "Não disponível";
    return resultItem["text"];
}; 