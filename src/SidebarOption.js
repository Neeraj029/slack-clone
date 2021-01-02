import React from "react";
import "./SidebarOption.css";
import db from "./firebase";
import { useHistory } from "react-router-dom";

function SidebarOption({ Icon, title, id, addChannel }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const setChannel = () => {
    const channelName = prompt("Enter your Channel name: ");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannel ? setChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3 className="sidebarOption_channel">{title}</h3>
      ) : (
        <h3 className="sidebarOption_hash"># {title}</h3>
      )}
    </div>
  );
}

function helloworld() {
  console.log("Hello World");
}

export { helloworld };
export default SidebarOption;
