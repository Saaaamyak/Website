import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://vidhilegalpolicy.in/wp-content/uploads/2021/10/mental-health-wellness-during-covid-19.jpg"
       alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            Music
          </span>
          <span className="postCat">
             Life
          </span>
        </div>
        <span className="postTitle">
         
        Don’t Kill Yourself — My Daily To-Do List
          
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Do the laundry, wash the dishes, and don’t kill yourself — those are on my to-do list. That last one is on my daily to-do list. (Yes, I realize it’s more like a to-don’t item, but allow me some latitude, if you would.) Yes, I have to remind myself every day not to die. I put it on lists. I remind myself of it in blog posts, and I say the words to myself almost as a mantra — “no kill, no die.” Let’s talk about why I need to do that and how I can not kill myself every day in spite of the desire to do so
      </p>
    </div>
  );
}

