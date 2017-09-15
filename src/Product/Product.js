import React, { Component } from 'react';
import {observer} from "mobx-react";

class Product extends Component {
    render() {
        const {
            item,
            imgBaseUrl,
        } = this.props;
        const img = imgBaseUrl(item.img);
        const price = parseFloat(item.price).toFixed(2);
        const unitprice = parseFloat(item.unitprice).toFixed(2);
        return (
            <div className="product">
                <div className="left">
                    <img src={img} alt=""/>
                </div>
                <div className="right">
                    <h5 className="name">{item.product}</h5>
                    <div><b className="price">{price}</b><small> item price</small></div>
                    <div><b className="unitprice">{unitprice}</b><small> unit price</small></div>
                </div>
            </div>
        );
    }
}

export default observer(Product);
