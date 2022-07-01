import React from 'react'
import Read from '../../CRUD/Read';

const Overview = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-3 text-black'>
              </div>
              <div className='col-lg-6 text-black'>
                  <h1>Overview</h1>
                  <Read/>
              </div>
            </div>
        </div>
    </>
  )
}

export default Overview;