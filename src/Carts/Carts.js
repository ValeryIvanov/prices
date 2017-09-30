import classNames from "classnames";
import React, { Component } from 'react';
import {observer, inject} from "mobx-react";
import Cart from '../Cart/Cart';

class Carts extends Component {
    componentDidMount() {
        const cartStore = this.props.store.cartStore;
        cartStore.updateCarts();
    }
    render() {
        const store = this.props.store.cartStore;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.carts.map((e, i) => (
                            <tr key={i}>
                                <td><a href="#" onClick={() => store.selectedCart = e}><b>{e.name}</b></a></td>
                                <td>{new Date(e.ts).toDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Cart />
            </div>
        );
    }
}

export default inject('store')(observer(Carts));
