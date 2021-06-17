import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const headCells = [
  { id: "material", label: "Material" },
  { id: "area", label: "Area" },
  { id: "status", label: "Status" },
  { id: "assetNumb", label: "Asset Number" },
  { id: "owner", label: "Owner" },
];

const BoatRampsHeader = () => (
  <TableHead>
    <TableRow>
      {headCells.map(({ id, label }) => (
        <TableCell key={id} align="right">
          <TableSortLabel>{label}</TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default BoatRampsHeader;
