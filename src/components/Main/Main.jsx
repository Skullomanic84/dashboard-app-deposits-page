import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import NewDepositsBtn from './NewDepositsBtn'
import Desposits from './Deposits/Desposits'
import DepositData from '../../DepositData.json'



function Main() {
    return (
        <Container>
           <Navbar /> 
           <NewDepositsBtn />
           <Desposits title="Active Deposits" count={2} data={DepositData.active} />
           <Desposits title="Closed Deposits" count={8} data={DepositData.closed} />
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
