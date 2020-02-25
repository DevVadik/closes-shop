import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOwerview from '../../components/collections-owerview/collections-owerview.component';
import CollectionPage from '../collection/collection.component';


const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOwerview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  )
}

export default ShopPage