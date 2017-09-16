import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

class ProductSearch extends Component {
    onChange = (e) => {
        const appStore = this.props.store.appStore;
        const cartStore = this.props.store.cartStore;
        appStore.product = e.currentTarget.value;
        if (!cartStore.selectedMaximaProduct) appStore.updateMaximaProducts();
        if (!cartStore.selectedSelverProduct) appStore.updateSelverProducts();
        if (!cartStore.selectedCoopProduct) appStore.updateCoopProducts();
        if (!cartStore.selectedPrismaProduct) appStore.updatePrismaProducts();
    };
    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="product" style={{'textAlign': 'left'}} className="col-md-2 control-label">Search for product</label>
                    <div className="col-md-10">
                        <input
                            type="text"
                            className="form-control"
                            id="product"
                            placeholder="Start typing..."
                            value={this.props.store.appStore.product}
                            onChange={this.onChange}
                        />
                    </div>
                </div>
            </form>
        );
    }
}

export default inject('store')(observer(ProductSearch));
