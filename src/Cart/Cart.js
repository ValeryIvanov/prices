import React, { Component } from 'react';
import {observer, inject} from "mobx-react";
import classNames from "classnames";

class Cart extends Component {
    removeProduct = (i) => {
        this.props.store.cartStore.maxima.splice(i, 1);
        this.props.store.cartStore.coop.splice(i, 1);
        this.props.store.cartStore.selver.splice(i, 1);
        this.props.store.cartStore.prisma.splice(i, 1);
    };
    render() {
        const store = this.props.store.cartStore;
        const productView = (product) => {
            return (
                <td>
                    <h5>{product.product}</h5>
                    <div><b>{parseFloat(product.unitprice || product.price).toFixed(2)}</b><small> unit price</small></div>
                </td>
            )
        };
        const saveCartBtnClass = classNames(
            'btn btn-default pull-left', {
                'btn-success': !store.saveCartButtonDisabled,
                'btn-danger': store.saveCartButtonDisabled,
            },
        );
        return (
            <div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Remove item</th>
                            <th>Maxima</th>
                            <th>Coop</th>
                            <th>Selver</th>
                            <th>Prisma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.maxima.map((e, i) => {
                            return (
                            <tr key={i}>
                                <td>
                                    <button type="button" className="btn btn-default btn-sm" onClick={() => this.removeProduct(i)}>
                                        <span className="glyphicon glyphicon glyphicon-remove"></span>
                                    </button>
                                </td>
                                {productView(store.maxima[i])}
                                {productView(store.coop[i])}
                                {productView(store.selver[i])}
                                {productView(store.prisma[i])}
                            </tr>)
                        })}
                        <tr>
                            <td></td>
                            <td>Total price: <b>{store.maximaTotalPrice}</b></td>
                            <td>Total price: <b>{store.coopTotalPrice}</b></td>
                            <td>Total price: <b>{store.selverTotalPrice}</b></td>
                            <td>Total price: <b>{store.prismaTotalPrice}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">
                <form className="form-horizontal" onSubmit={e => e.preventDefault()}>
                    <div className="btn-toolbar">
                        <button className={saveCartBtnClass} type="button"
                            disabled={store.saveCartButtonDisabled}
                            onClick={store.saveCart}>Save cart</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default inject('store')(observer(Cart));
