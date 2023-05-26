import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Vivek Tiwari",
      img: "https://www.shutterstock.com/image-photo/unshaven-confident-serious-young-male-260nw-776211322.jpg",
    },
    {
      id: 2,
      name: "Neha Singh",
      img: "https://previews.123rf.com/images/yurolaitsalbert/yurolaitsalbert1804/yurolaitsalbert180400067/98749210-portrait-of-a-young-prospective-female-employee-on-the-background-of-a-large-window.jpg",
    },
    {
      id: 3,
      name: "Deepshikha Tripathi",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      name: "Nitish Pandey",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories