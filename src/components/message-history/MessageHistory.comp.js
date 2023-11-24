import React from "react";
import PropTypes from "prop-types";
const MessageHistory = ({ msg }) => {
  if (!msg) return null;
  return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.messageby}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
};
MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};

export default MessageHistory;
