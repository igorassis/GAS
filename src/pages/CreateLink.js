import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

import CreateLink from '../components/Link/CreateLink'

export default class CreateLinkPage extends Component {
    render() {
        return (
            <Layout>
                <CreateLink />
                <Link to="/">Back</Link>
            </Layout>
        )
    }
}
