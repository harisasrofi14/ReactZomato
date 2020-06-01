import React from 'react';
import Navbar from './components/Navbar'
import ImageBanner from './components/ImageBanner'
import FeaturedCities from './components/FeaturedCities'

function App() {

  const citiesDummy = [
    { id: 72, name: "Jakarta", country_name: "Indonesia" },
    { id: 110052, name: "Bandung", country_name: "Indonesia" },
    { id: 170, name: "Bali", country_name: "Indonesia" }
  ];


  return (
    <>
      <Navbar/>
      <ImageBanner/>
        <div className="conatiner" style={{ marginTop: 30, marginBottom:30 }}>
         <FeaturedCities citiesDummy = {citiesDummy} />
        </div>
    </>
  );
}

export default App;
