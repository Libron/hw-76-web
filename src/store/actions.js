import axios from '../axios-instance';

export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const PUBLISH_MESSAGE_REQUEST = 'PUBLISH_MESSAGE_REQUEST';
export const PUBLISH_MESSAGE_SUCCESS = 'PUBLISH_MESSAGE_SUCCESS';
export const PUBLISH_MESSAGE_FAILURE = 'PUBLISH_MESSAGE_FAILURE';


export const fetchMessagesRequest = () => {
    return {type: FETCH_MESSAGES_REQUEST};
};
export const fetchMessagesSuccess = messages => {
    return {type: FETCH_MESSAGES_SUCCESS, messages};
};
export const fetchMessagesFailure = error => {
    return {type: FETCH_MESSAGES_FAILURE, error}
};

export const publishMessageRequest = () => {
    return {type: PUBLISH_MESSAGE_REQUEST};
};
export const publishMessageSuccess = () => {
    return {type: PUBLISH_MESSAGE_SUCCESS};
};
export const publishMessageFailure = error => {
    return {type: PUBLISH_MESSAGE_FAILURE, error}
};

export const fetchMessages = () => {
    return (dispatch, getState) => {
        dispatch(fetchMessagesRequest());
        let url = '/messages';
        const datetime = getState().datetime;
        if (datetime) {
            url += '?datetime=' + datetime;
        }

        axios.get(url).then(response => {
            dispatch(fetchMessagesSuccess(response.data));
        }, error => {
            dispatch(fetchMessagesFailure(error));
        });
    }
};

export const publishMessage = (message) => {
    return (dispatch) => {
        dispatch(publishMessageRequest());
        axios.post('/messages', message).then(() => {
            dispatch(publishMessageSuccess());
            alert('Вы успешно добавили message!');
        }, error => {
            alert(error.response.data.error);
            dispatch(publishMessageFailure(error));
        });
    }
};