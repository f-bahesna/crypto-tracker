import React from 'react'
import Layout from '../../components/Layout'
import { makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    row:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '-200px'
    },
    media:{
        height: 100,
        width: 100,
        marginLeft: '15px',
        borderRadius: '10px',
        border: '3px solid black'
    },
    text:{
        alignContent: 'center'
    }
})

const exchanger = ({result}) => {
    const classes = useStyles()
    return (
        <Layout>
            <Container className={classes.row}>
                <img
                    src={`https://assets.coingecko.com/markets/images/52/large/binance.jpg?1519353250`}
                    className={classes.media}
                />
                <Typography variant="h1" component="div">
                    {result.name}
                </Typography>
                <Typography variant="h5" component="div">
                    Tahun Didirikan: {result.year_established}
                </Typography>
                <Typography variant="h5" component="div">
                    Situs: <a target="_blank" href={result.url}>{result.url}</a>
                </Typography>
                <Typography variant="h5" component="div">
                    Facebook: <a target="_blank" href={result.facebook_url}>{result.facebook_url} </a>
                </Typography>
                <Typography variant="h5" component="div">
                    Reddit: <a target="_blank" href={result.reddit_url}>{result.reddit_url}</a>
                </Typography>
                <Typography variant="h5" component="div">
                    Reddit: <a target="_blank" href={result.tickers.base}>{result.tickers.base}</a>
                </Typography>
            </Container>
        </Layout>
    )
}

export default exchanger

export async function getServerSideProps(context){
    const {id} = context.query

    const res = await fetch(`https://api.coingecko.com/api/v3/exchanges/${id}`)

    const result = await res.json()

    return {
        props:{
            result
        }
    }
}
