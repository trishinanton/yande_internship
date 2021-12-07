import logo from './logo.svg';
import './App.css';
import {Form} from "./Form";

function App() {
    const onReserveFlight = (pickedFlight)=>{
        console.log(pickedFlight)
    }
    const onAvailableFlights = (availableFlights)=>{
        console.log(availableFlights)
    }
    let data = ['Moscow', 'Paris', 'Milan','cvb','fg','fdf']
    const getSuggestionsFromServer = (callback)=>{
        callback(data)
    }
  return (
    <div className="App">
      <Form onReserveFlight={onReserveFlight} onAvailableFlights={onAvailableFlights} getSuggestionsFromServer={getSuggestionsFromServer}/>
    </div>
  );
}

export default App;
