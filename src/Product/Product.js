import React, { Component } from 'react';
import { createSelectable } from 'react-selectable-fast';

class Product extends Component {
    render() {
        const {
            selectableRef,
            selecting,
            selected,
            item,
            imgBaseUrl,
        } = this.props;
        return (
            <div
                ref={selectableRef}
                className={`item ${selecting && 'selecting'} ${selected && 'selected'}`}
            >
                <img src={`${imgBaseUrl}/${item.img}`} alt=""/>
                <h4>{item.product}</h4>
                <b>{item.price}</b>
                <b>{item.unitprice}</b>
            </div>
        );
    }
}

export default createSelectable(Product);
