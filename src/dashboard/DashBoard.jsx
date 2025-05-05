import React, { Component } from 'react'
import Profile from './Profile'
import SideNav from './SideNav'
import AddEmployee from '../modules/admin/AddEmployee'
import ViewEmployee from '../modules/admin/ViewEmployee'
import AddEnquiry from '../modules/crm/AddEnquiry'
import ViewEnquiry from '../modules/crm/ViewEnquiry'
import { Route, Routes } from 'react-router-dom'
import LoanAppplication from '../modules/crm/LoanAppplication'
import GenerateCibil from '../modules/oe/GenerateCibil'
import VerifyDocuments from '../modules/oe/VerifyDocuments'
import GenerateSanction from '../modules/cm/GenerateSanction'
import Ledger from '../modules/ah/Ledger'
import LoanDisbursement from '../modules/ah/LoanDisbursement'

function DashBoard() {

    const appRoute={
        ADMIN:[
            {path:'addemployee', Component:<AddEmployee/>},
            {path:'viewemployee', Component:<ViewEmployee/>}
        ],
        CRM:[
            {path:'addenquiry', Component:<AddEnquiry/>},
            {path:'viewenquiry', Component:<ViewEnquiry/>},
            {path:'loanapplication', Component:<LoanAppplication/>}
        ],
        OE:[
            {path:'generatecibil', Component:<GenerateCibil/>},
            {path:'verifydocuments', Component:<VerifyDocuments/>}
        ],
        CM:[
            {path:'generatesanction', Component:<GenerateSanction/>}
        ],
        AH:[
            {path:'ledger', Component:<Ledger/>},
            {path:'loandisbursement', Component:<LoanDisbursement/>}
        ]
    }

  return (
    <div>DashBoard
      <div>  <Profile></Profile></div>
      <div>  <SideNav></SideNav></div>

      <div>
        <Routes>
        {
            appRoute["CRM"].map((btn,index)=> <Route key={index} path={btn.path} element={btn.Component}></Route> )
        }
        </Routes>
      </div>
    </div>
  )
}

export default DashBoard