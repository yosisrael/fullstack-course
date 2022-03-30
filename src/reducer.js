export const ACTIONS = {
    ADD_ITEM: 'add-item',
    DELETE_ITEM: 'delete-item'
}

export default function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_ITEM:
            return {...state, items: [...state.items, action.payload]};
        case ACTIONS.DELETE_ITEM:
            return {...state, items: state.items.filter(item => item.id !== action.payload.id)};
        default:
            return state;
    }
}