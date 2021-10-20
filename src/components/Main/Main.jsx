import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import NewDepositsBtn from './NewDepositsBtn'

function Main() {
    return (
        <Container>
           <Navbar /> 
           <NewDepositsBtn />
        </Container>
    )
}

export default Main

const Container = styled.div `
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`
