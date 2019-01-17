import React, { PureComponent } from 'react'

class PokemonStats extends PureComponent {
  render() {
    const { pokemon } = this.props

    console.log(pokemon)

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      pokemon.id
    }.png`

    return (
      <div className="pokemon__stats">
        <img src={imageUrl} />
        <h1>{pokemon.name}</h1>
        <dl>
          <dt>Height</dt>
          <dd>{pokemon.height}</dd>
          <dt>Weight</dt>
          <dd>{pokemon.weight}</dd>
        </dl>

        <h2>Abilities</h2>
        <div>
          {pokemon.abilities.map(item => {
            return <span>{item.ability.name} </span>
          })}
        </div>

        <h2>Stats</h2>
        <div>
          {pokemon.stats.map(item => {
            return <span>{item.stat.name} </span>
          })}
        </div>
      </div>
    )
  }
}

export default PokemonStats
