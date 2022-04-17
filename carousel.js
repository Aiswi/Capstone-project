import React from 'react'
import "./carousel.css"

function Carousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"  aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

                </div>
                <div className="carousel-inner changeHeight">
                    
                    <div className="carousel-item active  outdiv">
                        <h4>Welcome all Pet Lovers!!!</h4>
                        <p>Journey of life is BETTER when travelled with a FRIEND</p>
                        <img src="https://c4.wallpaperflare.com/wallpaper/772/373/311/dog-animals-photography-wallpaper-preview.jpg" className="d-block    changeHeightimg" />
                    </div>

                    <div className="carousel-item    outdiv">
                        <h4>Health is Wealth </h4>
                        <p>Keeping Your Pet at a Healthy Weight by providing Proper Nutrition</p>
                        <img src=" https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/dog-food-1296x728-header.jpg?w=1155&h=1528" className="d-block    changeHeightimg" />
                       
                    </div>

                    <div className="carousel-item   outdiv">
                        <h4>PetCare</h4>
                        <p>Learn to communicate with your pet</p>
                        <img src="https://cdn.mos.cms.futurecdn.net/MCcryMt5RQtLBv2v44J68N-1200-80.jpg" className="d-block   changeHeightimg" />
                       

                         
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
            </div>
        </div>
    )
}

export default Carousel