import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

class ProductSearch extends Component {
    onChange = (e) => {
        const appStore = this.props.store.appStore;
        appStore.product = e.currentTarget.value;
        appStore.updateProducts();
    };
    render() {
        return (
            <form className="form-horizontal" onSubmit={e => e.preventDefault()}>
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
