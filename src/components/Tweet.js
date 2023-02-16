import Message from "./Message"
import Timestamp from "./Timestamp"
import User from "./User"
import ProfileImage from "./ProfileImage"
import Actions from "./Actions"


function Tweet(props) {

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}></ProfileImage>
      <div className="body">
        <div className="top">
          <User user={props.tweet.user}></User>
          <Timestamp timestamp={props.tweet.timestamp}></Timestamp>
        </div>
        <Message message={props.tweet.message}></Message>
        <Actions></Actions>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
