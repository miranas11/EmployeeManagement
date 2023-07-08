import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        jwtToken: null,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.jwtToken = action.payload.token;
        },

        logout: (state) => {
            state.isLoggedIn = false;
            state.jwtToken = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
