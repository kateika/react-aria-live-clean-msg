import { connect } from 'react-redux'
import A11yMessages from './A11yMessages'

const mapStateToProps = ({ a11yErrors }) => {
  return a11yErrors
}

export default connect(mapStateToProps)(A11yMessages)
