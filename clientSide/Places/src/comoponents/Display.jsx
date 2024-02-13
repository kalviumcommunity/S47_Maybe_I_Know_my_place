import React, { useState, useEffect } from 'react';
import '../comoponents/components.css';
import axios from 'axios';

const Display = () => {
    const [Myuser, setUser] = useState([]);
    const [state, setState] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/display')
            .then(users => {
                setUser(users.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSelectChange = (e) => {
        setState(e.target.value);
    };

    // Filter Myuser based on the selected state
    const filteredData = state === 'All' ? Myuser : Myuser.filter(item => item.State === state);

    return (
        <div>
            <p>Choose your State</p>
            <select onChange={handleSelectChange}>
                <option value="All">All</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Gujarat">Gujarat</option>
            </select>
            {filteredData.map((item) => (
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
