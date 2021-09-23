  import React, { lazy, useState } from 'react'
  import {
    CCol,
    CRow,
    CDropdown,
    CDropdownItem,
    CDropdownToggle,
    CDropdownMenu
  } from '@coreui/react'
  import CarouselComponents from '../customComponents/carouselComponents'
  import CIcon from '@coreui/icons-react'

  // const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
  // const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

  const Dashboard = () => {
    // const [activeIndex, setActiveIndex] = useState(0)
    // const [activeApplication, setActiveApplication] = useState(0)
    return (
      <>    
    <CDropdown className="m-1">
      <CDropdownToggle className="application-dropdown"> Applications </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem>R1</CDropdownItem>
          <CDropdownItem>R17</CDropdownItem>
        </CDropdownMenu>
    </CDropdown>      
    <CarouselComponents/>
      </>
    )
  }

  export default Dashboard
