import React from 'react'
import toys from './images/dogToys.jpg';
import grooming from './images/dogBrooming.png';
import eat from './images/catEating.jpg';
import './PetProducts.css';



export function Extradiv() {
    return (
      <div className="extra-div1">

      </div>
    )
  }



function Products() {

    let arr = [{ id: 101, work: toys, itname: "TOYS" },
    { id: 102, work: grooming, itname: "GROOMING" },
    { id: 103, work: eat, itname: "FOOD" }]


    return (
        <div className='inBody2'>
            <div className="heading heading2">
                Pet Products
            </div>

            <div className="inContainer-div">
                {arr.map((obj) => {
                    return <div className="indetails" key={obj.id}>
                        <a href={"#" + obj.id}>
                            <div className="animalproductpic">
                                <img src={obj.work} className="circleImgheight" />
                            </div>
                            <h4>{obj.itname}</h4>
                        </a>
                    </div>
                }
                )
                }
            </div>
        </div>
    )
}

export default Products





