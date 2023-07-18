import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import { Cart } from "../Cart/Cart"
import "./Navbar.scss"
import { useSelector } from 'react-redux';

export const Navbar = () => {

  const [open, setOpen] = useState(false)
  const products = useSelector(state => state.cart.products);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>

          <div className='item'>
            <img src="/img/en.png" alt="english" />
            <KeyboardArrowDownIcon/>
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>

          <div className="item">
            <Link className='link' to="products/1">Women</Link>
          </div>

          <div className="item">
            <Link className='link' to="products/2">Men</Link>
          </div>

          <div className="item">
            <Link className='link' to="products/3">Children</Link>
          </div>
        </div>

        <div className='centre'>
          <div className="item">
            <Link className='link' to="/">DARKSTORE</Link>
          </div>
        </div>

        <div className='right'>
          <div className="item">
            <Link className='link' to="/">HomePage</Link>
          </div>

          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>

          <div className="item">
            <Link className='link' to="/">Contact</Link>
          </div>
          
          <div className="item">
            <Link className='link' to="/">Stores</Link>
          </div>

          <div className="icons">
            <SearchIcon/>
            <PersonIcon/>
            <FavoriteIcon/>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar;