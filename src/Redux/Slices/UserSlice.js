import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserApi from "../api/UserApi"
import AsyncStorage from "@react-native-async-storage/async-storage";

// Get user from localStorage

const initialState = {
  user: null,
  isLoading: false,
  isLoggedIn: false,
  isError: false,
  isSuccess : false,
  message: null,
}

export const InsertUser = createAsyncThunk(
 'user/InserUser', async(userInfos, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        const res = await UserApi.Insert_User(userInfos);
        return res
    }
    catch(error){
        return rejectWithValue(error.response.data) 
    }
})

export const Login = createAsyncThunk(
    'user/InserUser', async(userInfos, thunkAPI)=>{
       const {rejectWithValue} = thunkAPI
       try{
           const res = await UserApi.Login(userInfos);
           return res
       }
       catch(error){
           return rejectWithValue(error.response.data) 
       }
})

export const Get_User = createAsyncThunk(
    'user/InserUser', async(id, thunkAPI)=>{
       const {rejectWithValue} = thunkAPI
       try{
           const res = await UserApi.GetUser(id);
           console.log('GET USER:', res)
           return res
       }
       catch(error){
           return rejectWithValue(error.response.data) 
       }
})

export const addToken = createAsyncThunk(
    'user/addtoken',
    async ()=>{
       const result =  await AsyncStorage.getItem('user') 
       return result  
    }
)

export const logout = createAsyncThunk(
    "auth/logout", async () => {
    await UserApi.logout();
});


const CategorySlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        reset: (state) =>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = null
        }
    },
    extraReducers:{

        // Add Token
        [addToken.fulfilled]:(state,action)=>{
            state.user = action.payload
        },
        // User Register
        [InsertUser.pending]: (state, action) =>{
           state.isLoading = true
        },
        [InsertUser.fulfilled]: (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.isLoggedIn = true
            state.user = action.payload
        },
        [InsertUser.rejected]: (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        },
        // User Login
         [Login.pending]: (state, action) =>{
            state.isLoading = true
         },
         [Login.fulfilled]: (state, action) =>{
             state.isLoading = false
             state.isSuccess = true
             state.isLoggedIn = true
             state.user = action.payload
         },
         [Login.rejected]: (state, action) =>{
             state.isLoading = false
             state.isError = true
             state.message = action.payload
         },
        // Get User
         [Get_User.fulfilled]: (state, action) =>{
             state.isLoading = false
             state.isSuccess = true
             state.user = action.payload
         },
        
        // LogOut
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            console.log('res:', action)

        },
    }
})

export const { reset} = CategorySlice.actions
export default CategorySlice.reducer