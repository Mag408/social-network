export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET-USERS";

export type FollowType = {
  type: "FOLLOW";
  userId: number;
};

export type UnfollowType = {
  type: "UNFOLLOW";
  userId: number;
};

export type SetUsersType = {
  type: "SET-USERS";
  users: UserType[];
};

export type ActionsType = FollowType | UnfollowType | SetUsersType;

export type UserLocationType = {
  city: string;
  country: string;
};

export type UserType = {
  id: number;
  avatarUrl: string;
  followed: boolean;
  fullName: string;
  status: string;
  location: UserLocationType;
};

export type UsersStateType = {
  users: UserType[];
};

export const initialState: UsersStateType = {
  users: [],
};

export const usersReducer = (
  state: UsersStateType = initialState,
  action: ActionsType
): UsersStateType => {
  switch (action.type) {
    case FOLLOW: {
      const StateCopy = {
        ...state,
        users: state.users?.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

      return StateCopy;
    }
    case UNFOLLOW: {
      const StateCopy = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

      return StateCopy;
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default: {
      return state;
    }
  }
};

export const FollowAC = (userId: number): FollowType => ({
  type: FOLLOW,
  userId,
});
export const UnfollowAC = (userId: number): UnfollowType => ({
  type: UNFOLLOW,
  userId,
});
export const SetUsersAC = (users: UserType[]): SetUsersType => ({
  type: SET_USERS,
  users,
});
