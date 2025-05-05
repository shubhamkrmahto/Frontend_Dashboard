import React from 'react'
import { Link, Route } from 'react-router-dom'

function SideNav(){

    const dynamicRouting={

        ADMIN:[
            {label:"Add Employee", to:'/dashboard/addemployee'},
            {label:"View Employee", to:'/dashboard/viewemployee'}
        ],
        CRM:[
            {label:"Add Enquiry", to:'/dashboard/addenquiry'},
            {label:"View Enquiry", to:'/dashboard/viewenquiry'},
            {label:"Fill Loan Application", to:'/dashboard/loanapplication'}
        ],
        OE:[
            {label:"Generate Cibil Score", to:'/dashboard/generatecibil'},
            {label:"Verify Documents", to:'/dashboard/verifydocuments'}
        ],
        CM:[
            {label:"Generate Snaction", to:'/dashboard/generatesanction'}
        ],
        AH:[
            {label:"Create Loan Disbursement", to:'/dashboard/loandisbursement'},
            {label:"Generate Ledger", to:'/dashboard/ledger'}
        ]


    }

    return (
        <div>SideNav
            {dynamicRouting["CRM"].map((btn,index)=><Link key={index} to={btn.to}>{btn.label}</Link>)}
        </div>
    )

}

export default SideNav