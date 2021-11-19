import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {savePoints} from "../../redux/actions/Actions";

function Game({items}){
	const dispatch = useDispatch();
    const store = useSelector(state => state.store);

	let index = Math.floor(Math.random()*items.length)

    let imgLink = items[index].link;

    console.log(items);
    const [points, setPoints] = useState(store.points);

    function HandleDeductPoints() {
        let point = -100;
        dispatch(savePoints(point));
        setPoints(store.points);
    }

    function HandleAddPoints() {
        let point = 200;
        dispatch(savePoints(point));
        setPoints(store.points);
    }

    function ListContainer({items,index}) {
    return(
        <ul className="name-list">
            {
                items.map(((item,keyId) => (
                    <li key={keyId}>
                        {keyId == index
                            ? <button type="button" className="btn btn-dark" onClick={()=>HandleAddPoints()}>{item.name}</button>
                            : <button type="button" className="btn btn-dark" onClick={()=>HandleDeductPoints()}>{item.name}</button>
                        }
                    </li>)))
            }
        </ul>
    );
}

    return(
        <div styles={{"display": "column"}}>
            <img className="rounded img-responsive" src={imgLink} width="500" height="600"/>
            <ListContainer items={items} index={index}/>
            <div>
                {points}
            </div>
        </div>
    );
}




export default Game;