import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";

const Blogs = () => {
  const searchInput = useSelector(selectUserInput);
  const blog_url = `https://gnews.io/api/v4/${searchInput}?q=example&token=e7dfe1b6bb4bf655ad1d3cec2e3b9cbd`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const myInit = {
    method: "HEAD",
    mode: "no-cors",
  };

  useEffect(() => {
    axios
      .get(blog_url, {
        mode: "no-cors",
      })
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);
  return (
    <div className="blog__page">
      <h1 className="blog__page__header">Blogs and News</h1>
      {loading ? <h1 className="loading">Loading...</h1> : ""}
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          <a className="blog" target="_blank" href={blog.url}>
            <img src={blog.img}></img>
            <div>
              <h3 className="sourceName">
                <span>{blog.source.name}</span>
                <span>{blog.publishedAt}</span>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
