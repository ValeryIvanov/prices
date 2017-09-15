import React, { Component } from 'react';
import {observer, Provider} from "mobx-react";
import logo from './logo.svg';
import ProductsView from './ProductsView/ProductsView';
import ProductSearch from './ProductSearch/ProductSearch';
import Store from './Stores/Store';
import Cart from './Cart/Cart';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.store = new Store();
    }

    render() {
        return (
            <Provider store={this.store}>
                <div className="App">
                    <div className="jumbotron">
                        <div className="container"></div>
                    </div>
                    <div className="container">
                        <ProductSearch />
                        <form className="form-horizontal">
                            <button className="btn btn-default" type="button"
                                disabled={this.store.cartStore.addToCartButtonDisabled}
                                onClick={this.store.cartStore.addProductsToCart}>Add to cart</button>
                            <button className="btn btn-default" type="button" onClick={() => this.store.appStore.viewProducts = false}>View cart</button>
                            <button className="btn btn-default" type="button" onClick={() => this.store.appStore.viewProducts = true}>View products</button>
                        </form>
                        {this.store.appStore.viewProducts ? <ProductsView /> : <Cart />}
                    </div>
                </div>
            </Provider>
        );
    }
}

export default observer(App);
