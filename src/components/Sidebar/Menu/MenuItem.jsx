import React from 'react'
import styled from 'styled-components'

function MenuItem({ title, icon, active }) {
    return (
        <Container active={active}>
            <Title active= {active}>{title}</Title>
        </Container>
    )
}

export default MenuItem

const Container = styled.div `
    border-left: 3px solid ${props => props.active ? props.theme.activeMenu :  "transparent"};
    width: 100%;
    padding: .8rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: .2s all ease-in-out;

    &:hover {
        background-color: rgba(0,0,0, .1);
    }
`

const Icon = styled.span ``

const Title = styled.h1 `
    color: ${props => props.active ? props.theme.activeMenu :  "#aaa5a5"}; ;
    font-size: 1rem;
    font-weight: 300;

`
