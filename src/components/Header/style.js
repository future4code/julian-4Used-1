import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input'; 

export const InputBusca = styled(Input)`
    background-color: #a5c1ce;
    border-radius: 10px;
    :hover{
        background-color: #BED2DC;
    }
`

export const BotaoContainer = styled(IconButton)`
    &&{
        color: purple;
    }
`

export const HeaderFlex = styled.div`
    display: flex;
    background-color: #a5c1ce;
`

export const ContainerLogo = styled.img`
    height: 70px;
    width: auto;
`