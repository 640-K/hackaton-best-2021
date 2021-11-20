import axios from 'axios';
import data from './data/data.json'

const placesPhotosUrl = 'https://maps.googleapis.com/maps/api/place/photo';
const backendUrl = 'http://localhost:3001';

export function setPlacePhoto(imageId, place, maxWidth = 1600, maxHeight = 900) {
    document.getElementById(imageId).src = `${placesPhotosUrl}?photo_reference=${place.photos[0].photo_reference}&key=${data.maps.key}&maxwidth=${maxWidth}&maxheight=${maxHeight}`
}

export function getPlaces(keyword, location, radius = 1500) {
    return axios.get(`${backendUrl}/api/places?keyword=${keyword}&location=${location}&radius=${radius}`);
}

export function getNextPlaces(count, places, setPlaces, nextIndex, setNextIndex) {
    if (nextIndex+count >= places.length) {
        setPlaces(places.slice(nextIndex));
        setNextIndex(places.length);
    } else {
        setPlaces(places.slice(nextIndex, nextIndex+count));
        setNextIndex(nextIndex + count);
    }
}
