import './Breed.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DogApp from './DogApp';
import  DogBreeds  from './DogBreeds';



function Breeds() {
  return (
    <div className="App">
     
     <BrowserRouter>

      <Routes>
        <Route exact path='/dogbreed/details' element={<DogApp/>}/>
      </Routes>  

      </BrowserRouter>
      
      


    </div>
  );
}

export default Breeds;
