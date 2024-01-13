import React from "react";
import { UserType } from "../../redux/reducers/users-reducer";
import styles from "./users.module.css";

type UsersPropsType = {
  users: UserType[];
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
};

const Users: React.FC<UsersPropsType> = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        avatarUrl:
          "https://sopranoclub.ru/images/memy-na-avu-275-memnyh-avatarok/file56870.jpeg",
        followed: false,
        fullName: "Maga",
        status: "Magistr",
        location: { city: "Magas", country: "Russia" },
      },
      {
        id: 2,
        avatarUrl:
          "https://pic.rutubelist.ru/video/46/b2/46b25de0bf3d3fa60a22037e55071354.jpg",
        followed: true,
        fullName: "Arut",
        status: "Pidor",
        location: { city: "Magas", country: "Russia" },
      },
      {
        id: 3,
        avatarUrl:
          "https://i.pinimg.com/736x/b1/66/fd/b166fd3928b41f6c62d3214f97bfa48d--pretty-pictures-best-funny-pictures.jpg",
        followed: true,
        fullName: "Morgen",
        status: "Pidoras",
        location: { city: "Magas", country: "Russia" },
      },
      {
        id: 4,
        avatarUrl:
          "https://krot.club/uploads/posts/2022-03/1647122720_58-krot-info-p-muzhik-s-borodoi-prikol-smeshnie-foto-62.jpg",
        followed: false,
        fullName: "kolabok",
        status: "Krug",
        location: { city: "Magas", country: "Russia" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img className={styles.avatar__img} src={u.avatarUrl} alt="" />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Follow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Unfollow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
