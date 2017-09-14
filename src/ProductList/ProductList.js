import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Product from '../Product/Product';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        };
    }
    handleOnClick = (i) => {
        if (this.state.selected === i) this.setState({selected: null});
        else this.setState({selected: i});
    };
    render() {
        const {
            imgBaseUrl,
            name,
        } = this.props;
        return (
            <div className="col-md-3">
                <h1>{name}</h1>
                <ListGroup>
                    {this.props.items.map((item, i) => (
                        <ListGroupItem
                            key={i}
                            onClick={() => this.handleOnClick(i)}
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
