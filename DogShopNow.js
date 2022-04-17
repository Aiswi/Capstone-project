
import React, { useEffect } from 'react';
import "./DogShopNow.css"

function Shopping(props) {

    const [prodarr, setProdarr] = React.useState([])

   
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/sritam007/capstone/e")
            .then(response => response.json())
            .then(data => setProdarr(data))
    }, [] )


   
    let handleclickonbutton = (e) => {
        fetch("http://localhost:3001/cartdata",  {
            method: 'POST',
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(e)
        }
        )
    }
        




    return (
        <div className='sec-3'>

            <div className="heading3">
                ..... Shop Your Best Homie .....
            </div>


            <div className="inContainer-Sec3-div">

            {/* mapping product array. ele data type is object and all data inside {abc:[{},{},{}]} is fetched */}
                {prodarr.map((ele,id) => {
                    return <div className="cards" key={id}>
                        
                        <div className="imgcard-div">
                            <img src={ele.src} className="imgheight-Card" />
                        </div>
                        <div className="textheading-div3">
                            {ele.name}
                        </div>
                        <div className="text-div3">
                            Price : ₹ {ele.price}
                        </div>
                        
                        <div className="add-to-cart-button"  >
                            {/* passing ele object, that contain all json info , 
                             into handleclickonbutton function  that is called up 
                             and POST data in json file */}
                            <button className='button' onClick={()=>{handleclickonbutton(ele)}}>
                                Add to cart 
                            </button>
                            
                        </div>

                    </div>


                }

                )}
            </div>
        </div>

    )
}

export default Shopping