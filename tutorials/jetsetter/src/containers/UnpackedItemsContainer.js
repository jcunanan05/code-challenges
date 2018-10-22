import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Items from '../components/Items';
import { toggleItem, removeItem } from '../actions/items-actions';

const mapStateToProps = ({ items }) => ({
  items
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleItem, removeItem }, dispatch);
const UnpackedItemsContainer = ({ items, toggleItem, removeItem }) => {
  const unpackedItems = items.filter(item => !item.packed);

  return (
    <Items
      title="Unpacked Items"
      items={unpackedItems}
      onCheckOff={toggleItem}
      onRemove={removeItem}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnpackedItemsContainer);
