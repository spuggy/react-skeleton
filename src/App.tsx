import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, Navbar} from "react-bootstrap";
import {Home} from "./home/Home";
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom';

const Features = React.lazy(() => import('./features/Features'));
const Pricing  = React.lazy(() => import('./pricing/Pricing'));
const About  = React.lazy(() => import('./about/About'));

const App = () => (
    <div className="App">
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/features">Features</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar>

            <div className="container-fluid">
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/features" component={Features}/>
                    <Route exact path="/pricing" component={Pricing}/>
                    <Route exact path="/about" component={About}/>
                </Suspense>
            </div>
        </Router>
    </div>
);

export default App;
