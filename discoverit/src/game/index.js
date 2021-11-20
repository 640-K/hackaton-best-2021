import React, {useState, useEffect} from 'react';
import {Loading} from "../loader";
import {getPlaces, getNextPlaces, setPlacePhoto} from '../mapsApi';
import Game from "./container/Game";


export default function Index() {
  const [position, setPosition] = useState('49.842957%2C24.031111');
  const [places, setPlaces] = useState([]);
  navigator.geolocation.getCurrentPosition(position => setPosition(`${position.coords.latitude}%2C${position.coords.longitude}`));

  useEffect(() => getPlaces('church', position).then(result => {
    console.log('RESULT: ' + result.data)
    setPlaces(result.data)
  }), []);


  if(places.length == 0) {
      return <Loading />
  }
    return <Game places={places}/>
}