import React, {useState,useEffect} from "react";

function Bar({setRestart}) {
	const [seconds, setSeconds] = useState(10);
	const [isActive, setIsActive] = useState(true);

	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		setSeconds(0);
		setIsActive(true);
	}

	useEffect(() => {
		let interval = null;
			if (isActive) {
				interval = setInterval(() => {
					setSeconds(seconds => seconds - 0.5);
				}, 500);
				if (seconds === 0) {
					reset();
					clearInterval(interval);
				}
			}
		return () => clearInterval(interval);
		}, [seconds]);
	return(
        <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{"width": `${(seconds/10)*100}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    );

}

export default Bar;