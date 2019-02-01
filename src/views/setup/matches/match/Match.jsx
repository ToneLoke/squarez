import React from 'react';
import moment from 'moment';
// import PatriotsLogo from '../../../../../..fassets/patriots.svg';
// import RamsLogo from '../../../../../assets/rams.svg';
import './Match.scss';

const Team = ({ name }) => <div className="team-name">{name}</div>;

const Match = ({
  scheduled, broadcast, scoring, home, away,
}) => (
  <div className="match">
    <div className="team-away">
      <Team {...away} />
    </div>
    <span className="info">@</span>
    <div className="team-home">
      <Team {...home} />
    </div>
    <div className="info">
      <span>{moment(scheduled).format('MMMM Do, h:mm a')}</span>
      <span>{broadcast.network}</span>
    </div>
  </div>
);

export default Match;
