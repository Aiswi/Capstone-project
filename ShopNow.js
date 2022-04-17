
import React, { useEffect } from 'react';
import "./ShopNow.css"

function Shopping(props) {

    const [prodarr, setProdarr] = React.useState([])

    //Fetching data from json
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Aiswi/newProducts/products")
            .then(response => response.json())
            .then(data => setProdarr(data))
    }, [] )


    //data POST in json file
    let handleclickonbutton = (e) => {     
        fetch("http://localhost:3001/cartdata",  {
            method: 'POST',
            body: JSON.stringify(e),
            headers: {"content-type" : "application/json"}
        }
        )
    }
        




    return (
        <div className='sec-3'>

            <div className="heading3">
                ..... Shop Now .....
            </div>


            <div className="inContainer-Sec3-div">

            {/* mapping product array. ele data type is object and all data inside {abc:[{},{},{}]} is fetched */}
                {prodarr.map((ele,i) => {
                    return <div className="cards" key={i}>
                        
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
                             and POST data in json file &
                             changing button color on add-to-cart*/}
                            <button className='button' style={{backgroundColor:'yellow'}} onClick={(e)=>{
                            handleclickonbutton(ele)
                            e.target.style.backgroundColor = "orange" 
                            e.target.innerHTML = "Added"
                            }} >
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