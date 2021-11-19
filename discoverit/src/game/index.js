import React, {useEffect,useState} from 'react';
import Game from "./container/Game.js";
import Bar from "./container/Bar.js";


export default function Index() {
	console.log("check restart");
	const [restart, setRestart] = useState(1);
	let a = [
        {
            id: 0,
            name: "Church",
            link: "https://upload.wikimedia.org/wikipedia/commons/5/53/Lviv_Bernardine_monastery.jpg",
        },
        {
            id: 1,
            name: "City Hall",
            link: "https://lviv.travel/image/news/99/78/99783d62a5876cfa44b201c791496b4f0e379957_1581667807.jpeg?crop=3840%2C2066%2C0%2C47",

        },
        {
            id: 2,
            name: "Tower",
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyU204P3MtPy_APPpkjy3aDlngzuPo7mlmJMgFRmCPPN5VWmqRhrAkQlRgj64kC38KaU&usqp=CAU",
        },
        {
            id: 3,
            name: "Museum",
            link: "https://api.time.com/wp-content/uploads/2019/09/british-museum-london-exterior.jpg",
        }
    ];
    const [items, setItems] = useState(a);


	return(
		 <div styles={{"display": "column"}}>
			{a ? <div> <Game items={items}/> <Bar setRestart={setRestart}/> </div> :<Loading />}
		</div>
	);

	function Loading(){
	    return(
	        <div className="spinner-border text-primary" role="status">
	            <span className="sr-only"></span>
	        </div>
	    );
	}
}