import React from 'react';
import '../App.css';
import { PrintsButton } from './PrintsButton';
import './HeroSection.css';
import { MerchButton } from './MerchButton';

function ProductsHeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>For Your Eyes:</h1>
      <div className='hero-btns'>
        <PrintsButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
         <i class="fas fa-dharmachakra"/> PRINTS <i class="fas fa-dharmachakra"/>
        </PrintsButton>
        <MerchButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         <i class="fas fa-dharmachakra"/> MERCH <i class="fas fa-dharmachakra"/>
        </MerchButton>
        <MerchButton
        //CHANGE THIS TO A INSTAGRAM SPECIFIC BUTTON
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         <i class="fas fa-dharmachakra"/> INSTA <i class="fas fa-dharmachakra"/>
        </MerchButton>
      </div>
    </div>
  );
}

export default ProductsHeroSection;