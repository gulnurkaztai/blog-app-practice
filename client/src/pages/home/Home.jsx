import "./home.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts";
import axios from "axios"
import {useEffect, useState} from "react"
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async () =>{
      const response = await axios.get("/posts"+search)
      setPosts(response.data)
    }
    fetchPosts();
  },[search])


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