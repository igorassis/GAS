import React, { Component } from "react"
import styled from 'styled-components'
import Link from "./Link"
import FEED_QUERY from "./feedLinks.graphql"
import { Query } from "react-apollo"

const StyledDiv = styled.div`
  background-color: rgba(23, 42, 58, .06);
`

export default class ListLink extends Component {
  render() {
    return (
      <StyledDiv>
        <Query query={FEED_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching...</div>
            if (error) return <div>Error: {JSON.stringify(error)}</div>

            const linksToRender = data.feed.links

            return (
              <div>
                {linksToRender.map(link => (
                  <Link key={link.id} link={link} />
                ))}
              </div>
            )
          }}
        </Query>
      </StyledDiv>
    )
  }
}
