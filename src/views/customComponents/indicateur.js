import React, { useState, useEffect, Fragment } from 'react'
import {
  CCol, CRow
} from '@coreui/react';
import moment from 'moment';
const axios = require("axios");


const Indicateur = (props) => {

  const { startDescription, endDescription, url, flag } = props; 
  const [facturation, setFacturation] = useState({});
  const [badgeColor, setBadgeColor] = useState({});
  var formats = ["YYYY-MM-DD LT","YYYY-MM-DD h:mm:ss A","YYYY-MM-DD HH:mm:ss","YYYY-MM-DD HH:mm", "YYYY-MM-DD HH:mm:ss.S"];

  // const facturation = {
  //   dernierJJ: 69,
  //   nbClientsFactures: 145,
  //   sumMontantFactures: 25,
  //   variationNbClients: 400,
  //   variationMontantClients: -63,
  //   montantMoyenFactures: 21,
  //   variationMontantMoyenFactures: -257,
  //   nbClientsJJ55: 32,
  //   dateRafraichissement: "2021-02-02 00.00.00.0"
  //  };
    
  useEffect(() => {
    if(facturation && Object.keys(facturation).length === 0){
        axios.get(url)
    .then((res) => {
      setFacturation(res.data);
    })
    .catch((error) => {
      console.error("Error", error);  
    });
  }
    Object.keys(facturation).forEach((key, index) => {
      if(flag[key] === "info") {
        badgeColor[key] = 'badgeColor-Info';
        setBadgeColor({ ...badgeColor });
      }
      else if(flag[key] === "date") {
        badgeColor[key] = 'badgeColor-Info';
        setBadgeColor({ ...badgeColor });
      }
      else if(facturation[key] > 0 ) {
        badgeColor[key] = 'badgeColor-OK';
        setBadgeColor({ ...badgeColor });
      }
      else if(facturation[key] < 0 ) {
        badgeColor[key] = 'badgeColor-Error';
        setBadgeColor({ ...badgeColor });
      }
      else {
        badgeColor[key] = 'badgeColor-Warning';
        setBadgeColor({ ...badgeColor });
      }
    });
  }, [flag, facturation]); 

  // return (
  //   <Fragment>
  //     <CRow>
  //       { 
  //         Object.keys(startDescription).map((key, index) => {
  //             return (
  //               <CCol md="5" className="indicateurData" key={startDescription[key]}> {startDescription[key]} 
  //                 <span className={badgeColor[key]}> {facturation[key]} {endDescription[key]}</span>
  //               </CCol>
  //           )})
  //       }
  //     </CRow>  
  //   </Fragment>
  // )
  return (
    <Fragment>
      <CRow>
        { 
          Object.keys(startDescription).map((key, index) => {
          if(moment(facturation[key], formats, true).isValid())
            return (
              <CCol md="5" className="indicateurData" key={startDescription[key]}> {startDescription[key]} 
                <span className={badgeColor[key]}> {moment(facturation[key]).format('DD/MM/YYYY HH:mm:ss')} {endDescription[key]}</span>
              </CCol>
             )
          else
            return (
            <CCol md="5" className="indicateurData" key={startDescription[key]}> {startDescription[key]} 
              <span className={badgeColor[key]}> {facturation[key]} {endDescription[key]}</span>
            </CCol>
            )})
          }   
      </CRow>  
    </Fragment>
  )
}

export default Indicateur