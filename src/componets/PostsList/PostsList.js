import React from "react";
import "./PostsList.css";
import PostItem from "../PostItem/PostItem";

const PostsList = () => {
  const [items, setItem] = React.useState([]);
  const getItems = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  };
  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <img
          src="https://th.bing.com/th/id/R.0c8bbd41a3c787a7244bc826716672b5?rik=22wuxDMwhgTIXQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_574149.png&ehk=qogDjlzfhVxldl0J2tMpYzGh2Nub24%2fvpUbY8T8GuCM%3d&risl=&pid=ImgRaw&r=0"
          alt="list"
        />
        <h2>Posts List</h2>
      </div>
      <div className="body">
        {items.map((item) => {
          return (
            <PostItem
              description={item.body}
              title={item.title}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostsList;
