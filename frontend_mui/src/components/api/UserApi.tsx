import { AxiosService } from "../../common/AxiosService";
import DefaultConstants from '../../config/Constants';
import User from "../model/User";

export const addUser: (user: User) => Promise<any> = (user: User) =>
new AxiosService<any>(DefaultConstants.API_BASE_URL, DefaultConstants.API_USERS).post(user);

export const deleteUser: (userId: string) => Promise<any> = (userId: string) =>
new AxiosService<any>(DefaultConstants.API_BASE_URL, DefaultConstants.API_USERS + userId).delete();

export const getUsers: () => Promise<any> = () =>
new AxiosService<any>(DefaultConstants.API_BASE_URL, DefaultConstants.API_USERS).get();