import React from 'react';
import { LiveAnnouncer, LiveMessage } from 'react-aria-live';

const A11yMessages = ({ errorMessages }) =>
  <LiveAnnouncer>
    <LiveMessage message={ errorMessages.join(' ') } aria-live="polite" clearOnUnmount="true" />
  </LiveAnnouncer>

export default A11yMessages
