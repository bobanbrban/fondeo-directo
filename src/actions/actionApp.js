import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actionCreators';
import mainHeader from '../components/mainHeader';

function mapStateToProps(state) {

	return {

       mails: state.MailList

	}
}



function mapDispatchToProps(dispatch) {

      return bindActionCreators(actionCreators, dispatch);

}




const actionApp = connect(mapStateToProps,
     mapDispatchToProps)(mainHeader);


export default actionApp; 