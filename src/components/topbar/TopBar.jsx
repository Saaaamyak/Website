import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
      <a href="https://www.facebook.com">
      <i className="topIcon fab fa-facebook-square"></i>
      </a>
      <a href="https://www.instagram.com">
      <i className="topIcon fab fa-instagram-square"></i>
      </a>
      <a href="https://www.pinterest.com">
      <i className="topIcon fab fa-pinterest-square"></i>
      </a>
      <a href="https://www.twitter.com">
      <i className="topIcon fab fa-twitter-square"></i>
      </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">LogOut</li>
        </ul>
      </div>
      <div className="topRight">
      <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"alt="" />
      <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
