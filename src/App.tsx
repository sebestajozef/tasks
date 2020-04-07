import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'


const _App: React.FunctionComponent = () => {
    return (
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
    )
}

export default _App
