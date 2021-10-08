import React, { useState } from 'react'
import {
  CCarousel,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow,
  CContainer
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import IndicateurFacturation from './Facturation/indicateurFacturation'

const CarouselComponents = (props) => {
  const [activeIndex] = useState(0)
  const {
    applicationIndex
  } = props; 

  return (
    <CCol sm={12}>
    <CRow>
    </CRow>
    <CCarousel activeIndex={activeIndex} className="carousel">
        <CCarouselIndicators/>
        <CCarouselInner>
            <CCarouselItem>
                <CContainer>
                    <CRow>
                        <CCol lg="4" className="indicateurHeader" >
                            <span className="indicateurHeader-text" >FACTURATION</span> 
                            <CIcon name="cil-calculator" alt="" className="indicateurHeader-img"/></CCol>                   
                        <CCol md="4" className="indicateurHeader">
                            <span className="indicateurHeader-text"> PAIEMENT </span>
                            <CIcon name="cil-euro" alt="" className="indicateurHeader-img"/></CCol>
                        <CCol sm="4" className="indicateurHeader"><span className="indicateurHeader-text"> CHORUS  </span>
                            <CIcon name="cil-graph" alt="" className="indicateurHeader-img"/></CCol>
                    </CRow>
                    <CRow>
                        <CCol lg="4" className="indicateurBody">
                             <IndicateurFacturation applicationIndex={applicationIndex} />
                        </CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                    </CRow>
                </CContainer>
            </CCarouselItem>
            <CCarouselItem>
                <CContainer>
                    <CRow>
                        <CCol lg="4" className="indicateurHeader">
                            <span className="indicateurHeader-text"> REQUISITION </span>
                            <CIcon name="cil-lock-locked" alt="" className="indicateurHeader-img"/></CCol>
                        <CCol md="4" className="indicateurHeader">
                            <span className="indicateurHeader-text">  PDR </span>
                            <CIcon name="cil-bell" alt="" className="indicateurHeader-img"/></CCol>
                        <CCol sm="4" className="indicateurHeader">
                            <span className="indicateurHeader-text"> NOTE PAYEUR </span>
                            <CIcon name="cil-envelope-open" alt="" className="indicateurHeader-img"/></CCol>
                    </CRow>
                    <CRow>
                        <CCol lg="4" className="indicateurBody"></CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                    </CRow>
                </CContainer>
            </CCarouselItem>
        </CCarouselInner>
        <CCarouselControl direction="prev" className="arrow-direction arrow-direction-left"/>
        <CCarouselControl direction="next" className="arrow-direction arrow-direction-right"/>
    </CCarousel>
    </CCol>
  )
}
export default CarouselComponents
