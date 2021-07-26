import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const API_URL = 'https://60fb2ea991156a0017b4c7be.mockapi.io';

export type User = {
  firstname: string | null;
  lastname: string | null;
  birthday: Date | null;
  id: string | null;
};

export type UserFetchType = {
  user: User;
  error: boolean;
  loading: boolean;
};

const initialState: UserFetchType = {
  user: {
    firstname: '',
    lastname: '',
    birthday: null,
    id: '',
  },
  error: false,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    getUser: state => {
      state.loading = true;
    },
    getUserSuccess: (state, {payload}) => {
      state.user = payload;
      state.loading = false;
      state.error = false;
    },
    getUserFailure: state => {
      state.error = true;
      state.loading = false;
    },
    postUserSuccess: (state, {payload}) => {
      state.user.id = payload;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {getUser, getUserSuccess, getUserFailure, postUserSuccess} =
  userSlice.actions;

export const userSelector = state => state.user;

export default userSlice.reducer;

export const fetchUser = id => async dispatch => {
  dispatch(getUser());

  try {
    const response = await axios(`${API_URL}/users/${id}`);
    dispatch(getUserSuccess(response.data));
  } catch (error) {
    dispatch(getUserFailure());
  }
};

export const postUser = data => async dispatch => {
  dispatch(getUser());
  try {
    const response = await axios.post(`${API_URL}/users/`, data);
    dispatch(postUserSuccess(response.data.id));
  } catch (error) {
    dispatch(getUserFailure());
  }
};
