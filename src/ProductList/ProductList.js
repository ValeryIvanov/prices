import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import {observer} from "mobx-react";
import Product from '../Product/Product';

class ProductList extends Component {
    handleOnClick = (item, i) => {
        if (this.props.selected === i) {
            this.props.onSelect(null);
        } else {
            this.props.onSelect({product: item, index: i});
        }
    };
    render() {
        const {
            imgBaseUrl,
            name,
        } = this.props;
        return (
            <div className="col-md-3">
                <h3>{name}</h3>
                <ListGroup>
                    {this.props.items.map((item, i) => (
                        <ListGroupItem
                            key={i}
                            onClick={() => this.handleOnClick(item, i)}
                            active={this.props.selected === i}
                        >
                            <Product
                                item={item}
                                imgBaseUrl={imgBaseUrl}
                            />
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default observer(ProductList);
