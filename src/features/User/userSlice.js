
import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
// import { getSavedPost } from '../favoritePost.js/favoritePostSlice';
import axios from 'axios'

export const login = createAsyncThunk('user/login',
async(userData,thunkAPI)=>{
 const {data} = await axios({method:'post',url:'http://localhost/realestate/login.php',data:userData});
 const resp = data;
 thunkAPI.dispatch(getSavedPost(data.userid))
 return resp;
})

export const modify = createAsyncThunk('user/modify',
async(userData)=>{
  const {data} = await axios({method:'post',url:'http://localhost/realestate/myprofile.php',data:userData});
  const resp = data;
  return resp;
})

export const signup = createAsyncThunk('user/signup',
async(userData,thunkAPI)=>{
  const {data} = await axios({method:'post',url:'http://localhost/realestate/signup.php',data:userData});
  const resp = data;
  return resp;
})

export const getUserListing= createAsyncThunk('user/getUserListing',
async(id)=>{
 return axios({method:'get',url:'http://localhost/realestate/mylisting.php?id='+id,data:id})
  .then(response=>response.data).catch(error=>console.log(error));
})

export const getSavedPost= createAsyncThunk('user/getSavedPost',
async(id)=>{
 return axios({method:'get',url:'http://localhost/realestate/savedposts.php?id='+id,data:id}).then(response=>response.data).catch(error=>console.log(error));
})
export const UpdateSavedPost= createAsyncThunk('user/UpdateSavedPost',

async(userid,propertyid)=>{
 
 return axios({method:'post',url:'http://localhost/realestate/savedposts.php',data:{userid,propertyid}}).then(response=>response.data).catch(error=>console.log(error));
})
export const RemoveSavedPost= createAsyncThunk('user/RemoveSavedPost',
async(userid,propertyid)=>{
 return axios({method:'post',url:'http://localhost/realestate/savedposts.php',data:userid,propertyid}).then(response=>response.data).catch(error=>console.log(error));
})
const userSlice = createSlice({
    name:'user',
    initialState :{
     user:null,
     isSuccess:false,
  myListings:{
    isLoading:true,
    data:null
  },
    modifiedListing:{},
    savedPosts:{
      isLoading:true,
      data:null,
    }
    },
    
    reducers:{
      logout:(state)=>{
      state.user=null;
      state.isSuccess = false; 
      state.myListings = null;
      state.modifiedListing = null;
      state.savedPosts.data = null;
      },
    SelectedListing:(state,action)=>{
      console.log('selected listing changed to '+ action.payload.selectedProp);
    state.myListings.map((prop)=>{
      if(prop.propertyid == action.payload.selectedProp){
       state.modifiedListing =prop;
      }
    }             )
    }

      },
    extraReducers:(builder)=>{
      builder  
      .addCase(login.fulfilled,(state,{payload})=>{    
        state.user = payload;
        state.isSuccess = true;    
      })
      .addCase(login.rejected,(state)=>{
        state.isError = "true";
        state.isSuccess = 'false';
        state.user = null;
      })
      .addCase(signup.fulfilled,(state,{payload})=>{
        state.user=payload;
        state.isSuccess=true;
      })
      .addCase(signup.rejected,(state)=>{
        state.isSuccess='false';
        state.user = null;
      })
      .addCase(modify.fulfilled,(state,{payload})=>{
        state.user=payload;
        state.isSuccess=true;
      })
      .addCase(modify.rejected,(state)=>{
        state.isSuccess='false';
        state.user = null;
      })

      .addCase(getUserListing.pending,(state)=>{
        state.myListings.isLoading=true;
      
      })
      .addCase(getUserListing.fulfilled,(state,{payload})=>{
        state.myListings.isLoading=false;
        state.myListings.data = payload
      })
      .addCase(getSavedPost.pending,(state)=>{
        state.savedPosts.isLoading = true;
    })
    .addCase(getSavedPost.fulfilled,(state,{payload})=>{
state.savedPosts.data = payload;
state.savedPosts.isLoading = false;
    })
    .addCase(UpdateSavedPost.pending,(state)=>{
        state.savedPosts.isLoading = true;
    })
    .addCase(UpdateSavedPost.fulfilled,(state,{payload})=>{
        state.savedPosts.data = payload;
        state.savedPosts.isLoading = false
                })
                .addCase(RemoveSavedPost.pending,(state)=>{
                    state.savedPosts.isLoading = true;
                })
                .addCase(RemoveSavedPost.fulfilled,(state,{payload})=>{
                    state.savedPosts.data = payload;
                    state.savedPosts.isLoading = false
                            })
    }

    }
)

export default  userSlice.reducer;
export const {logout,modifyListing,SelectedListing} = userSlice.actions;
