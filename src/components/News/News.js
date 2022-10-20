import React from "react";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const indivNews = useLoaderData();
  return <div>this is news page</div>;
};

export default News;
