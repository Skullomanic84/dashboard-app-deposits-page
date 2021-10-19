import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

function Menu() {
    
    return (
        <Container>
            <MenuItem title="Home" icon=""/>
            <MenuItem title="Deposits" icon="" active/>
            <MenuItem title="Offers" icon="" />
            <MenuItem title="Payments" icon="" />
            <MenuItem title="Settings" icon="" />
        </Container>
    )
}

export default Menu

const Container = styled.div `
    margin-top: 2rem;
    width: 100%;
`