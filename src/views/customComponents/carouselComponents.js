import React, { useState } from 'react'
import {
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow,
  CContainer,
  CImg
} from '@coreui/react'
import IndicateurFacturation from './indicateurFacturation'
import CIcon from '@coreui/icons-react'

const CarouselComponents = (props) => {
  const [activeIndex] = useState(0)
  const {
    applicationIndex
  } = props; 

  return (
    <CCol sm={12}>
    <CRow>
      <CCol sm="12" className="header"> Dans l'application : BSCS {applicationIndex}</CCol>
    </CRow>
    <CRow>
    </CRow>
    <CCarousel activeIndex={activeIndex} dark={true}>
        <CCarouselIndicators/>
        <CCarouselInner>
            <CCarouselItem>
                <CContainer>
                    <CRow>
                        <CCol lg="4" className="indicateurHeader" >
                            <span className="indicateurHeader-text" >  Facturation </span> 
                            {/* <CImg src="avatars/calImg.png" alt="" className="indicateurHeader-img"/> */}
                            <CIcon name="cil-calculator" alt="" className="indicateurHeader-img"/></CCol>                      
                        <CCol md="4" className="indicateurHeader"><span className="indicateurHeader-text"> Paiement </span>
                            <CIcon name="cil-euro" alt="" className="indicateurHeader-img"/></CCol>
                        <CCol sm="4" className="indicateurHeader"><span className="indicateurHeader-text"> CHORUS  </span>
                            <CIcon name="cil-graph" alt="" className="indicateurHeader-img"/></CCol>
                    </CRow>
                    <CRow>
                        <CCol lg="4" className="indicateurBody">
                             <IndicateurFacturation />
                        </CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                    </CRow>
                </CContainer>
            {/* <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption> */}
            </CCarouselItem>
            <CCarouselItem>
                <CContainer>
                    <CRow>
                        <CCol lg="4" className="indicateurHeader"><span className="indicateurHeader-text"> Requisition </span>
                            <CIcon name="cil-lock-locked" alt="" className="indicateurHeader-img"/></CCol>
                        <CCol md="4" className="indicateurHeader"><span className="indicateurHeader-text">  PDR </span>
                            <CIcon name="cil-bell" alt="" className="indicateurHeader-img"/></CCol>
                        <CCol sm="4" className="indicateurHeader"><span className="indicateurHeader-text">  Note Payeur </span>
                            <CIcon name="cil-envelope-open" alt="" className="indicateurHeader-img"/></CCol>
                    </CRow>
                    <CRow>
                        <CCol lg="4" className="indicateurBody"></CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                    </CRow>
                </CContainer>
            {/* <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption> */}
            </CCarouselItem>
        </CCarouselInner>
        <CCarouselControl direction="prev" className="arrow-direction arrow-direction-left"/>
        <CCarouselControl direction="next" className="arrow-direction arrow-direction-right"/>
    </CCarousel>
    </CCol>
  )
}

export default CarouselComponents
