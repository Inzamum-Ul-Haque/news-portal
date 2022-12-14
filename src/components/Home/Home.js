import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const allNews = useLoaderData();

  return (
    <div>
      <h2>News Portal: {allNews.length}</h2>
      <div>
        {allNews.map((news) => (
          <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
