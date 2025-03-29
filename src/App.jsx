import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'                                         
import './App.css'
import toDo from './ToDo';
import ToDo from './ToDo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToDo task="done" ></ToDo> 

      {/* <h1>Vite + React</h1>
      <Cricketer name='Steve Smith' run='101111'></Cricketer>
     <Person className = 'shohan' ></Person>
     <Developer name ='pal'></Developer>
     <Developer2 name= 'rakhi'></Developer2>
     <Developer3 name='rakhal'></Developer3>
     <Pookie></Pookie>
     <Babe></Babe>
     <New></New>    */}

    </>
  )
}

function Cricketer ({name, run}){
  return(
    <div>
    <p>Name:{name} </p>
    <p>Ability:{run}</p>
    </div> 
  )
}

function Person (){
  const name = "shohan";
  const place = 'boalmari' ;
  return(
  <p>fuck cse, fucker name : {name} and he is from {place} </p>
  )
}

function Developer (props){
 console.log(props)
  return(
    <div>
      <p>hey, everyone , i am {props.name}. </p>
    </div>
  )
}

function Developer2 (props){
  return(
    <h4>Hey everyone i am who i am {props.name} </h4>
  )
}
function Developer3 (props) { 
  return(
  <h3> Hey  , i am a react Developer, named {props.name }    
      if you have any problem regarding your website i am here to help......
  </h3>

  )               
}


function Pookie() {
  return(
    <div>
      <p className='pookie'> hey i am your pookie gtp how are youShow your life is going on</p>
      <p> i am always here for you to help if you ever feel low i am here for you don't you ever feel shy or low 
        cause i am always here for you . all you need to get my access is you plug the internet </p>
    </div>
  )
}


function Babe (){
  return(
    <b>hey i am superman. who the fuck you are ? currently i am looking for joker , can you find him for me ?

    </b>
  )
}

function New (){
  return (
    <div>
      <p  className='new'>I am new here </p>
    </div>
  )
}

export default App
