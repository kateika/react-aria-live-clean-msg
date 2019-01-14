import React from 'react';
import { connect } from "react-redux";

function Errors ({a11yErrors: { errorMessages = []} = {}}) {
  return <div hidden={ errorMessages.length === 0 }>{ errorMessages }</div>
}

const mapStateToProps = ({ a11yErrors }) => ({ a11yErrors })

export default connect(mapStateToProps)(Errors);
