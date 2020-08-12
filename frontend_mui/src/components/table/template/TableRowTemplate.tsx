import { RowTemplateValue } from "./TableHelper";
import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";

export default function TableRowTemplate(props: RowTemplateValue) {
    const { columns, rowKey, deleteColumn, deleteFunc } = props;
    return (
        <TableRow key={rowKey}>
            {columns.sort((a, b) => (a.index < b.index ? -1 : 1))
                        .map((column, i: number) => (<TableCell key={i} >{column.value}</TableCell>))}
            {deleteColumn ? <TableCell>
                <Button color="secondary" onClick = {() => deleteFunc(rowKey)}  >
                    Delete
                </Button>
            </TableCell>: null}
        </TableRow>
    );
}