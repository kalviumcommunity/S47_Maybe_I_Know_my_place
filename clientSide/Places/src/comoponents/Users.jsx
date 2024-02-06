import React, { useEffect, useState } from 'react'
import '../comoponents/components.css';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Users = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        async function getApi(){
            try{
                const res = await axios.get('http://localhost:3000')
                console.log(res)
                setUser(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getApi()
    }, [])


    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th><h1> Name </h1></th>
                        <th><h1> Email </h1></th>
                        <th> <h1> Age </h1></th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item) => {
                            return (
                                <tr>
                                    <td><h1> {item.name} </h1></td>,
                                    <td><h1> {item.email} </h1></td>,
                                    <td><h1> {item.age} </h1></td>,
                                    {/* <td>
                                        <Link to={`/update/${item._id}`}> <button>Update</button> </Link>
                                        <button onClick={() => handelDelete(item._id)}> Delete </button>
                                    </td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button className='cont'> <Link to="/display"> Continue </Link> </button>
        </div>
    )
}

export default Users
