import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input className="shareInput" placeholder="What's in your mind XYZ" />
        </div>
        <hr className="sharehr" />
        <div className="shareBottom">
          <div className="shareOption">
            <div className="shareOptions">
              <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOptions">
              <LabelIcon htmlColor="blue" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOptions">
              <RoomIcon htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOptions">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>

        </div>
      </div>
    </div>
  );
};

export default Share;
