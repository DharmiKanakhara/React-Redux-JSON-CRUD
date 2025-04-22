import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add } from './reducer'

function AddUser() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const nav = useNavigate()
    const dispatch = useDispatch()

    const handleAdd = (e) =>
    {     
        e.preventDefault()
        dispatch(add({name,email}))
        nav('/')
    }

  return (
    <div>
      <h2 className='text-center my-2' >Add User</h2>
      <form onSubmit={handleAdd} className='col-xl-6 m-auto'>
        <div className="form-group">
            
            <label className='d-block my-1'>Name :</label> 
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className=' form-control'/>
        </div>
        <div className='form-group'>
            <label className='d-block my-1'>Email :</label> 
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className=' form-control'/>
        </div>
        <div className='my-2'>
            <input className='btn btn-primary' type="submit" />
        </div>
      </form>
    </div>
  )
}

export default AddUser
