import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Display from './Display';
import XhrLoader from './XhrLoader';

export default class App extends Component {
  constructor() {
    super();
    this.state = { prodList: [] };
  }

  componentDidMount() {
    XhrLoader(this);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="cards-contents">
            <Display prodList={this.state.prodList} />
          </div>

          <div className="row">
            <div className="col-sm-6 text-right" style={{ marginTop: '10px' }}>
              <Link to="/previous" >Previous</Link>
            </div>
            <div className="col-sm-6 text-left" style={{ marginTop: '10px' }}>
              <Link to="/next" >Next</Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
