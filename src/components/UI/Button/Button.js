import React from 'react';
import UIButton from '@material-ui/core/Button';
import TicketIcon from '../../../resources/images/icons/ticket.png'

const Button = (props) => {
    return (
        <UIButton
            href={props.link}
            variant='contained'
            size='small'
            style={{
                background: props.background,
                color: props.color
            }}>
            <img
                className='iconImage'
                src={TicketIcon}
                alt='button_icon'
            />
            {props.text}
        </UIButton>
    );
};

export default Button;