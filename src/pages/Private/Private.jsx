import React, {useContext} from 'react'
import { Outlet } from 'react-router'

export default function Private() {

    const {currentUser} = useContext(UserContext)
    console.log("PRIVATE", currentUser)

    if(!currentUser){
        return <Login to="/"/>
    }
  return (
    <div className='container'>
      <Outlet/>
    </div>
  )
}
