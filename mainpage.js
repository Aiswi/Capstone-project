import React from 'react';
import {useEffect, useState} from 'react'
import './mainpage.css'

const Mainpage = () => {
    const [arrVal, setArrVal] = useState([]);

    const [arrProduct, setArrProduct] = useState([]);

    const [clickVal, setClickVal] = useState(false);

    const [reviewVal, setReviewVal] = useState([]);

    const [reviewCount, setReviewCount] = useState(0);

    let revlength = reviewVal.length;

    const nextrev = () => {setReviewCount(reviewCount == revlength - 1 ? 0 : reviewCount + 1)};

    const prevrev = () => {setReviewCount(reviewCount == 0 ? revlength - 1 : reviewCount - 1)};

    let Server = "dogs"

    useEffect(()=>{
        fetch(`http://localhost:3000/${Server}`)
        .then(response=>response.json())
        .then(data=>setArrVal(data))
    }, [])

    const Click = () => {
        setClickVal(!clickVal)
        clickVal ? Server = 'cats' : Server = 'dogs'
        fetch(`http://localhost:3000/${Server}`)
        .then(response=>response.json())
        .then(data=>setArrVal(data))
    }
    
    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(response=>response.json())
        .then(data=>setArrProduct(data))
    }, [])

    
    const onAdd = (product) => {
        fetch('http://localhost:3001/cartdata', {
            method: 'POST',
            headers: {"content-type" : "application/json"}, 
            body: JSON.stringify(product)
        })
    }

    useEffect(() => {
        fetch('http://localhost:3000/reviews')
        .then(response=>response.json())
        .then(data=>setReviewVal(data))
    }, [])

    return(
        <div className='main'>
        
            <div class="aminfo">

                <div class="am_ad_1">
                    <div>Best pet care and services</div>
                    <a>Purchase Now </a>
                </div>

                <div class="aminfo_1">
                    <div>
                        <h2>WELCOME TO <span> PETCARE </span></h2>
                        <p>We are a humble, care and medication organization for animals who are not able to care and protect themselves.<br/>We try our best to preserve and protect these animals and we have been doing so for over 10 years since 2012.<br/>We cannot do it wothout your help, hence, this website, most of the treated animals live comfortably in our shelter homes but they lack a family and feel lonely.</p>
                    </div>
                </div>

                <div class="am_ad_3">
                    <div>In Case Of Emergency Please Contact Us</div>
                    <a href="">Contact Us </a>
                </div>

                <div class="aminfo_2">
                    <div>
                        <h2>Why <span>adopt from us?</span></h2>
                        <p> All dogs are fully vaccinated, dewormed and flea treated.
                            All dogs have undergone a health check before placing.
                            We will determine which dog best suits you and your situation.
                            If necessary you will be guided through the care of your new dog.
                            All dogs have been chipped.</p>
                            <div class="am_ad_2">
                                <div>BEST IN INDUSTRY</div>
                                <div>CUSTOMER SUPPORT</div>
                                <div>EMERGENCY SERVICES</div>
                                <div>VETERINARY HELP</div>
                            </div>
                    </div>
                    <div class="am_img_cat">
                        <img src="https://www.comfortzone.com/-/media/Images/ComfortZone-NA/US/Blog/man-hugging-cat.jpg" width="100%" height="100%"/>
                    </div>
                </div>
                <div class="am_intro">We are best at</div>
                <div class="am_ad_4">
                
                    <div class="vaccine">
                        <img src="https://img.icons8.com/external-filled-outline-wichaiwi/64/000000/external-vaccinated-reopening-country-filled-outline-wichaiwi.png" width="50px" height="50px"/>
                        <div>Pet Vaccination</div>
                    </div>
                    <div class="hour">
                        <img src="https://img.icons8.com/color/48/000000/deliver-food.png" width="50px" height="50px"/>
                        <div>24 hour Delivery</div>
                    </div>
                    <div class="support">
                        <img src="https://img.icons8.com/bubbles/50/000000/online-support.png" width="50px" height="50px" />
                        <div>Pet Support</div>
                    </div>
                </div>
                <div class="aminfo_3">
                    <div>
                        <h2>New to pet parenting? <span>Don't worry, we got you covered!</span></h2>
                        <p>
                            <ul>
                                <li>
                                    The first day in a new house is strange. The animal may have no appetite or a little loose stool due to nervousness. 
                                    Try calming down your loved ones with some calm talk and affection.
                                    If the animal is clearly in distress, do not hesitate and go to the vet in consultation with the LOES Foundation.
                                </li>
                                <li>
                                    When you come home with your new family member, make sure the litter box is ready with a valerian drop in it. Allow the pet to explore the new environment. 
                                </li>
                                <li>
                                    Make sure you and the pet have time to get used to each other. Always have a scratching post and/or scratching board available so that your furniture is not destroyed. 
                                </li>
                                <li>
                                    If you have other pets, make sure they ate before introducing the new housemate. Provide their own food bowls and if possible a separate litter box during the first period. 
                                </li>
                                <li>
                                    Do not let the animal out until it is used to you and the new environment, this can take up to 4-6 weeks. Go out with the animal the first few times and use a cat leash if necessary.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div class="am_img_cat_2">
                        <img src="https://static.india.com/wp-content/uploads/2015/10/538.jpg?impolicy=Medium_Resize&w=1200&h=800" width="350" height="180"/>
                    </div>
                </div>
            </div>

            <div className="am_review">

                <div className="am_r_text">Reviews</div>

                <div className="am_review_div">

                    <div className="am_review_div_1">

                        <button id="b_up" onClick={nextrev}>UP</button>

                        {reviewVal.map((rev, index) => {
                            return(
                                <div key={rev.id} className='review'>
                                    {index == reviewCount && (
                                        <>
                                            <h4>{rev.name}</h4>
                                            <p><i>{rev.para}</i></p>
                                            <img src={rev.src} width="300" height="200"/>
                                        </>
                                    )}
                                </div> 
                            )
                        })}

                        <button id="b_down" onClick={prevrev}>DOWN</button>

                    </div>

                    <form className="reviewForm">
                        <label for="name" id="labname">Name</label>
                        <input type="text" id="name"/>
                        <label for="email" id="labemail">E-Mail</label>
                        <input type="text" id="email"/>
                        <label for="imageUrl" id="labimg">Image</label>
                        <input type="text" id="imageUrl"/>
                        <label for="review" id="labrev">Review</label>
                        <input type="text" id="review"/>
                        <button>Submit</button>
                    </form>

                </div>
            </div>

            <div className="am_fp_in">Featured Pets</div>

            <div className='featured'>
                <button onClick={Click} className='featured_button'><i className='bi-arrow-left'/></button>            
                {arrVal.map((display) => 
                    {
                        return(   
                            <div key={display.id} className={display.class}>
                                <img src={display.src} width="250" height="200"/>
                                <p>{display.para}</p>
                            </div>
                            )
                    }
                )}
                <button onClick={Click} className='featured_button'><i className='bi-arrow-right'/></button>
            </div>

            <div className='am_bb_1'>
                {arrProduct.map((show) => 
                    {
                        return(
                            <div key={show.id}>
                                <img src={show.src} width='250' height='200'/>
                                <p>{show.name}</p>
                                <button className='prod_but' onClick={() => {onAdd(show)}}>Add to cart</button>
                            </div>
                        )
                    }
                )}
            </div>

        </div>
    );
}
export {Mainpage}