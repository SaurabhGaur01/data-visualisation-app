import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BoatRamps from './Content/BoatRamps/BoatRamps';
import ConstructionMaterial from './Content/Filter/ConstructionMaterial';
import Filter from './Content/Filter/Filter';
import handleGetData from '../thunks/handleGetData';
import './App.css';

const App = ({
  actionHandleGetData,
}) =>{
  /* 
    Below action will be dispatched before component renders and make an API call,
    store the response in redux store
    */
    React.useEffect(() => {
      actionHandleGetData();
  }, [actionHandleGetData]);

  return (
    <div className="dashboard-content">
      <h5 className="text-center">
        BoatRamp Dashboard
      </h5>
      <Filter />
      <Card className="card-container mt-4 ml-3 mx-auto" variant="outlined">
        <CardContent>
          <ConstructionMaterial />
        </CardContent>  
      </Card>
      <BoatRamps />
    </div> 
  )
}  

App.propTypes = {
  actionHandleGetData: PropTypes.func.isRequired,
};

// Getting action from redux store for dispatching 
const mapDispatchAsProps = {
  actionHandleGetData: handleGetData,
}

const hocChain = compose(
  connect(null, mapDispatchAsProps),
);

export { App as TestableApp };

export default hocChain(App);
