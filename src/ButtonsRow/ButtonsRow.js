import classNames from "classnames";
import React, { Component } from 'react';
import {observer, inject} from "mobx-react";

class ButtonsRow extends Component {
    render() {
        const appStore = this.props.store.appStore;
        const cartStore = this.props.store.cartStore;
        const cartBtnClass = classNames(
            'btn btn-default btn-primary', {active: !appStore.viewProducts}
        );
        const productBtnClass = classNames(
            'btn btn-default btn-primary', {active: appStore.viewProducts}
        );

        return (
            <form className="form-horizontal" onSubmit={e => e.preventDefault()}>
                <div className="btn-toolbar">
                    <div className="btn-group pull-right">
                        <button className={cartBtnClass} type="button" onClick={() => appStore.viewProducts = false}>View cart</button>
                        <button className={productBtnClass} type="button" onClick={() => appStore.viewProducts = true}>View products</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default inject('store')(observer(ButtonsRow));
