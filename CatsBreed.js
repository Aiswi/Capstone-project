import React, { useEffect } from 'react';
import "./breeds.css";
import Footer from './Footer';
import Products, { Extradiv } from './PetProducts';
import Shopping from './ShopNow';
import Carousel from './carousel.js';


function CatsBreed() {

    return (
        <div>
            {/* <Carousel /> */}

            <div className='breed'>
                <div className='heading'>
                    Cat Breeds
                </div>
                <CatDetails />
            </div>

            <Extradiv />
            <Products />
            <Shopping />
            <Footer />
        </div>
    )
}

export default CatsBreed






function CatDetails() {
    const [catarr, setatarr] = React.useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Aiswi/CatBreeds/data")
            .then(response => response.json())
            .then(data => setatarr(data))
    }, [])



    return (
        <div className='containerPic'>
            {catarr.map((obj, id) => {
                return <div className='details' key={id}>
                    <div className='image-div' >
                        <img src={obj.imgurl} className="imgheight" />
                    </div>


                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <button className="accordion-button  collapsed   text-div1   buttonAccord" type="button" data-bs-toggle="collapse" data-bs-target={"#a" + id} aria-expanded="false" aria-controls="flush-collapseOne"  >
                                {obj.dname}
                            </button>

                            <div id={"a" + id} className="accordion-collapse collapse accordtext" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

                                <table>
                                    <tbody>
                                        <tr><td> {obj.ava} </td></tr>
                                        <tr><td>Age : {obj.age} yrs</td></tr>
                                    </tbody>
                                </table>

                                <a href='/dogbreed/details'>
                                    <button className='morebutton'>
                                        More
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>
            })}

        </div>
    );
}




