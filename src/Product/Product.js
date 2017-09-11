import React, { Component } from 'react';

class Product extends Component {
    render() {
        const {
            item,
            imgBaseUrl,
        } = this.props;
        return (
            <div className="product">
                <div className="left">
                    <img src={`${imgBaseUrl}/${item.img}`} alt=""/>
                </div>
                <div className="right">
                    <h4 className="name">{item.product}</h4>
                    <b className="price">{item.price}</b>
                    <b className="unitprice">{item.unitprice}</b>
                </div>
            </div>
        );
    }
}

export default Product;
