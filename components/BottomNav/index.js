import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalance from '@material-ui/icons/AccountBalance';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
        width: 1000,
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#222531'
    },
    menu:{
        backgroundColor: '#222531',
        color: 'white'
    },
    button:{
        padding: '25px',
        paddingLeft: '20px',
        paddingRight: '20px',
    }
});

const ButtonLink = ({className, href,hrefAs,children,prefetch}) => (
        <Link href={href} as={hrefAs} prefetch={false}>
            <a className={className}>
                {children}
            </a>
        </Link>
    )

const BottomNav = () => {
    const classes = useStyles();

    return (
        <div className="coin_app">
            <BottomNavigation 
            className={classes.main}
            >
            <Button className={classes.button} component={ButtonLink} variant="contained" color="primary" href={`/exchanger`}><CreditCardIcon/>Exchanger</Button>
            <Button className={classes.button} component={ButtonLink} variant="contained" color="primary" href={`/`}><AccountBalance/>Home</Button>
            <Button className={classes.button} component={ButtonLink} variant="contained" color="primary" href={`#`}><TrendingUpIcon/>Trending</Button>
            </BottomNavigation>
        </div>
    )
}

export default BottomNav
