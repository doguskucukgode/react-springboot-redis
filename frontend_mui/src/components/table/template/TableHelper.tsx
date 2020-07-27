import React from 'react';

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
    rowIndexSize: number
}

export interface TableTemplateInterface {
    headerColumns: RowIndexValue[],
    rows: RowTemplateValue[]
}