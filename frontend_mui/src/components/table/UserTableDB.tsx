import React, { Component } from 'react';
import { RowIndexValue, RowTemplateValue, TableTemplateInterface } from './template/TableHelper';
import TableWithPagination from './template/TableWithPAgination';
import User from '../model/User';
import { getUsers } from '../api/UserApi';

const header = [{ index: 0, value: 'Name' as unknown as object } as RowIndexValue,
{ index: 1, value: 'Surname' as unknown as object } as RowIndexValue,
{ index: 2, value: 'Age' as unknown as object} as RowIndexValue,
{ index: 3, value: 'Gender' as unknown as object} as RowIndexValue];

function convert(user: User) {
    return {columns: [
        { index: 0, value: user.name as unknown as object } as RowIndexValue,
        { index: 1, value: user.surname as unknown as object } as RowIndexValue,
        { index: 2, value: user.age as unknown as object } as RowIndexValue,
        { index: 3, value: user.gender as unknown as object } as RowIndexValue,
    ], rowIndexSize:4, rowKey: user.id} as RowTemplateValue;
}

export default class UserTableDB extends Component {
    state = {value: {rows: [], headerColumns: [], deleteColumn: true} as TableTemplateInterface};

    async componentDidMount() {
        const res  = await getUsers().catch(e => {console.error(e); return null}); 
        const users = { headerColumns: header, 
            rows: (res as User[]).map((row) => (convert(row))) } as TableTemplateInterface;
        this.setState({ value: users });
      }

    render() {
        return (
            <TableWithPagination {...this.state.value} />
        );
    }
    
}