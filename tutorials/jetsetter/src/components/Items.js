import React, { Component } from 'react';
import Item from './Item';

class Items extends Component {
  state = {
    searchTerm: ''
  };

  renderItems(items) {
    const { onCheckOff, onRemove } = this.props;
    return items.map(item => (
      <Item
        key={item.id}
        onCheckOff={() => onCheckOff(item.id)}
        onRemove={() => onRemove(item.id)}
        item={item}
      />
    ));
  }

  render() {
    const { title, items } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        {this.renderItems(items)}
      </section>
    );
  }
}

export default Items;
