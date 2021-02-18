import React from 'react';
import Coins from "./Coins"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
    root: {
      fontSize: 15,
      width: 1000,
      color: "white",
      backgroundColor: '#222531',
      borderRadius: '10px',
      justifyContent: 'space-between',
      padding: '20px' 
      // '&:hover': {
      //   backgroundColor: 'green'
      // }
    },
    selected: {
        color: "red"
    },
    harga:{
      paddingRight: '30px',
    },
    status:{
      marginRight: '80px'
    }
  });

export default function CoinList({coinFilter}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
    <>
     <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <h4>Koin</h4>
      <h4>Kode</h4>
      <h4 className={classes.harga}>Harga</h4>
      <h4>Volume</h4>
      <h4 className={classes.status}>Status</h4>
      <h4>Market Cap</h4>
    </BottomNavigation>
        {coinFilter.map(coin =>{
            return (
                <Coins
                key={coin.id}
                name={coin.name}
                id={coin.id}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                volume={coin.total_volume}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
                />
            )
        })}
    </>
    )
}