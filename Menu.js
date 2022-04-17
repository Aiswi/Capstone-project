import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="https://www.purina.com.au/-/media/project/purina/main/breeds/puppies/puppy-chocolate-labrador.jpg" alt="Dog" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Some Traits Of</h3>
            <h1>Labrador</h1>
            <p>
            Origin: Newfoundland
            Life expectancy: 10 – 12 years
            Scientific name: Canis lupus familiaris
            Height: Male: 57–62 cm, Female: 55–60 cm
            Colors: Black, Chocolate, Yellow
            Weight: Male: 29–36 kg, Female: 25–32 kg
            Temperament: Outgoing, Even Tempered, Intelligent, Kind, Agile, Trusting, Gentle
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
