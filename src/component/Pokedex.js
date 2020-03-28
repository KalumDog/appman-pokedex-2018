import React, { useEffect, useState } from 'react'
import SerchImg from '../search.png'
import { getPokemonList } from '../api/pokemonAPI'

const calculateHp = (value) => {
  const formatVal = Number(value) || 0
  if(formatVal <= 0) return 0
  
  if(formatVal >= 100) return 100
  
  return 1 - (formatVal / 100)
}

const calculateStr = (value) => {
  const formatVal = Number(value) || 0

  if(formatVal < 1 && formatVal > 2) return 0

  return formatVal * 50 / 100
}

const calculateWeak = (value) => {
  return value === 1 ? 1 : 0
}

const Bar = ({ value }) => {
  return (
    <div className={'detailBar'}>
      <div className={'activeBar'} style={{ flexGrow: value }}/>
    </div>
  )
}

const PokemonCard = ({ detail }) => {
  const { name, imageUrl, hp, weaknesses = [], attacks = [] } = detail

  return (
    <div className={'pokemonCardCtn'}>
      <img src={imageUrl} id={'pokemonImg'}/>
      <div className={'pokemonDetailWrapper'}>
        <div>
          <span>{name}</span>
          <span>Add</span>
        </div>
        <div className={'detailRow'}>
          <span>HP</span>
          <Bar value={calculateHp(hp)}/>
        </div>
        <div className={'detailRow'}>
          <span>STR</span>
          <Bar value={calculateStr(attacks.length)}/>
        </div>
        <div className={'detailRow'}>
          <span>WEAK</span>
          <Bar value={calculateWeak(weaknesses.length)}/>
        </div>
      </div>
    </div>
  )
}

const Pokedex = () => {

  const [pokemonList, setPokemonList] = useState([])  

  useEffect(() => {
    getPokemonList()
    .then((res) => {
      console.log('ress', res)
      setPokemonList(res)
    })
  }, [])

  return (
    <div className={'pokedexCtn'}>
      <div className={'searchCtn'}>
        <input placeholder={'Find Pokemon'} id='searchInput' type={'text'}/>
        <img alt={'searchIcon'} src={SerchImg} id='searchImg'/>
      </div>
      <div className={'pokemonList'}>
        {
          pokemonList.map((pokemon) => {
            return <PokemonCard key={pokemon.id} detail={pokemon} />
          })
        }
      </div>
    </div>
  )
}

export default Pokedex