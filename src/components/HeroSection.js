import React from 'react';
import '../App.css';
import { ListenButton } from './ListenButton';
import './HeroSection.css';
import { ShopButton } from './ShopButton';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>Erik Burdett</h1>
      <h4 className ="title-margin-top"></h4>
      {/* <h4><i class="fas fa-dharmachakra"></i></h4> */}
        
      
      <h4>Full Stack Web Developer - Copy Writer - Photography - Content Creation </h4>
      <h4 className="title-margin-bottom"></h4>
      <h6>React - Node - Python - SQL - SQLite - Postgress - CSS - HTML - Javascript - Adobe Suite - Wordpress - Strapi - Headless CMSs - Photography & Video - Writing - Copy Writing - Editing - Publishing - Social Media Management </h6>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SHOP
        </Button> */}
        <ListenButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CONTACT 
        </ListenButton>
        <ShopButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SERVICES 
        </ShopButton>
        <ShopButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          RESUME 
        </ShopButton>
        <ShopButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          FOR YOUR EYES 
        </ShopButton>
      </div>
    </div>
  );
}

export default HeroSection;
