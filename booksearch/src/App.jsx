import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <header>
      <ul>
        <li>Home</li>
        <li>Collection</li>
      </ul>
    </header>
    <main>
      <form action="input">
        <label htmlFor="search">Search: </label>
        <input type="text" />
      </form>

      <article>
        <h2>boktittel</h2>
        <img src="" alt="bilde" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
      </article>
    </main>
    </>
  )
}

export default App
