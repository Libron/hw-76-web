import {
    FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS, PUBLISH_MESSAGE_FAILURE,
    PUBLISH_MESSAGE_REQUEST, PUBLISH_MESSAGE_SUCCESS
} from "./actions";

const initialState = {
  messages: [],
  loading: false,
    datetime: null
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
      case FETCH_MESSAGES_REQUEST:
      case PUBLISH_MESSAGE_REQUEST:
          return {...state, loading: true};
      case FETCH_MESSAGES_SUCCESS:
          if (action.messages.length === 0) {
              return {...state, loading: false};
          }

          return {
              ...state,
              loading: false,
              messages: [...state.messages, ...action.messages],
              datetime: action.messages[action.messages.length -1].datetime
          };
      case PUBLISH_MESSAGE_SUCCESS:
      case FETCH_MESSAGES_FAILURE:
      case PUBLISH_MESSAGE_FAILURE:
          return {...state, loading: false};

      default:
          return state;
  }
};

export default reducer;