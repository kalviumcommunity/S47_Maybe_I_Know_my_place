import React from 'react'
import data from '../places.json'
import '../comoponents/components.css'
import tm from '../assets/tajMahal.jpg'
const Display = (props) => {
    return (
        <div>
            {/* {
                data.map((item) => {
                    return(
                        <div key={item.id}>
                            <h1>Place Name: {item.Topic} </h1>
                            <p className='state'> <b> State: </b> {item.State}</p>
                            <p> <b> City: </b> {item.City}</p>
                            <b> <p>Build on: {item.Year_of_build}</p> </b>
                            <p> <b> Description: </b> {item.Description} </p>
                            <img src={item.image} alt="" />
                            <hr />
                        </div>
                    )
                })
            } */}
            <h1>Place Name: {props.Topic} </h1>
            <p className='state'> <b> State: </b> {props.State}</p>
            <p> <b> City: </b> {props.City}</p>
            <b> <p>Build on: {props.Year_of_build}</p> </b>
            <p> <b> Description: </b> {props.Description} </p>
            <img src={tm} alt="" />
        </div>
    )
}

export default Display