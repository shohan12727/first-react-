import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'                                         
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
     <Person className = 'shohan' ></Person>
     <Developer></Developer>
     <Developer2></Developer2>
     <Developer3></Developer3>
     <Pookie></Pookie>
     <Babe></Babe>
     <New></New>   

    </>
  )
}

function Person (){
  const name = "shohan";
  const place = 'boalmari' ;
  return(
  <p>fuck cse, fucker name : {name} and he is from {place} </p>
  )
}

function Developer (){
  return(
    <div>
      <p>hey, everyone , i am shohan. </p>
    </div>
  )
}

function Developer2 (){
  return(
    <h4>Hey everyone i am who i am </h4>
  )
}
function Developer3 () { 
  return(
  <h3> Hey ,im sazal , i am a react Developer,   
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
