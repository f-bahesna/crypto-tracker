import React from 'react'
import ExchangerList from '../../components/Exchanger'
import Typography from '@material-ui/core/Typography';
import Style from '../../components/Exchanger/exchanger.module.css'

const Exchanger = ({exchanger}) => {
    return (
        <div>
            <div className={Style.exchanger_text_content}>
                <Typography  variant="body2" color="white" component="h1">
                    <h1 className={Style.exchanger_title_page}>EXCHANGER</h1>
                </Typography>
                <Typography className={Style.desc} variant="body1" gutterBottom>
                    Exchanger merupakan situs pertukaran mata uang digital seperti Bitcoin,Dollar 
                    dan lain sebagainya.
                </Typography>
            </div>
            {exchanger.map(exchange => {
                return (
                    <ExchangerList 
                        key={exchange.id}
                        name={exchange.name}
                        id={exchange.id}
                        established={exchange.year_established}
                        country={exchange.country}
                        url={exchange.url}
                        image={exchange.image}
                        trust_score={exchange.trust_score}
                    />
                )
            })}
        </div>
    )
}

export default Exchanger

export const getServerSideProps = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=30')

    const exchanger = await res.json()

    return {
        props: {
            exchanger
        }
    }
}
