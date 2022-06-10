import { useEffect, useState } from "react";
import MDSpinner from "react-md-spinner";
const appID = "211379a2c43c68ab";
const region = "eu";
const AUTH_KEY ="826004c9d07d2383b4cff6a40413898e3b178235";
const wid = "99e9750b-e182-4bbb-ba49-cf325423a04c";

const Client = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(true);
    window.CometChatWidget.init({
      appID: appID,
      appRegion: region,
      authKey: AUTH_KEY,
    }).then((response) => {
      console.log("Initialization completed successfully");
      //You can now call login function.
      let uid = localStorage.getItem("cc-uid");
      if (uid === null) {
        // create new user
        const uid = "user" + new Date().getSeconds().toString();
        const user = new window.CometChatWidget.CometChat.User(uid);
        user.setName(uid);
        window.CometChatWidget.createOrUpdateUser(user).then((user) => {
          // Proceed with user login
          window.CometChatWidget.login({
            uid: uid,
          }).then((loggedInUser) => {
            localStorage.setItem("cc-uid", loggedInUser.uid);
            // Proceed with launching your Chat Widget
            window.CometChatWidget.launch({
              widgetID: wid,
              roundedCorners: "true",
              docked: "true",
              height: "300px",
              width: "400px",
              defaultID: "",
              defaultType: "user", //user or group
            });
            setLoad(false);
          });
        });
      } else {
        window.CometChatWidget.login({
          uid: uid,
        }).then((user) => {
          window.CometChatWidget.launch({
            widgetID: wid,
            roundedCorners: "true",
            docked: "true",
            height: "300px",
            width: "400px",
            defaultID: "",
            defaultType: "user", //user or group
          });
          setLoad(false);
        });
      }
    });
  }, []);
  if (load) {
    return (
      <div className="container">
        <MDSpinner />
      </div>
    );
  }
  return <div className="App"></div>;
};
export default Client;