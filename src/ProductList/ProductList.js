import React, { Component } from 'react';
import { SelectAll, DeselectAll } from 'react-selectable-fast';
import Product from '../Product/Product';

class ProductList extends Component {
    render() {
        return (
            <div >
                <p className="not-selectable">Press ESC to clear selection</p>
                <div>
                    <SelectAll className="selectable-button">
                        <button>Select all</button>
                    </SelectAll>
                    <DeselectAll className="selectable-button">
                        <button>Clear selection</button>
                    </DeselectAll>
                </div>
                <div className="albums">
                    {this.props.items.map((item, i) => (
                        <Product
                            key={`${i}`}
                            item={item}
                            imgBaseUrl={this.props.imgBaseUrl}
                        />
                    ))}
                </div>
            </div >
        );
    }
}

export default ProductList;
