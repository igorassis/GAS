import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const RICK = gql`
  query {
    character(id: 2){
      name
      image
    }
}
`;



const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}

 <Query query={RICK}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <div>
          <span>
            {data.character.name}
          </span>
          <img src={data.character.image} alt={data.character.name} style={{ width: 300 }} />
        </div>
      )
    }}
  </Query> 

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
