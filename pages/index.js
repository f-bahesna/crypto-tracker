import {useState} from 'react'
import Search from '../components/Search'
import CoinList from '../components/CoinList'
import Layout from '../components/Layout'

export default function Home({coinFilter}) {
  const [search, setSearch] = useState('')

  const allCoins = coinFilter.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div className="coin_app">
        <Search type="text" placeholder="Golek Crypto Opo Lek?" onChange={handleChange}/>
        <CoinList coinFilter={allCoins}/>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

  const coinFilter = await res.json()

  return {
    props: {
      coinFilter
    }
  }
}
