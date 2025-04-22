import { createSlice } from "@reduxjs/toolkit";




const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        userData:(state,action)=>
        {
            state.push(action.payload)
        },
        add:(state,action)=>
        {
            fetch('http://localhost:1111/users',
                {
                    method:"post",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(action.payload)
                }
            )
            .then((res)=>
                {
                    if(res)
                    {
                        window.location.reload()
                    }
                })
        },
        deleteUser:(state,action)=>
        {   
            fetch(`http://localhost:1111/users/${action.payload.id}`,
                {
                    method:"delete"
                }
            ) 
            .then((res)=>
                {
                    if(res)
                    {
                        window.location.reload()
                    }
                })
        },
        editUser:(state,action)=>
        {
            fetch(`http://localhost:1111/users/${action.payload.id}`,
                {
                    method:"put",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(action.payload)
                }
            )
            .then((res)=>
                {
                    if(res)
                    {
                        window.location.reload()
                    }
                })
        }
    }
})

export default userSlice.reducer
export const {userData,add,deleteUser,editUser} = userSlice.actions;