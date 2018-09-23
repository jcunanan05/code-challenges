import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    items: defaultState
  };

  addItem = item =>   {
    this.updateAllItems([item, ...this.state.items]);
  }

  toggleItem = itemToToggle => {
    const items = this.state.items.map(item => {
      if (item.id !== itemToToggle.id) return item;
      return { ...itemToToggle, packed: !itemToToggle.packed };
    });
    this.updateAllItems(items);
  }

  removeItem = itemToRemove => {
    this.updateAllItems(this.state.items.filter(item => item.id !== itemToRemove));
  }
  
  markAllUnpacked = () => {
    const unpackedItems = this.state.items.map(item => {
      return { ...item, packed: false };
    });
    this.updateAllItems(unpackedItems);
  }

  updateAllItems = items => {
    this.setState({ items });
  }


  render() {
    const unpackedItems = this.state.items.filter(item => !item.packed);

    const packedItems = this.state.items.filter(item => item.packed);

    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <CountDown />
        <Items 
          title="Unpacked Items" 
          items={unpackedItems} 
          onToggle={this.toggleItem}
          onRemoveItem={this.removeItem}
        />
        <Items 
          title="Packed Items" 
          items={packedItems} 
          onToggle={this.toggleItem}
          onRemoveItem={this.removeItem}
        />
        <button 
          className="button full-width"
          onClick={this.markAllUnpacked}
        >
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;
