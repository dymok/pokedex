import { connect } from 'react-redux'
import * as itemActions from '../redux/actions/itemActions'

import React, { Component } from 'react'

class FormsPage extends Component {
  componentDidMount() {
    this.props.getForms(this.props.pokemon.id)
  }

  flattenChain(chain) {
    let accumulator = []
    const reduce = node => {
      if (node) {
        let item = { ...node.species }
        if (
          Array.isArray(node.evolution_details) &&
          node.evolution_details.length
        ) {
          item.level = node.evolution_details[0].min_level
        }
        accumulator.push(item)

        if (Array.isArray(node.evolves_to) && node.evolves_to.length) {
          reduce(node.evolves_to[0])
        }
      }
    }
    reduce(chain)
    return accumulator
  }

  render() {
    let { forms, isFormsFetched, error } = this.props

    const flattenChain = forms ? this.flattenChain(forms.chain) : null

    return (
      <div>
        {error && <div className="list__error">{error}</div>}
        {isFormsFetched || !forms ? (
          <p>Loading...</p>
        ) : (
          <div>
            {flattenChain &&
              flattenChain.map(item => {
                return (
                  <div>
                    {item.name}{' '}
                    {item.level ? (
                      <span>(Level {item.level} required)</span>
                    ) : null}
                  </div>
                )
              })}
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { pokemon, forms, isFormsFetched, error } = state.item
  return {
    pokemon,
    forms,
    isFormsFetched,
    error
  }
}

const mapDispatchToProps = {
  getForms: itemActions.getForms
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormsPage)
