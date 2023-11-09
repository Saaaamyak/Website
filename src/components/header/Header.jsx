import "./header.css";

export default function Header() {
  return (
    <div className="picture">
      <div className="pictureTitles">
        <span className="pictureTitleSm"></span>
        <span className="pictureTitleLg"></span>
      </div>
      <img
        className="pictureImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}