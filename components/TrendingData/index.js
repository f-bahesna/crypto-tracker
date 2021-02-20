import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TrendingData = ({key,name,symbol,score,market_cap}) => {
    return (
        <>
            <TableBody>
                <TableRow>
                    <TableCell align="left">{name}</TableCell>
                    <TableCell align="left">{symbol}</TableCell>
                    <TableCell align="left">{score}</TableCell>
                    <TableCell align="left">{market_cap}</TableCell>
                </TableRow>
            </TableBody>
        </>
    )
}

export default TrendingData
