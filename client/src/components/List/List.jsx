import React from 'react'
import './List.scss'
import { Card } from '../Card/Card'
import useFetch from '../../hooks/useFetch'
export const List = (catId, maxPrice, sort, subCats) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId.catId}${catId.subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${catId.maxPrice}&sort=price:${catId.sort}`
      );
      console.log(data);
      console.log('data-list')
      console.log(catId)
      console.log('id')
    //   console.log(loading);

    // const data = [

    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?auto=compress&cs=tinysrgb&w=400",
    //         img2: "https://images.pexels.com/photos/13678349/pexels-photo-13678349.jpeg?auto=compress&cs=tinysrgb&w=600",
    //         title: "T-shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         title: "Jeans",
    //         isNew: true,
    //         oldPrice: 22,
    //         price: 15,
    //     },
    //     {
    //         id: 3,
    //         img: "https://images.pexels.com/photos/8074103/pexels-photo-8074103.jpeg?auto=compress&cs=tinysrgb&w=400",
    //         title: "Hat",
    //         isNew: false,
    //         oldPrice: 14,
    //         price: 8,
    //     },
    //     {
    //         id: 4,
    //         img: "https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg?auto=compress&cs=tinysrgb&w=400",
    //         title: "Jacket",
    //         isNew: true,
    //         oldPrice: 30,
    //         price: 21,
    //     },
        
    // ];

  return (
    <div className='list'>
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
  )
}
