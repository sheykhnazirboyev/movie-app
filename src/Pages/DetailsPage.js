import React from 'react'
import Details from '../Containers/Details'
import Layout from '../Components/Layouts';

function DetailsPage(props) {

    const id = props.match.params.id;

    return (
        <Layout>
            <Details id={id} />
        </Layout>
    )
}

export default DetailsPage
