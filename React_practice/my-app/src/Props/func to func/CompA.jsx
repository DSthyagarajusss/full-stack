import React from 'react'
import CompB from './CompB'
export default function CompA() {
 let ename ='raju'
 return <>
  <h1>Componet ---A</h1>
  <dir>dkd</dir>
  <CompB one={'good moring'} name={ename} />
  </>
}
