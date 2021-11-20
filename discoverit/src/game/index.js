import React, {useState, useEffect} from 'react';
import {Loading} from "../loader";
import {getPlaces, getNextPlaces, randomArrayShuffle} from '../mapsApi';
import Game from "./container/Game";


export default function Index() {
  const [position, setPosition] = useState('49.842957%2C24.031111');
  const [places, setPlaces] = useState([]);
  navigator.geolocation.getCurrentPosition(position => setPosition(`${position.coords.latitude}%2C${position.coords.longitude}`));

  useEffect(() => {
    let d = []
    for(let key of ['statue', 'church', 'palace', 'музей', 'пам\'ятка', 'старий' ,'порохова', 'високий' ,'ратуша','монастир', 'базар', 'фортеця', 'tower', 'museum', 'streets', 'seensight'] ){
      getPlaces(key, position).then(result => {
        let t = []
        result.data.map(tw => {
          if(tw['photos']){
            t.push(tw)
          }
        })
        d = [...d, ...randomArrayShuffle(t)]
      }).then(t=>{
        setPlaces(d)
      })}

  }, []);


  if(places.length == 0) {
      return <Loading />
  }
    return <Game places={places}/>
}