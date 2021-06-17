import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import BoatRampsHeader from "./BoatRampsHeader";
import BoatRampsBody from "./BoatRampsBody";

const BoatRamps = ({ filteredFeatures }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className="mt-3">
      <TableContainer>
        <Table
          className="table-content"
          aria-labelledby="tableTitle"
          size="small"
          aria-label="enhanced table"
        >
          <BoatRampsHeader />
          <BoatRampsBody page={page} rowsPerPage={rowsPerPage} />
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={filteredFeatures.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Paper>
  );
};

BoatRamps.propTypes = {
  filteredFeatures: PropTypes.arrayOf(PropTypes.shape({})),
};

export const mapStateToProps = (state) => ({
  filteredFeatures: state.filteredFeatures,
});

const hocChain = compose(
    connect(mapStateToProps)
);

export { BoatRamps as TestableBoatRamps };

export default hocChain(BoatRamps);
