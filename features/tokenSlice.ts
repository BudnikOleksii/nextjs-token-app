import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../app/store';
import { TokenInfoAll } from '../types/TokenInfo';
import { getTokenInfo } from '../api/token';

export interface TokenState {
  tokenState: TokenInfoAll[];
  tokenIsLoading: boolean;
  tokenError: string;
}

const initialState: TokenState = {
  tokenState: [],
  tokenIsLoading: false,
  tokenError: '',
};

export const fetchToken = createAsyncThunk(
  'token/fetch_token',
  getTokenInfo,
);

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchToken.pending, (state) => {
      state.tokenIsLoading = true;
    });

    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.tokenState.push(action.payload);
      state.tokenIsLoading = false;
    });

    builder.addCase(fetchToken.rejected, (state, action) => {
      state.tokenError = action.error.name || '';
      state.tokenIsLoading = false;
    });
  },
});

export const selectTokenState = (state: AppState) => state.token;

export default tokenSlice.reducer;
