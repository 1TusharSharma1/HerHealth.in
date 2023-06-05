import React from 'react'
import Navbar from './Navbar'

export default function DashBoard() {
  return (
   
    <>
    {/* <Navbar/> */}
          <body>
          <div class="dashboard">
          <h1>Personalized Healthcare Dashboard</h1>
      
          <div class="section">
            <h2>Health Summary</h2>
            <div class="card">
              {/* <!-- Include health summary data --> */}
            </div>
            <div class="card">
              {/* <!-- Include health summary data --> */}
            </div>
          </div>
      
          <div class="section">
            <h2>Appointments</h2>
            <div class="card">
              {/* <!-- Include appointments data --> */}
            </div>
            <div class="card">
              {/* <!-- Include appointments data --> */}
            </div>
          </div>
      
          <div class="section">
            <h2>Notifications</h2>
            <div class="card">
              {/* <!-- Include notifications data --> */}
            </div>
            <div class="card">
              {/* <!-- Include notifications data --> */}
            </div>
          </div>
        </div>
        </body>
          </>
      )
 
}
