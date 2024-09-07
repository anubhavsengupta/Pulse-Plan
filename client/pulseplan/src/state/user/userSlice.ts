import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    value: boolean;
    id: string;
}

const initialState: UserState = {
    value: false,
    id: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.value = true;
            state.id = "123";
        },
        logout: (state) => {
            state.value = false;
        },
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;