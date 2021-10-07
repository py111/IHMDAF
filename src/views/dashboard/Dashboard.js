  import React, { useState } from 'react'
  import {
    CDropdown,
    CDropdownItem,
    CDropdownToggle,
    CDropdownMenu,
  } from '@coreui/react'
  import CarouselComponents from '../customComponents/carouselComponents'
  import Toaster from '../notifications/toaster/Toaster'

  const Dashboard = () => {
    const [applicationIndex, setApplicationIndex] = useState("R1")
    return (
    <>
    <Toaster/>
    <CDropdown className="m-1">
      <CDropdownToggle className="application-dropdown"> Applications </CDropdownToggle>
        <CDropdownMenu placement="bottom" >
          <CDropdownItem onClick={() => setApplicationIndex("R1")}>R1</CDropdownItem>
          <CDropdownItem onClick={() => setApplicationIndex("R17")}>R17</CDropdownItem>
        </CDropdownMenu>
    </CDropdown>      
    <CarouselComponents applicationIndex={applicationIndex}/>
    </>
    )
  }

  export default Dashboard
