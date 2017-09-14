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
      product: '',
    };
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && $.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
      }
    });
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
        console.log(response);
      });
    $.get(
      'api/selver?q=' + product,
      (response) => {
        this.setState({
          selver: response,
        })
        console.log(response);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="container"></div>
        </div>
        <div className="container">
          <div className="row">
            <form className="form-horizontal">
              <div className="form-group">
                  <label htmlFor="product" className="col-sm-2 control-label">Search for product</label>
                  <div className="col-sm-8">
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
          </div>
          <div className="row">
              <ProductList
                name={'Maxima'}
                items={this.state.maxima}
                imgBaseUrl={'https://www.e-maxima.ee'}
              />
              <ProductList
                name={'Selver'}
                items={this.state.selver}
                imgBaseUrl={''}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
