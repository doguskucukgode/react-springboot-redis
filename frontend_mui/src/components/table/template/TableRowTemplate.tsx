import { RowTemplateValue } from "./TableHelper";
import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

export default function TableRowTemplate(props: RowTemplateValue) {
    const { columns, rowKey } = props;
    return (
        <TableRow key={rowKey}>
            {columns.sort((a, b) => (a.index < b.index ? -1 : 1))
                        .map((column, i: number) => (<TableCell key={i} align="left">{column.value}</TableCell>))}
        </TableRow>
    );
}