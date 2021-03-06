import React, { FunctionComponent } from 'react';

export interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export interface RowIndexValue {
    index: number,
    value: object
}

export interface RowTemplateValue {
    rowKey: string,
    columns: RowIndexValue[],
    rowIndexSize: number,
    deleteColumn: boolean,
    deleteFunc: Function
}

export interface TableTemplateInterface {
    headerColumns: RowIndexValue[],
    rows: RowTemplateValue[],
    deleteColumn: boolean
}