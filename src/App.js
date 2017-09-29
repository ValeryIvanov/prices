import React, { Component } from 'react';
import {observer, Provider} from "mobx-react";
import ProductsView from './ProductsView/ProductsView';
import Navigation from './Navigation/Navigation';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Store from './Stores/Store';
import Cart from './Cart/Cart';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.store = new Store();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
    };
    render() {
        return (
            <Router>
                <Provider store={this.store}>
                    <div className="App">
                        <div className="container">
                            <Navigation />
                            <Route exact path="/" component={() => (<ProductsView />)}/>
                            <Route path="/cart" component={() => (<Cart />)}/>
                        </div>
                    </div>
                </Provider>
            </Router>
        );
    }
}

export default observer(App);
