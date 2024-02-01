import React from 'react'
import '../comoponents/components.css'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <p className='Heading'> Maybe I Know My Place </p>

            <div className='area'>
                <img src="https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog-1024x706.jpg" alt="img-1" className='one' />
                <div className='user'>
                    <input type="text" placeholder='Enter your name' required className='inpu' />
                    <Link to='/display'> <button className='submit'> Submit </button> </Link>
                </div>
                <img src="https://www.smartertravel.com/wp-content/uploads/2016/05/Jodhpur.jpg" alt="img-1" className='two' />
            </div>
            <div className='area2'>
                <img src="https://i.pinimg.com/originals/a7/3e/ce/a73ece620bdc4f59f204b66035b6e1cc.jpg" alt=""  className='four'/>
                <img src="https://www.tirthayatra.org/wp-content/uploads/2021/02/Kusum-Sarovar3.jpg" alt=""  className='four'/>
                <img src="https://www.youngisthan.in/wp-content/uploads/2016/03/patan-603x400.jpg" alt=""  className='five'/>
            </div>
        </div>
    )
}

export default Home
