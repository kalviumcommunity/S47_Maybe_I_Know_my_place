import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Update = () => {

  const { id } = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:9000/getUser/${id}`)
      .then(result => {
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch(err => console.log(err))
  }, [])

  const update = (e) => {
    e.preventDefault()
    axios.put("http://localhost:9000/updateUser/" + id, { name, email, age })
      .then(res => {
        console.log(res)
        navigate('/users')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={update}>
        <h2> Update user </h2>
        <div>
          name:
          <input type="text" required onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div>
          Email:
          <input type="email" required onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          Age:
          <input type="number" required onChange={(e) => setAge(e.target.value)} value={age} />
        </div>
        <button> Submit  </button>

      </form>
    </div>
  )
}

export default Update
