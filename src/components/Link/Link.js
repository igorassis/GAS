import React, { Component } from "react"
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const StyledSpan = styled.span`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`

export default class Link extends Component {
  render() {
    return (
      <div>
        <div>
          <StyledSpan>
            {this.props.link.description} ({this.props.link.url})
          </StyledSpan>
        </div>
      </div>
    )
  }
}
