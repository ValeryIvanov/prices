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
            name,
        } = this.props;
        return (
            <div className="col-md-4">
                <h1>{name}</h1>
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
            </div>
        );
    }
}

export default ProductList;
