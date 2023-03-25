import { collection, doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      // Update this query to fetch chat rooms data
      const unsub = onSnapshot(collection(db, "chatRooms"), (querySnapshot) => {
        const rooms = [];
        querySnapshot.forEach((doc) => {
          rooms.push({ id: doc.id, ...doc.data() });
        });
        setChats(rooms);
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);


  const handleSelect = (room) => {
    dispatch({ type: "SWITCH_CHAT_ROOM", payload: { chatRoomKey: room.key, chatId: room.id } });
  };
  


  return (
    <div className="chats">
      {chats.map((chat) => (
        <div
          className="userChat"
          key={chat.id}
          onClick={() => handleSelect(chat)}
        >
          <img src={chat.roomImageURL} alt="" />
          <div className="chatRoomInfo">
            <span>{chat.roomName}</span>
            <p>{chat.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
