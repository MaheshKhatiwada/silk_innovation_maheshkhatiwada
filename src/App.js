import { Dashboard } from './components/Dashboard';
import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'

import Login from './components/Login'


function App() {
    return (
        <div>
            <BrowserRouter>

            <Route exact = {true} path = "/" component = {Login}/>
            <Route exact = {true} path = "/dashboard" component = {Dashboard}/>


            </BrowserRouter>
        </div>
    )
}

export default App
