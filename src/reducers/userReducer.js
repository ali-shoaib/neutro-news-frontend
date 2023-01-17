import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id:1, name:'Osama Khan'},
    {id:2, name:'Bilal Aslam'},
]

const UserReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users

export const { createUser } = UserReducer.actions

export default UserReducer.reducer