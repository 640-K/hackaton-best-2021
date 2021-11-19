import axios from 'axios';

const url = 'http://localhost:3001'

export function getPlacePhoto(place) {
    console.log('getPlacePhoto: ' + place);
    if (place === undefined) return {then: (x) => {}};
    return axios.get(`${url}/api/places-image?photo_reference=${place.photos[0].photo_reference}`);
}

export function getPlaces(keyword, location, radius = 1500) {
    return axios.get(`${url}/api/places?keyword=${keyword}&location=${location}&radius=${radius}`);
}

export function getNextPlaces(count, places, setPlaces, nextIndex, setNextIndex) {
    console.log(count + ' ' + nextIndex);
    if (nextIndex+count >= places.length) {
        setPlaces(places.slice(nextIndex));
        setNextIndex(places.length);
    } else {
        setPlaces(places.slice(nextIndex, nextIndex+count));
        setNextIndex(nextIndex + count);
    }
}
