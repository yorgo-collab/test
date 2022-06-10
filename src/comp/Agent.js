import { useEffect, useState } from "react";
import MDSpinner from "react-md-spinner";
const agentUID = "12345678";
const appID = "211379a2c43c68ab";
const region ="eu";
const AUTH_KEY = "826004c9d07d2383b4cff6a40413898e3b178235";
const wid = "b450aa3f-98cb-4612-adc0-46fa3039cc66";

const Agent = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.CometChatWidget.init({
      appID: appID,
      appRegion: region,
      authKey: AUTH_KEY,
    }).then(
      (response) => {
        console.log("Initialization completed successfully");
        //You can now call login function.
        window.CometChatWidget.login({
          uid: agentUID,
        }).then(
          (response) => {
            window.CometChatWidget.launch({
              widgetID: wid,
              target: "#cometchat",
              roundedCorners: "true",
              height: "600px",
              width: "100%",
              defaultID: "12345678", //default UID (user) or GUID (group) to show,
              defaultType: "user", //user or group
            });
            setLoading(false);
          },
          (error) => {
            console.log("User login failed with error:", error);
            //Check the reason for error and take appropriate action.
          }
        );
      },
      (error) => {
        console.log("Initialization failed with error:", error);
        //Check the reason for error and take appropriate action.
      }
    );
  }, []);
  if (loading) {
    return (
      <div>
        <MDSpinner />
      </div>
    );
  }
  return <div id="cometchat" style={{ margin: "0 auto", width: "60%" }} />;
};
export default Agent;