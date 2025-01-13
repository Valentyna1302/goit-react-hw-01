import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.userCard}>
      <div className={css.userInfo}>
        <img className={css.userImage} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userLocation}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.userStateslist}>
        <li className={css.userStatesItem}>
          <span>Followers</span>{" "}
          <span className={css.userStatesAmount}>{stats.followers}</span>
        </li>
        <li className={css.userStatesItem}>
          <span>Views</span>
          <span className={css.userStatesAmount}>{stats.views}</span>
        </li>
        <li className={css.userStatesItem}>
          <span>Likes</span>
          <span className={css.userStatesAmount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
