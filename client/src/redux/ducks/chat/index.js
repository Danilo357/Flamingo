import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";

const socket = io("http://localhost:8080", {
  transports: ["websocket"]
});

const ADD_MESSAGE = "chat/ADD_MESSAGE";
const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};

function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message
  };
}

export function useChat() {
  const dispatch = useDispatch();
  const messages = useSelector(appState => appState.chatState.messages);
  const add = message => socket.emit("message", message);

  socket.on("message", message => {
    dispatch(addMessage(message));
  });

  return { add, messages };
}
