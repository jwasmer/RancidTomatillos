import React from "react";
import AllMoviesView from "../AllMoviesView/AllMoviesView";
import "./DetailView.css"

function DetailView({
  id,
  title,
  poster_path,
  backdrop_path,
  release_date,
  overview,
  average_rating,
  genres,
  name,
  budget,
  revenue,
  runtime,
  tagline,
  closeMovie }) {

  return <section className="detail-view">
    <img src={poster_path} alt={`A poster featuring art for the movie ${title}`}/>
    
  </section>
}

export default DetailView