import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "./../../redux/shop/shop.actions";

import CollectionsOwerviewContainer from "./../../components/collections-owerview/collections-owerview.container";
import CollectionsPageContainer from "./../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOwerviewContainer}
        />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
