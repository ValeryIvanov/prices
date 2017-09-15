import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

class Cart extends Component {
    render() {
        const store = this.props.store.cartStore;
        const productView = (product) => {
            return (
                <td>
                    <h5>{product.product}</h5>
                    <div><b>{product.unitprice}</b><small> unit price</small></div>
                </td>
            )
        }
        return (
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Maxima</th>
                            <th>Coop</th>
                            <th>Selver</th>
                            <th>Prisma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.maxima.map((e, i) => {
                            console.log(e); return (
                            <tr>
                                {productView(store.maxima[i])}
                                {productView(store.coop[i])}
                                {productView(store.selver[i])}
                                {productView(store.prisma[i])}
                            </tr>)
                        })}
                        <tr>
                            <td>Total price: <b>{store.maximaTotalPrice}</b></td>
                            <td>Total price: <b>{store.coopTotalPrice}</b></td>
                            <td>Total price: <b>{store.selverTotalPrice}</b></td>
                            <td>Total price: <b>{store.prismaTotalPrice}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default inject('store')(observer(Cart));
