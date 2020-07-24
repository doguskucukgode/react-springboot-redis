import { RowTemplateValue } from "./TableHelper";
import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

export default function TableRowTemplate(props: RowTemplateValue) {
    const { columns } = props;
    return (
        <TableRow>
            {columns.sort((a, b) => (a.index < b.index ? -1 : 1))
                        .map((column) => (<TableCell align="left">{column.value}</TableCell>))}
        </TableRow>
    );
}