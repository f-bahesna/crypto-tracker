import React from 'react'
import Layout from '../../components/Layout'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TrendingData from '../../components/TrendingData'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const Trending = ({allTrending}) => {
    const classes = useStyles();
    return (
        <Layout>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Symbol</TableCell>
                            <TableCell>Score</TableCell>
                            <TableCell>Market Cap</TableCell>
                        </TableRow>
                    </TableHead>
                    {allTrending.coins.map(trend => {
                        return (
                            <TrendingData 
                            key={trend.item.id}
                            name={trend.item.name}
                            symbol={trend.item.symbol}
                            score={trend.item.score}
                            market_cap={trend.item.market_cap_rank}
                        />
                        )
                    })}
                </Table>
            </TableContainer>
        </Layout>
    )
}

export default Trending

export const getServerSideProps = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/search/trending')

    const allTrending = await res.json()

    return {
        props:{
            allTrending
        }
    }
}
