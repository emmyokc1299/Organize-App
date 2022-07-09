const initState = {
    showModal: false,
    showDelete: false
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        case 'SHOW_MODAL':
            return {
                ...state,
                showModal: true
            }
        case 'REMOVE_MODAL':
            return{
                ...state,
                showModal: false
            }
        case 'SELECT_DATA':
            return{
                ...state,
                selectedData: action.payload
            }
        case 'SHOW_DELETE': 
            return{
                ...state,
                showDelete: true
            }

        case 'REMOVE_DELETE':
            return{
                ...state,
                showDelete: false
            }
        default: 
            return state;
    }
}

export default projectReducer;