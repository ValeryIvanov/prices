import React, { Component } from 'react';
import Helpers from '../Helpers/Helpers';
import {observer, inject} from "mobx-react";

class Cart extends Component {
    render() {
        const productView = (product) => {
            const ts = new Date(product['scrapy-mongodb'].ts).toDateString();
            return (
                <td>
                    <div style={{display: 'inline-block', width: '20%'}}>
                        <img style={{width: '100%', verticalAlign: 'super'}} src={product.img_url} alt=""/>
                    </div>
                    <div style={{display: 'inline-block', width: '80%'}}>
                        <h5>{product.product}</h5>
                        <div><b>{parseFloat(product.unitprice || product.price).toFixed(2)}</b><small> unit price</small></div>
                        <small>{ts}</small>
                    </div>
                </td>
            )
        };
        const selectedCart = this.props.store.cartStore.selectedCart;
        return selectedCart ? (
                <table className="table">
                    <colgroup>
                        <col style={{width: '25%'}} />
                        <col style={{width: '25%'}} />
                        <col style={{width: '25%'}} />
                        <col style={{width: '25%'}} />
                    </colgroup>  
                    <thead>
                        <tr>
                            <th>Maxima</th>
                            <th>Coop</th>
                            <th>Selver</th>
                            <th>Prisma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedCart.cart.maxima.map((e, i) => {
                            return (
                            <tr key={i}>
                                {productView(selectedCart.cart.maxima[i])}
                                {productView(selectedCart.cart.coop[i])}
                                {productView(selectedCart.cart.selver[i])}
                                {productView(selectedCart.cart.prisma[i])}
                            </tr>)
                        })}
                        <tr>
                            <td>Total price: <b>{Helpers.calculateProductsSum(selectedCart.cart.maxima)}</b></td>
                            <td>Total price: <b>{Helpers.calculateProductsSum(selectedCart.cart.coop)}</b></td>
                            <td>Total price: <b>{Helpers.calculateProductsSum(selectedCart.cart.selver)}</b></td>
                            <td>Total price: <b>{Helpers.calculateProductsSum(selectedCart.cart.prisma)}</b></td>
                        </tr>
                    </tbody>
                </table>
        ) : null;
    }
}

export default inject('store')(observer(Cart));


