import React from 'react'
import './collections-overview.styles.scss'
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../Collection-Preview/collection-preview'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux';

const CollectionOverview = ({ collections }) => {
    console.log(collections)
    return <div className="collections-overview">
        {collections.map(({ id, ...otherCollectioProps }) => (
            <CollectionPreview key={id} {...otherCollectioProps} />
        ))}
    </div>
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});


export default connect(mapStateToProps)(CollectionOverview)
