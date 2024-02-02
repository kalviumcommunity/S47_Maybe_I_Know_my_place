import React from 'react';
import '../comoponents/components.css';
import { useState, useEffect } from 'react';
import axios from 'axios'


const Display = () => {

    const [Myuser, setUser] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/display')
            .then(users => {
                setUser(users.data);
                console.log(users)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {Myuser.map((item) => (
                <div key={item.id}>
                    <div className='container'>
                        <div>
                            <h1>Place Name: {item.Topic}</h1>
                            <p className='state'>
                                <b>State:</b> {item.State}
                            </p>
                            <p>
                                <b>City:</b> {item.City}
                            </p>
                            <b>
                                <p>Build on: {item.Year_of_build}</p>
                            </b>
                            <p>
                                <b>Description:</b> {item.Description}
                            </p>
                        </div>
                        <div>
                            <img src={item.img} alt='' className='aii' />
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Display;
