import { React, useEffect, useState } from "react";
import "./Sidebar.css";
import { FiberManualRecord } from "@material-ui/icons";
import CreateIcon from "@material-ui/icons/Create";
import InsertComment from "@material-ui/icons/InsertComment";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import db from "./firebase";
import AddIcon from "@material-ui/icons/Add";
import { helloworld } from "./SidebarOption";
import { useStateValue } from "./StateProvider";

function Slidebar() {
  const [channels, setChannels] = useState([]);

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>{user.displayName}</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saves items" />
      <SidebarOption Icon={BookmarkIcon} title="Channel brower" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={PeopleAltIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />

      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <SidebarOption
        Icon={AddIcon}
        addChannel
        id="add_channel"
        title="Add channels"
      />

      {/* Connect to Firebase database and list all the channels   */}
      {/* <SidebarOption/> */}
      <div className="sidebar_OptionAddedChannels">
        {channels.map((channel) => {
          return <SidebarOption title={channel.name} id={channel.id} />;
        })}
      </div>
    </div>
  );
}

export default Slidebar;
