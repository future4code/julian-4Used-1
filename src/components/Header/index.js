import React from 'react';
import {BotaoContainer} from './style'
import FacebookIcon from '@material-ui/icons/Facebook';

class Header extends React.Component{
    render(){
        return(
            <div>
                <BotaoContainer>
                    <FacebookIcon></FacebookIcon>
                </BotaoContainer>
                
            </div>
        )
    }
}

export default Header