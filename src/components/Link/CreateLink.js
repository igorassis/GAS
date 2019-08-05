import React, { Component } from "react"
import { Mutation } from "react-apollo"
import POST_MUTATION from "./createLink.graphql"

import styled from "styled-components"

const StyledInput = styled.input``

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

class CreateLink extends Component {
  state = {
    description: "",
    url: "",
  }

  render() {
    const { description, url } = this.state
    return (
      <div>
        <StyledDiv>
          <StyledInput
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <StyledInput
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </StyledDiv>
        <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateLink
