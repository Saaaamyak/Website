import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT THE AUTHOR</span>
        <img
          src="https://media.istockphoto.com/id/1387587175/pl/wektor/ilustracja-wektorowa-przedstawiaj%C4%85ca-m%C5%82od%C4%85-posta%C4%87-kobiec%C4%85-siedz%C4%85c%C4%85-na-%C5%9Bwie%C5%BCym-powietrzu.jpg?s=612x612&w=0&k=20&c=m2OZQwSpLnfecyMYuuCWGvtV-T1Ro8i1T4kgs8ZeRAs="
          alt=""
        />
        <p>
          La
        </p>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES</span>
    <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
    </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial">
    <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
    </div>
    </div>
    </div>
  )
}
