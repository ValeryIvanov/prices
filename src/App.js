import React, { Component } from 'react';
import { SelectableGroup } from 'react-selectable-fast';
import logo from './logo.svg';
import ProductList from './ProductList/ProductList';
import $ from 'jquery';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      coop: [],
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
      'https://ecoop.ee/api/v1/products?page=1&ordering=popularity&category=15',
      (response) => {
        this.setState({
          coop: response.results,
        })
        console.log(response);
      });
  }

  render() {
    const { selectedItems, } = this.state;
    return (
      <div className="App">

        <div>
          <p>
            Selected: <span className="counter">{selectedItems.length}</span>
          </p>
          <SelectableGroup
            className="main"
            clickClassName="tick"
            enableDeselect
            onSelectionFinish={this.handleSelectionFinish}
          >
            <ProductList items={this.state.coop} />
          </SelectableGroup>
        </div>

      </div>
    );
  }
}

export default App;
