import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>More Information</h3>
            <h1>About The Breed Labrador</h1>
            <p>
            Labrador Retrievers (often shortened to 'Labradors' or 'Labs') are a short-medium coated, large sized dog breed. 
            They are outgoing, active and affectionate companions who have a lot of energy and love making their owner happy. 
            They have strong retrieving instincts as they were bred to be gun dogs, so they love both soft toys and diving into bodies of water.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="https://c4.wallpaperflare.com/wallpaper/575/731/767/best-friends-bulldog-cute-dog-photos-dog-images-wallpaper-preview.jpg" alt="dog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
