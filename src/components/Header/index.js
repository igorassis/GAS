import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: orange;
  margin-bottom: 1.45rem;
`;

const Div = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const H1 = styled.h1`
  margin: 0;
`;
const H4 = styled.h4`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Div>
      <H1 style={{ margin: 0 }}>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
      <StyledLink to="/CreateLink/"><H4>NEW POST <span> ✏️</span></H4></StyledLink>
      <StyledLink to="/search/"><H4>Search <span> 🔎</span></H4></StyledLink>
    </Div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
