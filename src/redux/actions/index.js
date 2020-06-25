import unsplashService from "../../services";

const photoApi = new unsplashService();

const showSpinner = () => {
    return {
        type: 'SHOW_SPINNER',
    }
}

const getData = (page) => dispatch => {
    photoApi.getNextPage(page).then(data => {
        dispatch({
            type: 'LOADED_PHOTO',
            payload: data
        })
    })
}

export {
    showSpinner,
    getData
}