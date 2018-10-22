import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewItem from '../components/NewItem';
import { addNewItem } from '../actions/items-actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNewItem }, dispatch);

const NewItemContainer = ({ addNewItem }) => <NewItem onSubmit={addNewItem} />;

export default connect(
  null,
  mapDispatchToProps
)(NewItemContainer);
