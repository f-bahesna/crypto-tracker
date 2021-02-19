import React from 'react'
import Layout from '../../components/Layout'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import classes from './eachExchange.module.css'
import Box from '@material-ui/core/Box';

const exchanger = ({result}) => {
    const tickers = result.tickers.slice(0,5).map(ti => {
        return (
            <>
            <div className={classes.each_ticker}>
                <Box key={ti} textAlign="left" m={1}>
                    Base: {ti.base}
                </Box>
                <Box key={ti} textAlign="left" m={1}>
                    Target: {ti.target}
                </Box>
                <Box key={ti} textAlign="left" m={1}>
                    Market: {ti.market.name}
                </Box>
                <Box key={ti} textAlign="right" m={1}>
                    Insentive Trading: {ti.market.has_trading_incentive === false ? <p className={classes.red}>false</p> : <p className={classes.red}>false</p>}
                </Box>
            </div>
            </>
        )
    })

    return (
        <div className={classes.exchanger_id_background}>
            <Layout>
                <Container className={classes.row}>
                    <div className={classes.column}>
                        <img
                            src={result.image}
                            className={classes.media}
                        />
                        <Typography variant="h1" component="div">
                            <Box textAlign="left" m={1}>
                                {result.name}
                            </Box>
                        </Typography>
                        <Typography variant="h4" component="div">
                            <Box textAlign="left" m={1}>
                                Negara : {result.country}
                            </Box>
                        </Typography>
                        <Typography variant="h5" component="div">
                            <Box textAlign="left" m={1}>
                                Tahun Didirikan : {result.year_established}
                            </Box>
                            <Box textAlign="left" m={1}>
                                Situs : <a className={classes.link} target="_blank" href={result.url}>{result.url}</a>
                            </Box>
                            <Box textAlign="left" m={1}>
                                Facebook : <a className={classes.link} target="_blank" href={result.facebook_url}>{result.facebook_url} </a>
                            </Box>
                            <Box textAlign="left" m={1}>
                                Reddit : <a className={classes.link} target="_blank" href={result.reddit_url}>{result.reddit_url}</a>
                            </Box>
                            <Box textAlign="left" m={1}>
                                Trust Score : {result.trust_score}
                            </Box>
                            <Box textAlign="left" m={1}>
                                Trust Score Rank : {result.trust_score_rank}
                            </Box>
                            <Box textAlign="left" m={1}>
                                Trade Volume 24h btc : {result.trade_volume_24h_btc.toLocaleString()}
                            </Box>
                        </Typography>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.ticker_section}>
                            <Typography variant="h4" component="div">
                                Tickers :
                            </Typography>
                            <Typography variant="h6" component="div">
                                {tickers}
                            </Typography>
                        </div>
                    </div>
                </Container>
            </Layout>
        </div>
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
