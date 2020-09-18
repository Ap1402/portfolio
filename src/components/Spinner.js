import React from 'react'
import styled from 'styled-components'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


const Spinner = () => {
    return (
        <Loader
         type="Grid"
         color="#563270"
         height={100}
         width={100}
 
      />
        
    )
}

export default Spinner
