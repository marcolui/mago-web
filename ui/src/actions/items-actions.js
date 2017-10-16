import {apiActionCreator} from "../common/api/action-utils";
import AppTransport from "../api/app-transport";

export const loadItems = apiActionCreator('LOAD_ITEMS', () => new AppTransport().getItems());
export const loadItemById = apiActionCreator('LOAD_ITEM_BY_ID', (itemId) => new AppTransport().getItemById(itemId));