import React, {useState, useEffect} from 'react';
import {Loading} from "../loader";
import {getPlaces, getNextPlaces, setPlacePhoto} from '../mapsApi';
import Game from "./container/Game";


export default function Index() {
    const [nextIndex, setNextIndex] = useState(0);
      const [position, setPosition] = useState('49.842957%2C24.031111');
      const [nextPlaces, setNextPlaces] = useState([]);
      const [places, setPlaces] = useState([]);
      navigator.geolocation.getCurrentPosition(position => setPosition(`${position.coords.latitude}%2C${position.coords.longitude}`));

      useEffect(() => getPlaces('church', position).then(result => {
          setPlaces(result.data)
          getNextPlaces(4, places, setNextPlaces, nextIndex, setNextIndex)
      }), []);



    if(!nextPlaces.length)
        return <Loading />
	return <Game nextPlaces={nextPlaces} setPlacePhoto={setPlacePhoto}/>
}