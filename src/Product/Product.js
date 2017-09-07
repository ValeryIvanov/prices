import React, { Component } from 'react';
import { createSelectable } from 'react-selectable-fast';

class Product extends Component {
    render() {
        const {
            selectableRef,
            selecting,
            selected,
            item,
        } = this.props;
        return (
            <div
                ref={selectableRef}
                className={`item ${selecting && 'selecting'} ${selected && 'selected'}`}
            >
                <img src={`https://ecoop.ee/${item.images[0].productimage}`} alt=""/>
                <h4>{item.name}</h4>
                <b>{item.sell_price}</b>
            </div>
        );
    }
}

export default createSelectable(Product);
