import React, {useState, useEffect, useContext} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {savePoints} from "../../redux/actions/Actions";
import Bar from "./Bar";
import contex from "../../contex";
import Leaderboard from "../../Leaderboard";
import {getMaxScore} from '../../firebase'
import {getNextPlaces, getPlacePhotoLink} from '../../mapsApi';


function Game({places}) {
    const dispatch = useDispatch();
    const store = useSelector(state => state.store);
    const {user} = useContext(contex)
    const [points, setPoints] = useState(store.points);
    const [update, setUpdate] = useState(0);
    const [start, setStart] = useState(false);
    const [isEnd, setEnd] = useState(false);
    const [max, setMax] = useState('???');
    const [random, setRandom] = useState(Math.floor(Math.random() * 4))

    // const [gameRendering,setGameRendering] = useState(false);
    const [nextPlaces, setNextPlaces] = useState([]);
    const [nextIndex, setNextIndex] = useState(0);

    // getNextPlaces(4, places, setNextPlaces, nextIndex, setNextIndex)

    useEffect(() => {
        getNextPlaces(4, places, setNextPlaces, nextIndex, setNextIndex)
    },[])

    useEffect(()=>{
        getMaxScore().then(p => {
            setMax(p)
        })
    }, [start])

    function HandleDeductPoints() {
        setUpdate(update < 0 ? update-1 : -1);
    }

    function HandleAddPoints() {
        setRandom(Math.floor(Math.random() * 4))
        getNextPlaces(4, places, setNextPlaces, nextIndex, setNextIndex)
        setPoints(points+100);
        setUpdate(update > 0 ? update+1 : 1)
    }

    function ListContainer({items, index}) {
        return (
            <ul className="name-list" style={{"listStyleType": "none", "paddingLeft": "0", "columnCount": "2"}}>
                {
                    items.map(((item, keyId) => (
                        <li key={keyId}>
                            <button type="button" className="btn btn-primary w-100 mt-3 p-3"
                                    onClick={keyId === index ? HandleAddPoints : HandleDeductPoints}>{item.name}</button>
                        </li>
                    )))
                }
            </ul>
        );
    }

    // useEffect(() => {
    //     if (nextPlaces !== undefined && nextPlaces !== null && nextPlaces.length > 0 && gameRendering)
    //         setPlacePhoto('place-image', nextPlaces[0])
    // }, [gameRendering]);

    function getGame(index) {
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">Score : <b>{points}</b></h5>
                    <h5 className="card-title ">Hello, {user}</h5>
                    <h5 className="card-title">Max score : <b>{max}</b></h5>
                </div>
                <Bar update={update} start={start} setEnd={setEnd}/>
                <img id="place-image" className="rounded img-responsive card-img-top" src={getPlacePhotoLink(nextPlaces[index])}/>
                <ListContainer items={nextPlaces} index={index}/>
            </div>
        )
    }

    function getStart() {
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
                            {start ? isEnd ? <Leaderboard score={points} setEnd={setEnd} setStart={setStart} setUpdate={setUpdate} setPoints={setPoints}/> : getGame(random) : getStart()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Game;