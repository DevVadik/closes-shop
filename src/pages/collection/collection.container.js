import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionsLoading } from "../../redux/shop/shop.selectors";
import CollectionsPage from "./collection.component";
import WithSpinner from "./../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoading(state)
});

const CollectionsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage);

export default CollectionsPageContainer;
