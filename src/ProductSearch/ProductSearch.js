import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

class ProductSearch extends Component {
    onChange = (e) => {
        this.props.store.appStore.product = e.currentTarget.value; 
        this.props.store.appStore.updateProducts();
    };
    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="product" className="col-md-2 control-label">Search for product</label>
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
