import React from 'react';
import { RowIndexValue, RowTemplateValue, TableTemplateInterface } from './template/TableHelper';
import TableWithPagination from './template/TableWithPAgination';

interface CupCake {
    name: string,
    calories: number,
    fat: number
}

const header = [{ index: 0, value: 'Name' as unknown as object } as RowIndexValue,
{ index: 1, value: 'Calories' as unknown as object } as RowIndexValue,
{ index: 2, value: 'Fat' as unknown as object} as RowIndexValue];

function createData(name: string, calories: number, fat: number) {
    return { name: name, calories: calories, fat: fat } as CupCake;
}

const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));


function convertCupCake(cupcake: CupCake) {
    return {columns: [
        { index: 0, value: cupcake.name as unknown as object } as RowIndexValue,
        { index: 1, value: cupcake.calories as unknown as object } as RowIndexValue,
        { index: 2, value: cupcake.fat as unknown as object } as RowIndexValue 
    ], rowIndexSize:3 } as RowTemplateValue;
}

export default function CupCakeTable() {

    const value = { headerColumns: header, 
        rows: rows.map((row) => (convertCupCake(row))) } as TableTemplateInterface;

    return (
        <TableWithPagination {...value} />
    );
}