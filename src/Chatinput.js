import { React, useState } from "react";
import "./Chatinput.css";
import SendIcon from "@material-ui/icons/Send";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";

function Chatinput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userimage: user.photoURL,
      });
    }
    setInput("");
  };

  return (
    <div className="chatinput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

export default Chatinput;
