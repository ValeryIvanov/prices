import React, { Component } from 'react';
import logo from './logo.svg';
import ProductList from './ProductList/ProductList';
import $ from 'jquery';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      maxima: [],
      selver: [],
      coop: [],
      prisma: [],
      product: '',
    };
  }

  componentDidMount() {

  }

  updateProducts = (e) => {
    const product = e.currentTarget.value;
    this.setState({
      product,
    });
    $.get(
      'api/maxima?q=' + product,
      (response) => {
        this.setState({
          maxima: response,
        })
      });
    $.get(
      'api/selver?q=' + product,
      (response) => {
        this.setState({
          selver: response,
        })
      });
    $.get(
      'api/coop?q=' + product,
      (response) => {
        this.setState({
          coop: response,
        })
      });
    $.get(
      'api/prisma?q=' + product,
      (response) => {
        this.setState({
          prisma: response,
        })
      });
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="container"></div>
        </div>
        <div className="container">
          <form className="form-horizontal">
            <div className="form-group">
                <label htmlFor="product" className="col-md-2 control-label">Search for product</label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="product"
                    placeholder="Start typing..."
                    value={this.state.product}
                    onChange={this.updateProducts}
                    />
                </div>
              </div>
          </form>
          <div className="row">
              <ProductList
                name={'Maxima'}
                items={this.state.maxima}
                imgBaseUrl={(img) => `https://www.e-maxima.ee/${img}`}
              />
              <ProductList
                name={'Selver'}
                items={this.state.selver}
                imgBaseUrl={(img) => `${img}`}
              />
              <ProductList
                name={'Coop'}
                items={this.state.coop}
                imgBaseUrl={(img) => `https://ecoop.ee/${img}`}
              />
              <ProductList
                name={'Prisma'}
                items={this.state.prisma}
                imgBaseUrl={(img) => `https://s3-eu-west-1.amazonaws.com/balticsimages/images/180x220/${img}.png`}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
