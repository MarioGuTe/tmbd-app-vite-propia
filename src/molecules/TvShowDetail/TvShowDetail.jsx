import PropTypes from "prop-types";
import FiveStarRating from "../FiveStarRating/FiveStarRating";
import s from "./particle/style.module.css";

const TvShowDetail = ({ tvShow }) => {
  const rating = tvShow.vote_average / 2;

  return (
    <>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating}/5</span>
      </div>
      <div className={s.overview}>
        {tvShow.overview.length > 1 ? tvShow.overview : "No description found"}
      </div>
    </>
  );
};

TvShowDetail.propTypes = {
  tvShow: PropTypes.object,
};

export default TvShowDetail;
