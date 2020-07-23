import React from 'react';
import { RowIndexValue, RowTemplateValue, TableTemplateInterface } from './template/TableHelper';
import TableWithPagination from './template/TableWithPAgination';

interface User {
    name: string,
    surname: string,
    age: number,
    gender: string
}

const header = [{ index: 0, value: 'Name' as unknown as object } as RowIndexValue,
{ index: 1, value: 'Surname' as unknown as object } as RowIndexValue,
{ index: 2, value: 'Age' as unknown as object} as RowIndexValue,
{ index: 3, value: 'Gender' as unknown as object} as RowIndexValue];

function createData(name: string, surname: string, age: number, gender: string) {
    return { name: name, surname: surname, age: age, gender: gender } as User;
}

const rows = [
    createData('Dogus', 'Kucukgode', 30, 'M'),
    createData('Dogus1', 'Kucukgode1', 30, 'M'),
    createData('Dogus2', 'Kucukgode2', 31, 'M'),
    createData('Dogus3', 'Kucukgode3', 32, 'M'),
    createData('Dogus4', 'Kucukgode4', 33, 'M'),
    createData('Dogus5', 'Kucukgode5', 34, 'M'),
    createData('Dogus6', 'Kucukgode6', 35, 'M'),
    createData('Dogus7', 'Kucukgode7', 36, 'M'),
    createData('Dogus8', 'Kucukgode8', 37, 'M'),
    createData('Dogus9', 'Kucukgode9', 38, 'M'),
].sort((a, b) => (a.age < b.age ? -1 : 1));


function convertCupCake(user: User) {
    return {columns: [
        { index: 0, value: user.name as unknown as object } as RowIndexValue,
        { index: 1, value: user.surname as unknown as object } as RowIndexValue,
        { index: 2, value: user.age as unknown as object } as RowIndexValue,
        { index: 3, value: user.gender as unknown as object } as RowIndexValue,
    ], rowIndexSize:4 } as RowTemplateValue;
}

export default function UserTable() {

    const value = { headerColumns: header, 
        rows: rows.map((row) => (convertCupCake(row))) } as TableTemplateInterface;

    return (
        <TableWithPagination {...value} />
    );
}