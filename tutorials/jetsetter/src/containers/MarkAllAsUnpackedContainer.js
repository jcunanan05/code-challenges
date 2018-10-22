import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { markAllAsUnpacked } from '../actions/items-actions';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAllAsUnpacked }, dispatch);

const MarkAllAsUnpackedContainer = ({ markAllAsUnpacked }) => (
  <button className="button full-width" onClick={markAllAsUnpacked}>
    Mark All As Unpacked
  </button>
);

export default connect(
  null,
  mapDispatchToProps
)(MarkAllAsUnpackedContainer);
