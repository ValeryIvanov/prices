import classNames from "classnames";
import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

class Carts extends Component {
    componentDidMount() {
        const cartStore = this.props.store.cartStore;
        cartStore.updateCarts();
    }
    render() {
        const cartStore = this.props.store.cartStore;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {cartStore.carts.map((e, i) => (
                        <tr key={i}>
                            <td><a href="#" onClick={() => store.selectedCart = e}><b>{e.name}</b></a></td>
                            <td>{new Date(e.ts).toDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default inject('store')(observer(Carts));
