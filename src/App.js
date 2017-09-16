import React, { Component } from 'react';
import {observer, Provider} from "mobx-react";
import classNames from "classnames";
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
        const cartStore = this.store.cartStore;
        const appStore = this.store.appStore;
        const cartBtnClass = classNames(
            'btn btn-default btn-primary', {active: !appStore.viewProducts}
        );
        const productBtnClass = classNames(
            'btn btn-default btn-primary', {active: appStore.viewProducts}
        );
        const addToCartBtnClass = classNames(
            'btn btn-default pull-left', {
                'btn-success': !cartStore.addToCartButtonDisabled,
                'btn-danger': cartStore.addToCartButtonDisabled,
            },
        );
        return (
            <Provider store={this.store}>
                <div className="App">
                    <div className="jumbotron">
                        <div className="container"></div>
                    </div>
                    <div className="container">
                        <ProductSearch />
                        <form className="form-horizontal">
                            <div className="btn-toolbar">
                            <button className={addToCartBtnClass} type="button"
                                disabled={cartStore.addToCartButtonDisabled}
                                onClick={cartStore.addProductsToCart}>Add to cart</button>
                            <div className="btn-group pull-right">
                                <button className={cartBtnClass} type="button" onClick={() => appStore.viewProducts = false}>View cart</button>
                                <button className={productBtnClass} type="button" onClick={() => appStore.viewProducts = true}>View products</button>
                            </div>
                            </div>
                        </form>
                        {this.store.appStore.viewProducts ? <ProductsView /> : <Cart />}
                    </div>
                </div>
            </Provider>
        );
    }
}

export default observer(App);
