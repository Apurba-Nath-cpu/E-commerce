import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom'
import { List } from '../../components/List/List'
import useFetch from '../../hooks/useFetch'
import './Products.scss'
export const Products = () => {
  
  const catId = parseInt(useParams().id)
  const [tempMax, setTempMax] = useState(1000)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState('asc')
  const [selectedSubCats, setSelectedSubCats] = useState([]) 
  console.log(catId + ' id2') 

  const {data, loading, error} = useFetch(`/sub-categories?populate=*&[filters][categories][id][$eq]=${catId}`)
  console.log(catId + ' id3')
  console.log(data)
  console.log('data')

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value))
  }

  return (
    <div className='products'>
      <div className="left">

        <div className="filterItem">

          <h2>Product Categories</h2>

            {data?.map((item) => (<div className="inputItem" key={item.id}>
              <input type="checkbox" id="1" value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}

        </div>

        <div className="filterItem">

          <h2>Filter by Price</h2>

          <div className="inputItem">
            <span>$0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setTempMax(e.target.value)}/>
            <span>${tempMax}</span><br></br>
          <button style={{backgroundColor: maxPrice !== tempMax ? "#0000ff" : "#010d8f"}} id='price-button' onClick={()=>setMaxPrice(tempMax)}>Apply</button>
          </div>

        </div>
        <div className="filterItem">

          <h2>Sort by</h2>

          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>

          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price' onChange={e=>setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>

        </div>
      </div>

      <div className="right">
        <img
          className='catImg' 
          src="https://images.pexels.com/photos/14840263/pexels-photo-14840263.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="right-top" 
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}
