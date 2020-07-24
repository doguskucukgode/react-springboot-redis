import React, { Component } from 'react';
import { RowIndexValue, RowTemplateValue, TableTemplateInterface } from './template/TableHelper';
import TableWithPagination from './template/TableWithPAgination';
import DefaultConstants from '../../config/Constants';
import User from '../model/User';

const header = [{ index: 0, value: 'Name' as unknown as object } as RowIndexValue,
{ index: 1, value: 'Surname' as unknown as object } as RowIndexValue,
{ index: 2, value: 'Age' as unknown as object} as RowIndexValue,
{ index: 3, value: 'Gender' as unknown as object} as RowIndexValue];

function createData(name: string, surname: string, age: number, gender: string) {
    return { name: name, surname: surname, age: age, gender: gender } as User;
}

function convert(user: User) {
    return {columns: [
        { index: 0, value: user.name as unknown as object } as RowIndexValue,
        { index: 1, value: user.surname as unknown as object } as RowIndexValue,
        { index: 2, value: user.age as unknown as object } as RowIndexValue,
        { index: 3, value: user.gender as unknown as object } as RowIndexValue,
    ], rowIndexSize:4 } as RowTemplateValue;
}

export default class UserTable extends Component {
    state = {value: {rows: [], headerColumns: []} as TableTemplateInterface};

    componentDidMount() {
        fetch(DefaultConstants.GET_USER_LIST)
          .then(results => results.json())
          .then(data => {
              console.log(data);
             const users = { headerColumns: header, 
                rows: (data as User[]).map((row) => (convert(row))) } as TableTemplateInterface;
            this.setState({ value: users });
          }).catch(err => console.log(err))
      }

    render() {
        return (
            <TableWithPagination {...this.state.value} />
        );
    }
    
}