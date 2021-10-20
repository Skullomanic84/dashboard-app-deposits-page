import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/profilelg.png'



function Navbar() {
    return (
        <Container>

            <MessageIcon className="iconify" data-icon="mdi-light:email" data-icon-inline="false"></MessageIcon>
            <ProfileImg src={Image} />
        </Container>
    )
}

export default Navbar

const Container = styled.div `
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

const MessageIcon = styled.span `
    color: ${({ theme }) => theme.colorGray};
    font-size: 2rem;
    cursor: pointer;
`


const ProfileImg = styled.img `
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
`


