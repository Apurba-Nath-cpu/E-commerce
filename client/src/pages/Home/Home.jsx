import React from 'react'
import { Slider } from '../../components/Slider/Slider';
import { Featured } from '../../components/Featured/Featured';
import './Home.scss'
import { Categories } from '../../components/Categories/Categories';
import { Contact } from '../../components/Contact/Contact';
export const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Featured type='Featured'/>
      <Categories/>
      <Featured type='Trending'/>
      <Contact/>
    </div>
  )
}
