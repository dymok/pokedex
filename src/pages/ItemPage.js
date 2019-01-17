import { connect } from 'react-redux'
import * as itemActions from '../redux/actions/itemActions'
import React, { Component } from 'react'
import { push } from 'connected-react-router'

import PokemonStats from '../components/pokemonStats'

class ItemPage extends Component {
  componentDidMount() {
    this.props.getPokemon(this.props.match.params.name)
  }

  showEvolutoinForms() {
    this.props.push('/' + this.props.pokemon.name + '/forms')
  }

  render() {
    let { pokemon, isFetched, error } = this.props

    return (
      <div>
        {error && <div className="list__error">{error}</div>}
        {isFetched || !pokemon ? (
          <p>Loading...</p>
        ) : (
          <div>
            <PokemonStats pokemon={pokemon} />
            <button onClick={this.showEvolutoinForms.bind(this)}>Forms</button>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { pokemon, isFetched, error } = state.item
  return {
    pokemon,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
  getPokemon: itemActions.getPokemon,
  push
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage)
