import React from 'react';
import { connect } from 'react-redux';

const Message = (props) => {
  const { statusMessage } = props;
    return (
        <div>
            <h3 className="text-center message">{statusMessage}</h3>
        </div>
    )
}

const mapStateToProps = state => ({
  statusMessage = state.formReducer.statusMessage,
});


export default connect(mapStateToProps)(Message);
