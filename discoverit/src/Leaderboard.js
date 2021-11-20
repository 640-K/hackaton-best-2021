import React, {useEffect, useState} from "react";
import {setScore, getLeader} from "./firebase"
import data from "bootstrap/js/src/dom/data";
const Leaderboard = ({score, setEnd, setStart, setUpdate, setPoints}) => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        setScore(score)
        getLeader().then(data => {
            setUsers(data)
        })
    }, [])

    function getElement(id, name, score){
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{score}</td>
            </tr>
        )}

    return (
        <div>

            <h1 className="d-flex justify-content-center mb-3">Your Score : {score}</h1>
            <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary mb-3 w-50" onClick={()=>{setEnd(false);setStart(false);setUpdate(0);setPoints(0)}}>Restart</button>
                </div>
            <div style={{"overflowY": "auto"}}>
        <table className="table" >
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((d, i)=>{
                    return getElement( i+1,d['name'],d['score'])
                })
            }
            </tbody>
        </table>
                </div>
            </div>
    );
}

export default Leaderboard;