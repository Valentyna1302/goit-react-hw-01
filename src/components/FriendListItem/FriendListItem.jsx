import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img className={css.friendsImg} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p style={{ color: "green" }}>Online</p>
      ) : (
        <p style={{ color: "red" }}>Offline</p>
      )}
    </div>
  );
}
