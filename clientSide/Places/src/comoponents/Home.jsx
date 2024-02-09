import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../comoponents/components.css';

const Home = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        console.log(name);

        // Store data in cookie Format
        document.cookie = `name=${name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        document.cookie = `email=${email}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        document.cookie = `age=${age}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

        axios.post("http://localhost:3000/createUser",{name,email,age})
            .then(res => {
                console.log(res.data);
                navigate("/users");
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <p className='Heading'> Maybe I Know My Place </p>

            <div className='area'>
                <img src="https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog-1024x706.jpg" alt="img-1" className='one' />
                <div className='user'>
                    <form onSubmit={submit}>
                        <input type="text" placeholder='Enter your name' required className='inpu' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder='Enter your email' required className='inpu' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="number" placeholder='Enter your age' required className='inpu' value={age} onChange={(e) => setAge(e.target.value)} />
                        <button type='submit' className='submit'> Submit </button>
                    </form>
                </div>
                <img src="https://www.smartertravel.com/wp-content/uploads/2016/05/Jodhpur.jpg" alt="img-1" className='two' />
            </div>
            <div className='area2'>
                <img src="https://i.pinimg.com/originals/a7/3e/ce/a73ece620bdc4f59f204b66035b6e1cc.jpg" alt="" className='four' />
                <img src="https://www.tirthayatra.org/wp-content/uploads/2021/02/Kusum-Sarovar3.jpg" alt="" className='four' />
                <img src="https://www.youngisthan.in/wp-content/uploads/2016/03/patan-603x400.jpg" alt="" className='five' />
            </div>
        </div>
    );
}

export default Home;
