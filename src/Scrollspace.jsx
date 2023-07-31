import React from 'react'
import './Scrollspace.css'
import {scrollitems} from './scrollitems'
import {item} from './item'
const Scrollspace = () => {
  return (
    <div className="scrollspace">
      <div className="wrapper">
      {
        scrollitems.map((item)=>(<div className='scroll'>
          <div className="wrap">
              <div className="p1">
              <div>{item.p1}</div>
              <div>{item.p2}</div>
              </div>
              <div className="parentp2">
              <div className="p2"><p>{item.p3}</p></div>
              <div className="underline"><span></span></div>
              </div>
          
          </div>
          <img className='image' src={item.img} alt="" />
          </div>
        ))
      }
      </div>
      <div className="wrapper2">
        {
          item.map((item)=>(
            <div className='fs'>
                  <div className="wrap2">
                    <div className='p1'>{item.text}</div>
                    <div className="wrap5">
                      <div className='p3'>{item.p1}</div>
                      {item.p2 && <div className='p3'>{item.p2}</div> }
                    </div>
                  </div>
              <div className="lty">
                <img className = "fsimg" src={item.img} alt="" />
              </div>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default Scrollspace
