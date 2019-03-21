function news (state = [], action) {
    switch (action.type) {
        case 'DOWNLOADED':
        return [...state, ...action.data]    
        default:
        return state;
    }
}

export default news;