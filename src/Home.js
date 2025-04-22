// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "./reducer";



function Home() {

  const dispatch = useDispatch()
  const nav = useNavigate()
  let [user] = useSelector(state=>state.userDetail)
  const handleDelete = (id)=>
  {
    dispatch(deleteUser({id}))
  }

  const handleEdit = (id) =>
  {
    nav('/edit/'+id)
  }
  return (
    <div>
      <div className="col-1 m-auto">
        <Link className="btn btn-primary my-3" to={"/add"}>
          Add User
        </Link>
      </div>
      <div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {user && user.map((val,i) => {
             return <tr key={val.id}>
                <td>{i+1}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td><button className="btn btn-success mx-2" onClick={()=>{handleEdit(val.id)}}>Edit</button>
                <button className="btn btn-danger" onClick={()=>{handleDelete(val.id)}}>Delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
