import {apiActionCreator} from "../common/api/action-utils";
import AppTransport from "../api/app-transport";

export const loadItems = apiActionCreator('LOAD_ITEMS', () => new AppTransport().getItems());