import React, {useState,useEffect} from "react";
import Leaderboard from "../../Leaderboard";
import ReactDOM from 'react-dom';

function Bar({update, start, setEnd}) {
	const [seconds, setSeconds] = useState(20);

	useEffect(()=>{
		if (update > 0)
			setSeconds(20)
		else if (update < 0)
			setSeconds(seconds-6)
	}, [update])

	useEffect(() => {
		let interval = null;
			if (start) {
				interval = setInterval(() => {
					setSeconds(seconds => seconds - 0.5);
				}, 500);
				if (seconds < 0) {
					clearInterval(interval);
					setEnd(true)
				}
			}
		return () => clearInterval(interval);
		}, [start, seconds]);
	return(
        <div className="progress mb-3">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": `${(seconds/20)*100}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
        </div>
    );

}

export default Bar;