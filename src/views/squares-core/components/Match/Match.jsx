import React from 'react';
import moment from 'moment';
import Field from '../Field';
// import PatriotsLogo from '../../../../../..fassets/patriots.svg';
// import RamsLogo from '../../../../../assets/rams.svg';
import './Match.scss';

const Team = ({ name }) => <div className="team-name">{name}</div>;

const Match = ({
  scheduled, broadcast, scoring, home, away,
}) => (
  <Field type="title" label="SuperBowl LIII">
    <div className="match">
      <div className="team-away">
        <Team {...away} />
      </div>
      <div className="team-home">
        <Team {...home} />
      </div>
      <div className="info">
        <span>{moment(scheduled).format('MMMM Do, h:mm a')}</span>
        <span>{broadcast.network}</span>
      </div>
    </div>
  </Field>
);

export default Match;
