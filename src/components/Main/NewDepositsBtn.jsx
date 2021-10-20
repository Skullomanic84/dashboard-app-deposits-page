import React from 'react'
import styled from 'styled-components'


function NewDepositsBtn() {
    return (
        <AddButton>
            <AddIcon className="iconify" data-icon="mdi-light:plus" data-icon-inline="false"></AddIcon>
        </AddButton>
    )
}

export default NewDepositsBtn


const AddButton = styled.a `
 background-color: ${({ theme }) => theme.colorGreen };
 display: flex;
 justify-content: center;
 align-items: center;
 width: 50px;
 height: 50px;
 border-radius: 50%;
 position: absolute;
 top: 6rem;
 right: 7rem;
 cursor: pointer;

`


const AddIcon = styled.span `
    color: #fff;
    font-size: 36px;
`

