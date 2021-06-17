import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getConstructionMaterialMatrix, getAreaSizeMatrix } from '../../../utils/transformedUtils';
import { FILTER_BY_CONSTRUCTION_MATERIAL } from '../../../constants/filterOptions';
import {
    CHART_BACKGROUND_COLOR,
    CHART_OPTION,
    CONSTRUCTION_MATERIAL_TITLE,
    CATEGORY_TITLE,
} from '../../../constants/chart';
import handleSelectedDataSet from '../../../thunks/handleSelectedDataSet';

const ConstructionMaterial = ({
    filteredMaterial,
    filterBy,
    actionHandleSelectedDataSet,
}) => {
    var showMatrix = [];
    var labelMatrix = [];
    var valueMatrix = [];
    var title = '';
    if(filterBy === FILTER_BY_CONSTRUCTION_MATERIAL) {
        showMatrix = getConstructionMaterialMatrix(filteredMaterial);
        Object.entries(showMatrix).forEach(([key, value]) => {
            labelMatrix.push(key);
            valueMatrix.push(value);
        })
        title = CONSTRUCTION_MATERIAL_TITLE;
    } else {
        showMatrix = getAreaSizeMatrix(filteredMaterial);
        Object.entries(showMatrix).forEach(([key, value]) => {
            labelMatrix.push(key);
            valueMatrix.push(value);
        })
        title = CATEGORY_TITLE;
    }

    const data = {
      labels: labelMatrix,
      datasets: [
        {
            label: title,
            data: valueMatrix,
            backgroundColor: CHART_BACKGROUND_COLOR,
            borderWidth: 2,  
        },
      ],
    }
  
    const getElementAtEvent = element => {
        if (!element.length) return;
        const { _model: { label } } = element[0];
        actionHandleSelectedDataSet(label);
    };

    return (
        <div className="chart-container">
          <Bar 
            data={data} 
            options={CHART_OPTION} 
            getElementAtEvent={getElementAtEvent}
          />
        </div>
    );
}

ConstructionMaterial.propTypes = {
    filterBy: PropTypes.string.isRequired,
    filteredMaterial: PropTypes.arrayOf(PropTypes.shape({})),
    actionHandleSelectedDataSet: PropTypes.func.isRequired,
};
  
export const mapStateToProps = state => ({
    filterBy: state.filterBy,
    filteredMaterial: state.filteredMaterial,
});

const mapDispatchAsProps = {
    actionHandleSelectedDataSet: handleSelectedDataSet,
}

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { ConstructionMaterial as TestableConstructionMaterial };

export default hocChain(ConstructionMaterial);