import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsFromApi } from "../redux/NewsFetch";
import NewsCard from "./NewsCard";

const News = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&q=${props.search}&category=${props.category}&apiKey=80a5db5cd6014d25bcb6f5f7c2984fa6`
      );
      const data = await response.json();
      dispatch(getNewsFromApi(data));
    }
    fetchNews();
  }, [props.category]);

  const articles = useSelector((state) => state.news.articles);

  return (
    <>
      <h1 class="display-3 text-center bg-dark text-white mt-1 mb-0">
        Your News
      </h1>
      <div className="container-fluid">
        <div className="row bg-dark text-white">
          {articles.map((article) => {
            return (
              <>
                <div class="col-sm-3 col-md-6 col-lg-4 ">
                  <NewsCard article={article} key={article.url} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
