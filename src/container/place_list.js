import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import List from '../component/place_list'

const mapState = ({place}) => ({
    place: place
});
export default connect(mapState)(List);