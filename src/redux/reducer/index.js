const initialState = {
    photos: [],
    page:1,
    loading:true
}

const galleryPage = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADED_PHOTO':{
            return {
                ...state,
                page: state.page+1,
                loading: false,
                photos: [
                    ...state.photos,
                    ...action.payload
                ]
            }
        }

        case 'SHOW_SPINNER':{
            return {
                ...state,
                loading: true
            }
        }

        default:
            return state;
    }
}

export default galleryPage;
