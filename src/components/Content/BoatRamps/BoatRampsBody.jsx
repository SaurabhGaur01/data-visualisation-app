import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import handleMaterial from "../../../thunks/handleMaterial";

const BoatRampsBody = ({
  filteredFeatures,
  actionHandleMaterial,
  rowsPerPage,
  page,
}) => {
  const handleClick = (event, name) => {
    actionHandleMaterial(name.material);
  };

  return (
    <TableBody>
      {filteredFeatures
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => (
          <TableRow
            hover
            onClick={(event) => handleClick(event, row)}
            role="checkbox"
            tabIndex={-1}
            key={row.rowID}
          >
            <TableCell align="right">{row.material}</TableCell>
            <TableCell align="right">{row.area}</TableCell>
            <TableCell align="right">{row.status}</TableCell>
            <TableCell align="right">{row.assetNumb}</TableCell>
            <TableCell align="right">{row.owner}</TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

BoatRampsBody.propTypes = {
  filteredFeatures: PropTypes.arrayOf(PropTypes.shape({})),
  actionHandleMaterial: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export const mapStateToProps = (state) => ({
  filteredFeatures: state.filteredFeatures,
});

const mapDispatchAsProps = {
  actionHandleMaterial: handleMaterial,
};

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps)
);

export { BoatRampsBody as TestableBoatRampsBody };

export default hocChain(BoatRampsBody);
