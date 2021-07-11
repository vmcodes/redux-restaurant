import React from "react";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/order";

interface Column {
  id: string;
  label: string;
}

const columns: Column[] = [
  { id: "name", label: "Item" },
  { id: "quantity", label: "Qty" },
  {
    id: "cost",
    label: "Price",
  },
];

const useStyles = makeStyles((theme) => ({
  position: {
    padding: theme.spacing(10),
    marginLeft: 20,
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
  },
}));

interface Row {
  name: string;
  quantity: number;
  cost: number;
}

function createData(name: string, quantity: number, cost: number): Row {
  return { name, quantity, cost };
}

const StickyHeadTable: React.FC = () => {
  const { order } = useSelector((state: any) => state.order);
  const dispatch = useDispatch();
  const classes = useStyles();

  const rows = order.map((item: any) => {
    return createData(item.name, item.quantity, item.cost);
  });

  const subtotal = order.map((item: any) => {
    return item.quantity * item.cost;
  });

  const removeDish = (name: string, cost: number) => {
    let values = {
      name: name,
      quantity: 0,
      cost: cost,
    };

    dispatch(remove(values));
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column: Column, index) => (
                <TableCell key={index}>{column.label}</TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows[0] &&
              rows.map((row: any, index: number) => {
                if (row?.name)
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return <TableCell key={column.id}>{value}</TableCell>;
                      })}
                      <TableCell>
                        <IconButton
                          size="small"
                          onClick={() => removeDish(row.name, row.cost)}
                        >
                          <ClearIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <br />

      <Box padding={3}>
        <Typography variant="h6" gutterBottom>
          Subtotal: ${" "}
          {subtotal.reduce((a: number, b: number) => a + b, 0).toFixed(2)}
        </Typography>

        <Typography variant="h6" gutterBottom>
          Delivery Fee: $ 7.00
          <hr />
        </Typography>

        <Typography variant="h6" gutterBottom>
          Total: ${" "}
          {subtotal.reduce((a: number, b: number) => a + b, 7).toFixed(2)}
        </Typography>
      </Box>
    </Paper>
  );
};

export default StickyHeadTable;
