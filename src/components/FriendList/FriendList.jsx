import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => {
        return (
          <li className={css.friendsItem} key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline }) {
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
