import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>This category has {data.length} news</div>;
};

export default Category;
