import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalance from '@material-ui/icons/AccountBalance';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import classes from './BottomNav.module.css'

const ButtonLink = ({className, href,hrefAs,children}) => (
        <Link href={href} as={hrefAs} prefetch={false}>
            <a className={className}>
                {children}
            </a>
        </Link>
    )

const BottomNav = () => {
    return (
        <>
            <div className="coin_app">
                <BottomNavigation 
                className={classes.main}
                showLabels
                >
                <Button className={classes.button} component={ButtonLink} variant="contained" color="primary" href={`/exchanger`}><CreditCardIcon/>Exchanger</Button>
                <Button className={classes.button} component={ButtonLink} variant="contained" color="primary" href={`/`}><AccountBalance/>Home</Button>
                <Button className={classes.button} component={ButtonLink} variant="contained" color="primary" href={`#`}><TrendingUpIcon/>Trending</Button>
                </BottomNavigation>
            </div>
        </>
    )
}

export default BottomNav
