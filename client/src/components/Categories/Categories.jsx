import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

export const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
              <img 
                src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="women" 
              />
              <button>
                <Link className='link' to='/products/1'>Women</Link>
              </button>
            </div>
            <div className="row">
              <img 
                src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="New Season" 
              />
              <button>
                <Link className='link' to='/products/1'>New Season</Link>
              </button>
            </div>
        </div>
        <div className="col">
          <div className="row">
            <img 
              src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Sale" 
            />
            <button>
              <Link className='link' to='/products/1'>Sale</Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                      <img 
                        src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="men" 
                      />
                      <button>
                        <Link className='link' to='/products/1'>Men</Link>
                      </button>
                    </div>
                </div>
                <div className="col">
                  <div className="row">
                    <img 
                      src="https://images.pexels.com/photos/5321681/pexels-photo-5321681.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="accessories" 
                    />
                    <button>
                      <Link className='link' to='/products/1'>Accessories</Link>
                    </button>
                  </div>
                </div>
            </div>
            <div className="row">
              <img 
                src="https://images.pexels.com/photos/1092877/pexels-photo-1092877.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="shoes" 
              />
              <button>
                <Link className='link' to='/products/1'>Shoes</Link>
              </button>
            </div>
        </div>
    </div>
  )
}
