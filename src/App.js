import React, { Component } from 'react';
import logo from './logo.svg';
import ProductList from './ProductList/ProductList';
import $ from 'jquery';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      maxima: [],
    };
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && $.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
      }
    });
  }

  handleSelectionFinish = selectedItems => {
    this.setState({
      selectedItems,
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
  }

  render() {
    const { selectedItems, } = this.state;
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="container"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1>Maxima</h1>
              <ProductList
                items={this.state.maxima}
                imgBaseUrl={'https://www.e-maxima.ee'}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
