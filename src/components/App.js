import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

export class App extends React.Component {
  calculateOutputs() {
    const { rangeInfo, divisorInfo } = this.props

    const result = (new Array((rangeInfo.upper - rangeInfo.lower) + 1))
    for (let i = 0; i < result.length; i++) {
      result[i] = `${i + rangeInfo.lower}: `
    }

    for (let i = 0; i < divisorInfo.outputDetails.length; i++) {
      const { divisor, output } = divisorInfo.outputDetails[i]

      const start = rangeInfo.lower - (rangeInfo.lower % divisor)
      for (let j = start; j <= rangeInfo.upper; j += divisor) {
        result[j - rangeInfo.lower] += output
      }
    }

    return result
  }


  render() {
    if (!this.props.rangeInfo) {
      return (<div> rangeInfo not found</div>)
    }

    if (!this.props.divisorInfo) {
      return (<div> divisorInfo not found</div>)
    }

    const outputs = this.calculateOutputs()

    // eslint-disable-next-line
    return (
      <div>
        <h2>Sample Output</h2>
        {
          outputs.map((output, index) => (
            <div key={`output-${index}`}>
              <p>{output}</p>
            </div>))
        }
      </div>
    )
  }
}

// eslint-disable-next-line
App.propTypes = {
}

function mapStateToProps(state) {
  return {
    rangeInfo: state.rangeInfo,
    divisorInfo: state.divisorInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
