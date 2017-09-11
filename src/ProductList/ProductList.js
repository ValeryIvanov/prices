import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Product from '../Product/Product';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
        };
    }
    render() {
        const {
            imgBaseUrl,
        } = this.props;
        return (
            <ListGroup>
                {this.props.items.map((item, i) => (
                    <ListGroupItem
                        key={i}
                        onClick={() => this.setState({selected: i})}
                        active={this.state.selected === i}
                    >
                        <Product
                            item={item}
                            imgBaseUrl={imgBaseUrl}
                        />
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}

export default ProductList;
