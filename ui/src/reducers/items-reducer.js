import {loadItems, loadItemById} from '../actions/items-actions';

const initialState = {
    items: [],
    loadingItems: false,
    selected: null,
    loadingSelected: false
};

const itemsHandler = ({
    [loadItems.PENDING]: (state, action) => ({...state, items: [], loadingItems: true}),
    [loadItems.FULFILLED]: (state, action) => ({...state, items: Object.freeze(action.payload), loadingItems: false}),
    [loadItems.REJECTED]: (state, action) => ({...state, items: [], loadingItems: false}) // TODO: handle error
});

const selectedItemHandler = ({
    [loadItemById.PENDING]: (state, action) => ({...state, selected: null, loadingSelected: true}),
    [loadItemById.FULFILLED]: (state, action) => ({...state, selected: Object.freeze(action.payload), loadingSelected: false}),
    [loadItemById.REJECTED]: (state, action) => ({...state, items: null, loadingSelected: false}) // TODO: handle error
});

const handlers = {...itemsHandler, ...selectedItemHandler};

export default (state = initialState, action) => {
    let handler = handlers[action.type];
    return handler ? handler(state, action) : state;
}