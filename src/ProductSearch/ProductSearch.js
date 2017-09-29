import React, { Component } from 'react';
import classNames from "classnames";
import {observer, inject} from "mobx-react";

class ProductSearch extends Component {
    onChange = (e) => {
        const appStore = this.props.store.appStore;
        appStore.product = e.currentTarget.value;
        appStore.updateProducts();
    };
    render() {
        const {cartStore} = this.props.store;
        const addToCartBtnClass = classNames(
            'btn btn-default pull-right', {
                'btn-success': !cartStore.addToCartButtonDisabled,
                'btn-danger': cartStore.addToCartButtonDisabled,
            },
        );
        return (
            <form className="form-horizontal" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="product" style={{'textAlign': 'left'}} className="col-md-2 control-label">Search for product</label>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            id="product"
                            placeholder="Start typing..."
                            value={this.props.store.appStore.product}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-md-2">
                        <button className={addToCartBtnClass} type="button"
                            disabled={cartStore.addToCartButtonDisabled}
                            onClick={cartStore.addProductsToCart}>Add to cart</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default inject('store')(observer(ProductSearch));
