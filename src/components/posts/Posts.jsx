import Post from "../post/Post";
import "./posts.scss";
import  {useQuery} from "@tanstack/react-query";
import {makeRequest} from "../../axios"
import  {useQuery} from "@tanstack/react-query";
import {makeRequest} from "../../axios"

const Posts = ({userId}) => {
  //TEMPORARY
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
    makeRequest.get("/posts?userId=" +userId).then(res=>{
      return res.data
    })
  }
  );
console.log(data);

  return (
  <div className="posts">
    {error 
    ? "Something went wrong!"
    : isLoading
    ? "loading"
    : data.map((post)=>
      <Post post={post} key={post.id}/>
    )}
  </div>
  );
};


export default Posts;