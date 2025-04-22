import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from './reducer'
import { useDispatch } from 'react-redux'

function EditUser() {

    const nav = useNavigate()

    const {id} = useParams()
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>
    {
        fetch(`http://localhost:1111/users/${id}`)
        .then(res=>res.json())
        .then((data)=>{setname(data.name);setemail(data.email)})
    },[])
    const handleEdit = (e) =>
    {
        e.preventDefault()
        dispatch(editUser({id,name,email}))
        nav('/')
    }
  return (
    <div>
       <h2 className='text-center my-2' >Edit User</h2>
      <form onSubmit={handleEdit} className='col-xl-6 m-auto'>
        <div className="form-group">
            
            <label className='d-block my-1'>Name :</label> 
            <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} className=' form-control'/>
        </div>
        <div className='form-group'>
            <label className='d-block my-1'>Email :</label> 
            <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} className=' form-control'/>
        </div>
        <div className='my-2'>
            <input className='btn btn-primary' type="submit" />
        </div>
      </form>
    </div>
  )
}

export default EditUser
