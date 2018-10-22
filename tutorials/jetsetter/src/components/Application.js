import React, { Component } from 'react';
import CountDown from './CountDown';
import NewItemContainer from '../containers/NewItemContainer';
import UnpackedItemsContainer from '../containers/UnpackedItemsContainer';
import PackedItemsContainer from '../containers/PackedItemsContainer';
import MarkAllAsUnpackedContainer from '../containers/MarkAllAsUnpackedContainer';

import './Application.css';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <NewItemContainer />
        <CountDown {...this.state} />
        <UnpackedItemsContainer />
        <PackedItemsContainer />
        <MarkAllAsUnpackedContainer />
      </div>
    );
  }
}

export default Application;
