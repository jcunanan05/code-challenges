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
const PackedItemsContainer = ({ items, toggleItem, removeItem }) => {
  const packedItems = items.filter(item => item.packed);

  return (
    <Items
      title="Packed Items"
      items={packedItems}
      onCheckOff={toggleItem}
      onRemove={removeItem}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PackedItemsContainer);
