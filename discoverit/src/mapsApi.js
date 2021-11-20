import axios from 'axios';
import data from './data/data.json'

const placesPhotosUrl = 'https://maps.googleapis.com/maps/api/place/photo';

export function setPlacePhoto(imageId, place, maxWidth = 1600, maxHeight = 1600) {
    console.log('setPlacePhoto: ' + place)
    if (document.getElementById(imageId) != null)
        document.getElementById(imageId).src = `${placesPhotosUrl}?photo_reference=${place.photos[0].photo_reference}&key=${data.maps.key}&maxwidth=${maxWidth}&maxheight=${maxHeight}`
}

export function getPlacePhotoLink(place, maxWidth = 1600, maxHeight = 1600) {
    return `${placesPhotosUrl}?photo_reference=${place.photos[0].photo_reference}&key=${data.maps.key}&maxwidth=${maxWidth}&maxheight=${maxHeight}`
}

export function getPlaces(keyword, location, radius = 10000) {
    return axios.get(`${data.backendUrl}/api/places?keyword=${keyword}&location=${location}&radius=${radius}`);
}

export function randomArrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export function getNextPlaces(count, places, setPlaces, nextIndex, setNextIndex) {
    setPlaces(randomArrayShuffle(places).slice(0,4))
}
