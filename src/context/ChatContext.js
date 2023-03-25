import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: null, // changed from "null" to null
    user: {},
    chatRoomKey: "",
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          ...state,
          user: action.payload.user,
        };

      case "CREATE_CHAT_ROOM":
        return {
          ...state,
          chatRoomKey: action.payload.chatRoomKey,
        };

      case "JOIN_CHAT_ROOM":
        return {
          ...state,
          chatRoomKey: action.payload.chatRoomKey,
        };

      case "SWITCH_CHAT_ROOM":
        return {
          ...state,
          chatRoomKey: action.payload.chatRoomKey,
          chatId: action.payload.chatId, // Add this line
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
