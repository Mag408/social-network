export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type FollowType = {
  type: "FOLLOW";
  userId: number;
};

export type UnfollowType = {
  type: "UNFOLLOW";
  userId: number;
};

export type SetUsersType = {
  type: "SET_USERS";
  users: UserType[];
};

export type SetCurrentType = {
  type: "SET_CURRENT_PAGE";
  pageValue: number;
};
export type SetTotalUserCountType = {
  type: "SET_TOTAL_USER_COUNT";
  count: number;
};

export type ToggleIsFetchingType = {
  type: "TOGGLE_IS_FETCHING";
  isFetching: boolean;
};

export type ActionsType =
  | ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUserCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingInProgress>;

export type PhotosType = {
  small: string;
  large: string;
};

export type UserType = {
  id: number;
  avatarUrl: string;
  followed: boolean;
  name: string;
  status: string;
  photos: PhotosType;
};

export type UsersStateType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

export const initialState: UsersStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 50,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [1, 2],
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
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      const StateCopy = {
        ...state,
        currentPage: action.pageValue,
      };

      return StateCopy;
    }
    case SET_TOTAL_USER_COUNT: {
      const StateCopy = {
        ...state,
        totalUsersCount: action.count,
      };

      return StateCopy;
    }
    case TOGGLE_IS_FETCHING: {
      const StateCopy = {
        ...state,
        isFetching: action.isFetching,
      };

      return StateCopy;
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      const StateCopy = {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter((id) => id != action.userId)],
      };

      return StateCopy;
    }
    default: {
      return state;
    }
  }
};

export const follow = (userId: number) =>
  ({
    type: FOLLOW,
    userId,
  } as const);
export const unfollow = (userId: number) =>
  ({
    type: UNFOLLOW,
    userId,
  } as const);
export const setUsers = (users: UserType[]) =>
  ({
    type: SET_USERS,
    users,
  } as const);
export const setCurrentPage = (pageValue: number) =>
  ({
    type: SET_CURRENT_PAGE,
    pageValue,
  } as const);
export const setTotalUserCount = (count: number) =>
  ({
    type: SET_TOTAL_USER_COUNT,
    count,
  } as const);
export const toggleIsFetching = (isFetching: boolean) =>
  ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
  } as const);
export const toggleFollowingInProgress = (
  isFetching: boolean,
  userId: number
) =>
  ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  } as const);
