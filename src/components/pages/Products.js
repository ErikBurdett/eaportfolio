import React from 'react';
import '../../App.css';
import ProductsCards from '../ProductsCards';
import Footer from '../Footer';
import ProductsHeroSection from '../ProductsHeroSection';

// This is going to be the Projects page with a projects card compnent that will home a photo and a a brief description. May also be displayed on the Home Page where Albums are currently displayed. 
export default function Products() {
  return(<>
    <ProductsHeroSection></ProductsHeroSection>
    {/* <ProductsCards></ProductsCards> */}
    <Footer></Footer>
    {/* a */}
  
  </>
  );
}
