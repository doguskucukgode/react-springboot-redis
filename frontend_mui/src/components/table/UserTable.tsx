import axios from "axios";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import DefaultConstants from '../../config/Constants';
import AppState from '../model/AppState';
import User from '../model/User';
import { RowIndexValue, RowTemplateValue, TableTemplateInterface } from './template/TableHelper';
import TableWithPagination from './template/TableWithPAgination';
import { setUsersState, removeUserState} from '../../store/actions/UserActions';
import { deleteUser } from '../api/UserApi';
import { toast } from 'react-toastify';

const header = [{ index: 0, value: 'Name' as unknown as object } as RowIndexValue,
{ index: 1, value: 'Surname' as unknown as object } as RowIndexValue,
{ index: 2, value: 'Age' as unknown as object } as RowIndexValue,
{ index: 3, value: 'Gender' as unknown as object } as RowIndexValue];

function convert(user: User, deleteFunc: Function) {
    return {
        columns: [
            { index: 0, value: user.name as unknown as object } as RowIndexValue,
            { index: 1, value: user.surname as unknown as object } as RowIndexValue,
            { index: 2, value: user.age as unknown as object } as RowIndexValue,
            { index: 3, value: user.gender as unknown as object } as RowIndexValue,
        ], rowIndexSize: 4, rowKey: user.id, deleteColumn: true, deleteFunc: deleteFunc
    } as RowTemplateValue;
}

export default function UserTable(props: any) {

    const value = {
        headerColumns: header,
        deleteColumn: true,
        rows: (useSelector((state: AppState) => state.users)).map((row) => (convert(row, DeleteUserRow))),
    } as TableTemplateInterface;

    const dispatch = useDispatch();

    function DeleteUserRow (userId: string) {
        deleteUser(userId)
        .then(r => {
            dispatch(removeUserState(userId));
        }).catch(e => {
            toast.error("Network Error");
        });
        
    }

    useEffect(() => {
        axios
            .get(DefaultConstants.GET_USER_LIST)
            .then(({ data }) => {
                dispatch(setUsersState(data));
            });
    }, [dispatch]);

    return (
        <TableWithPagination {...value} />
    );
}

