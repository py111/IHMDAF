import React, { useState, useEffect } from 'react'
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

const axios = require("axios");
const IndicateurFacturation = () => {

    const [facturation, setFacturation] = useState({});

  useEffect(() => {
    const url = "http://devbscs2:9000/fact";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        setFacturation(res.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []); // Empty array of dependency makes it equivalent to componentDidMount

  return (
    <span>
        <CCol lg="10" className="indicateurData"> Dernier JJ : {facturation["dernierJJ"]} </CCol>
        <CCol lg="10" className="indicateurData"> Nombre des clients facturés : {facturation["nbClientsFactures"]} </CCol>
        <CCol lg="10" className="indicateurData"> Montant facturés :  {facturation["sumMontantFactures"]}</CCol>
        <CCol lg="10" className="indicateurData"> Variation M-1 en NB Clients : {facturation["variationNbClients"]} </CCol>
        <CCol lg="10" className="indicateurData"> Variation M-1 en Montant Clients : {facturation["variationMontantClients"]} </CCol>
        <CCol lg="10" className="indicateurData"> Montant Moyen Facturés : {facturation["montantMoyenFactures"]} </CCol>
        <CCol lg="10" className="indicateurData"> Variation du montant moyen facturés en % : {facturation["variationMontantMoyenFactures"]} </CCol>
        <CCol lg="10" className="indicateurData"> Nombre de clients sur JJ 55 : {facturation["nbClientsJJ55"]} </CCol>
    </span>
  )
}

export default IndicateurFacturation
