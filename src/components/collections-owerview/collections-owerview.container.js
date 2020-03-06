import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "./../with-spinner/with-spinner.component";
import CollectionsOwerview from "./collections-owerview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOwerviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOwerview);

export default CollectionsOwerviewContainer;
