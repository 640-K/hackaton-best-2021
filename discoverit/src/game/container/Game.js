import React, {useState, useEffect, useContext} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {savePoints} from "../../redux/actions/Actions";
import Bar from "./Bar";
import contex from "../../contex";
import Leaderboard from "../../Leaderboard";
import {getMaxScore} from '../../firebase'


function Game({nextPlaces, setPlacePhoto}) {
    const dispatch = useDispatch();
    const store = useSelector(state => state.store);
    const {user} = useContext(contex)
    let index = Math.floor(Math.random() * nextPlaces.length)
    console.log(nextPlaces)
    const [points, setPoints] = useState(store.points);
    const [update, setUpdate] = useState(0);
    const [start, setStart] = useState(false);
    const [isEnd, setEnd] = useState(false);
    const [max, setMax] = useState('???');

    useEffect(()=>{
        getMaxScore().then(p=>{
            setMax(p)
        })
    }, [])

    function HandleDeductPoints() {
        setUpdate(update < 0 ? update-1: -1);
    }

    function HandleAddPoints() {
        let point = 100;
        dispatch(savePoints(point));
        setUpdate(update > 0 ? update+1: 1)
        setPoints(store.points);

    }

    function ListContainer({items, index}) {
        return (
            <ul className="name-list" style={{"listStyleType": "none", "paddingLeft": "0", "columnCount": "2"}}>
                {
                    items.map(((item, keyId) => (
                        <li key={keyId}>
                            <button type="button" className="btn btn-primary w-100 mt-3 p-3"
                                    onClick={keyId === index ? HandleAddPoints : HandleDeductPoints}>{item.name}</button>
                        </li>)))
                }
            </ul>
        );
    }

    useEffect(() => {
        if (nextPlaces !== undefined && nextPlaces !== null && nextPlaces.length > 0)
          setPlacePhoto('image', nextPlaces[0])
      }, [nextPlaces]);
//getNextPlaces(4, places, setNextPlaces, nextIndex, setNextIndex)}

    function getGame(){
        return (
            <div>
                <div className="d-flex justify-content-between">
                                <h5 className="card-title">Score : <b>{points}</b></h5>
                                <h5 className="card-title ">Hello, {user}</h5>
                                <h5 className="card-title">Max score : <b>{max}</b></h5>
                            </div>
                            <Bar update={update} start={start} setEnd={setEnd}/>
                            <img id="image" className="rounded img-responsive card-img-top"/>
                            <ListContainer items={nextPlaces} index={index}/>
            </div>
        )
    }

    function getStart(){
        return (
            <div className="d-flex justify-content-center align-items-center" style={{"minHeight": "50vh"}}>
                <button type="button" className="btn btn-primary p-3 w-50" onClick={setStart.bind(true)}>Start</button>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{"height": "100vh"}}>
                <div className="col-11">
                    <div className="card">
                        <div className="card-body">
                            {start? isEnd?  <Leaderboard score={points} setEnd={setEnd} setStart={setStart} setUpdate={setUpdate} setPoints={setPoints}/> :getGame(): getStart()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Game;