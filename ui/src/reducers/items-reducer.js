import {loadItems} from '../actions/items-actions';

const initialState = {
    items: [],
    loadingItems: false
};

const itemsHandler = ({
    [loadItems.PENDING]: (state, action) => ({...state, items: [], loadingItems: true}),
    [loadItems.FULFILLED]: (state, action) => ({...state, items: Object.freeze(action.payload), loadingItems: false}),
    [loadItems.REJECTED]: (state, action) => ({...state, items: [], loadingItems: false}) // TODO: handle error
});

export default (state = initialState, action) => {
    let handler = itemsHandler[action.type];
    return handler ? handler(state, action) : state;
}