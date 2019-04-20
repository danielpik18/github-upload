import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';
import { scroller } from 'react-scroll';


const SideDrawer = (props) => {

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -88
        });

        props.close();
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={props.close}
        >
            <List component="nav">
                <ListItem button onClick={() => scrollToSection('venueInfo')}>
                    Venue INFO
                </ListItem>
                <ListItem button onClick={() => scrollToSection('highlights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => scrollToSection('pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToSection('location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;