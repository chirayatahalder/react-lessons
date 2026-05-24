import RobotDP from "../assets/images/robot.png";
import UserDP from "../assets/images/user.png";
import loadingSspinner from "../assets/images/loading-spinner.gif";
import "./ChatMessage.css"

export default function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotDP} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message === "Loading..." ? (
          <img
            src={loadingSspinner}
            style={{ height: "40px", margin: "-15px" }}
          />
        ) : (
          message
        )}
      </div>
      {sender === "user" && (
        <img src={UserDP} className="chat-message-profile" />
      )}
    </div>
  );
}