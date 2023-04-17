import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
            
        <div className="fields">

            <div className="header"> <h2>Proficieny Test</h2> </div>

            <div><input type="text" name="name" placeholder="Name" value=""></input></div>
            
            <div><input type="text" name="surname" placeholder="Surname" value=""></input></div>

            <div><input type="number" name="id" placeholder="ID Number" value=""></input></div>

            <div><input type="text" name="dob" placeholder="Date of Birth" value=""></input></div>

            <div><button type="submit" name="submit"> Submit </button></div>

            <div><button name="cancel"> Cancel </button></div>

        </div>
        

    </form>
  );
}

export default App;
