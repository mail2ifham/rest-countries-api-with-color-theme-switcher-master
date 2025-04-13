import React from 'react'
import { VscError } from "react-icons/vsc";
import "./errorPage.css"
import { useCountriesStore } from '../../store/countriesStore';
import { useNavigate } from 'react-router';


const ErrorPage = () => {
    const navigate = useNavigate()
    const fetchError = useCountriesStore(state=>state.fetchError)
  return (
    <div className='error'>

        <VscError className='error-icon' />
        <p>{fetchError}</p>
        <button onClick={()=> navigate('/')}>Retry</button>
    </div>
  )
}

export default ErrorPage