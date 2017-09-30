import React, { Component } from 'react';
import {observer, inject} from "mobx-react";
import classNames from "classnames";

class CurrentCart extends Component {
    removeProduct = (i) => {
        this.props.store.cartStore.maxima.splice(i, 1);
        this.props.store.cartStore.coop.splice(i, 1);
        this.props.store.cartStore.selver.splice(i, 1);
        this.props.store.cartStore.prisma.splice(i, 1);
    };
    onChange = (e) => {
        const cartStore = this.props.store.cartStore;
        cartStore.cartName = e.currentTarget.value;
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
            'btn btn-default pull-right', {
                'btn-success': !store.saveCartButtonDisabled,
                'btn-danger': store.saveCartButtonDisabled,
            },
        );
        return (
            <div>
                <form className="form-horizontal" onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="cartName" style={{'textAlign': 'left'}} className="col-md-2 control-label">Cart name</label>
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                id="cartName"
                                value={store.cartName}
                                placeholder="Name is mandatory"
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col-md-2">
                            <button className={saveCartBtnClass} type="button"
                                disabled={store.saveCartButtonDisabled}
                                onClick={store.saveCart}>Save cart</button>
                        </div>
                    </div>
                </form>
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
                                <td style={{verticalAlign: 'middle'}}>
                                    <a style={{padding: '30%'}} href="#" onClick={() => this.removeProduct(i)}>
                                        <span className="glyphicon glyphicon glyphicon-remove"></span>
                                    </a>
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
        );
    }
}

export default inject('store')(observer(CurrentCart));
