import "./home.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts";
import axios from "axios"
import {useEffect, useState} from "react"

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async () =>{
      const result = await axios.get("/posts")
      setPosts(result.data)
    }
    fetchPosts();
  },[])


  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
  );
}