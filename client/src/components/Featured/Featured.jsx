import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card';
import './Featured.scss'
import axios from 'axios'
import useFetch from '../../hooks/useFetch';

export const Featured = ({type}) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
      );
      console.log(data);

  return (
    <div className='featured'>
        <div className='top'>
            <h1>
                {type} products
            </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt at dolor asperiores odio minima, sapiente voluptates minus odit quasi atque labore quidem iusto exercitationem laboriosam. Qui, at? Quia rerum tempore veniam quas aspernatur quod aut quibusdam ullam iusto suscipit excepturi, iste ab eos, sequi delectus, quis enim iure itaque.
            </p>
        </div>
        <div className="bottom">
            {
                error ?
                "Something went wrong" :
                loading ?
                "loading" :
                data == null ?
                "empty" :
                data.map(item => (
                    <Card item={item} key={item.id}/>
                )) 
                // "default"
            }
        </div>
    </div>
  )
}
