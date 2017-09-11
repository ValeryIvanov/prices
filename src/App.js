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
    };
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && $.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
      }
    });
  }

  componentDidMount() {
    $.get(
      'api/maxima',
      (response) => {
        this.setState({
          maxima: response,
        })
        console.log(response);
      });
    $.get(
      'api/selver',
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
