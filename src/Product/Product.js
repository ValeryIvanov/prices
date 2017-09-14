import React, { Component } from 'react';

class Product extends Component {
    render() {
        const {
            item,
            imgBaseUrl,
        } = this.props;
        const img = imgBaseUrl(item.img);
        return (
            <div className="product">
                <div className="left">
                    <img src={img} alt=""/>
                </div>
                <div className="right">
                    <h5 className="name">{item.product}</h5>
                    <b className="price">{item.price}</b>
                    <b className="unitprice">{item.unitprice}</b>
                </div>
            </div>
        );
    }
}

export default Product;
