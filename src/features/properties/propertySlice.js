
import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProperties = createAsyncThunk(
    'property/fetchProperties',
    async() =>{
        const {data}= await axios.get('http://localhost/realestate/buysell.php')
          return data;
    }
)
const propertySlice = createSlice({
    name:'property',
    initialState :{
        loading:null,
        data:[],
    },
    reducers:{  },
    extraReducers:{
        [fetchProperties.pending](state){
state.loading = 'pending'
        },
        [fetchProperties.fulfilled](state,{payload}){
            state.loading = 'fulfilled';
            state.data =payload
                    },
        [fetchProperties.rejected](state){
        state.loading = 'rejected';
                        
                                },
    }


})

export default propertySlice.reducer