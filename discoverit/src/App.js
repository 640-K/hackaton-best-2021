import './App.css';
import Login from "./Login";
import {useState} from "react";


const App = (props) =>{
  let a = [
    {
        id: 0,
        name: "Church",
    },
    {
        id: 1,
        name: "City Hall",

    },
    {
        id: 2,
        name: "Tower",
    },
    {
        id: 3,
        name: "Museum",
    },
    {
        id: 4,
        name: "Farm",
    },
    {
        id: 5,
        name: "Restaurant",
    },
    {
        id: 6,
        name: "Park",
    }
  ];

  const [name, setName] = useState(false);
  if(!name ){
      return <Login setName={setName}/>;

  }

  return (
      <div className="App">
          <header className="App-header">
              <ListContainer name={a}/>
          </header>
      </div>
  );
}

function ListContainer(props) {
  return(
<div>
    wswegwegwegweg
</div>
    );
}

export default App;
