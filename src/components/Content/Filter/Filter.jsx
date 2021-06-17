import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { setFilterBy } from "../../../ducks/filterBy";
import {
  FILTER_BY_CONSTRUCTION_MATERIAL,
  FILTER_BY_SIZE_CATEGORY,
  FILTER_BY_NONE,
} from "../../../constants/filterOptions";
import handleReset from "../../../thunks/handleReset";

const Filter = ({ actionSetFilterBy, actionHandleReset, filterBy }) => {
  const changeFilter = (event) => {
    actionSetFilterBy(event.target.value);
    if (event.target.value === FILTER_BY_NONE) {
      actionHandleReset();
    }
  };

  return (
    <div className="filter-by mr-5">
      <span className="filter-heading pr-2">Filter By</span>
      <select
        id="filter-by"
        name="filter-by"
        className="input"
        onChange={changeFilter}
        value={filterBy}
      >
        <option value={FILTER_BY_CONSTRUCTION_MATERIAL}>Material</option>
        <option value={FILTER_BY_SIZE_CATEGORY}>Size</option>
        <option value={FILTER_BY_NONE}>None</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  actionSetFilterBy: PropTypes.func.isRequired,
  actionHandleReset: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
};

export const mapStateToProps = (state) => ({
  filterBy: state.filterBy,
});

const mapDispatchAsProps = {
  actionSetFilterBy: setFilterBy,
  actionHandleReset: handleReset,
};

const hocChain = compose(
  connect(mapStateToProps, mapDispatchAsProps)
);

export { Filter as TestableFilter };

export default hocChain(Filter);
