import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/profilelg.png'


function Profile() {
    return (
        <Container>
            
            <ProfileImg src={Image} />
            <ProfileName>Skullomanic</ProfileName>

        </Container>
    )
}

export default Profile


const Container = styled.div `
    margin-top: 3rem;
`

const ProfileImg = styled.img `
    height: 5rem;
`

const ProfileName = styled.h1 `
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme}) => theme.textColor};
`
