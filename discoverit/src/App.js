import './App.css';

const App = () =>{
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

  return (
    <div className="App">
      <header className="App-header">
        <ListContainer names = {a} />

      </header>
    </div>
  );
}

function ListContainer(props) {
  return(
        <ul className="name-list">
            {
                props.names.slice(0, 6).map(((names,keyId) => (
                    <li key={keyId}>
                        <button type="button" className="btn btn-dark">{names.name}</button>
                    </li>)))
            }
        </ul>
    );
}

export default App;
