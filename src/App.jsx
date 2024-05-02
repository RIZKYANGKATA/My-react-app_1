import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/profil'

function MyButton(){
  return <button>My Button</button>;
}

//Conditional Rendering
function Item(props){
  if (props.isPacked){
    return <li>{props.nama} + Success</li>
  }
  return <li>{props.nama}</li>
}

function App() {
  return ( 
   <div>
    <h1>BELAJAR REACT</h1>
    <Profile nama="Rizky" domisili="Madiun" Hp="081226671134"/>
    <Profile nama="Angkata" domisili="Madiun" Hp="081226671134"/>
    <MyButton />
    <ul>
        <Item isPacked={true} nama="Space Suit"/>
        <Item isPacked={true} nama="Space X"/>
        <Item isPacked={false} nama="Tesla"/>
    </ul>
  </div>
  
  );
}

export default App
