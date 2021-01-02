import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarOutline";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import "./Chat.css";
import db from "./firebase";
import Message from "./Message";
import Chatinput from "./Chatinput";

function Chat() {
  const [roomDetails, setRoomDetails] = useState();
  const [roomMessages, setroomMessages] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => {
        setRoomDetails(snapshot.data());
      });

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("time", "asc")
      .onSnapshot((snapshot) =>
        setroomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomMessages);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <div className="chat_channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderIcon id="starIcon" />
          </div>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoIcon />
          </p>
        </div>
      </div>
      <div className="chat_messages">
        {/* <Messages/> */}
        {roomMessages.map((message) => {
          return (
            <Message
              message={message.message}
              timestamp={message.time}
              user={message.user}
              userImage={message.userimage}
            />
          );
        })}
      </div>
      <Chatinput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
