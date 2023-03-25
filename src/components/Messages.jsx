import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data3 } = useContext(ChatContext);

  useEffect(() => {
    if (data.chatRoomKey) {
      const unSub = onSnapshot(
        query(
          collection(db, "messages"),
          where("chatRoomKey", "==", data.chatRoomKey),
          orderBy("timestamp", "asc")
        ),
        (querySnapshot) => {
          const msgs = [];
          querySnapshot.forEach((doc) => {
            msgs.push({ id: doc.id, ...doc.data() });
          });
          setMessages(msgs);
        }
      );

      return () => {
        unSub();
      };
    }
  }, [data.chatRoomKey]);




  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
