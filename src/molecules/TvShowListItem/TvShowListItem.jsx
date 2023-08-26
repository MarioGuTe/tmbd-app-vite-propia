import PropTypes from "prop-types";
import { SMALL_IMAGE_COVER_BASE_URL, MAX_TITLE_CHAR } from "../../config";
import s from "./particle/style.module.css";

const TvShowListItem = ({ tvShow, onClick }) => {
  const onClickHandle = () => {
    onClick(tvShow);
  };

  return (
    <div onClick={onClickHandle} className={s.container}>
      <img
        alt={tvShow.name}
        src={SMALL_IMAGE_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};

TvShowListItem.propTypes = {
  tvShow: PropTypes.object,
  onClick: PropTypes.func,
};

export default TvShowListItem;
