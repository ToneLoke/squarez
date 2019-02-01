import React from 'react';
import { Icon } from '../../../squares-core/components';
import './Stepper.scss';

const icons = {
  matches: 'matches',
  settings: 'settings',
  host: 'host',
  preview: 'preview',
};

const classes = {
  current: 'selected',
  done: 'finished',
  disabled: 'disabled',
};

const Step = ({ name, status, handleClick }) => {
  const icon = { icons, name };
  return (
    <div className={`${classes[status]} step`} onClick={() => handleClick(name)}>
      <Icon {...icon} />
    </div>
  );
};

export default ({ step, onChange }) => (
  <div className="step-container">
    <Step handleClick={onChange} name="matches" status="current" />
    <div className="divider" />
    <Step handleClick={onChange} name="settings" status="disabled" />
    <div className="divider" />
    <Step handleClick={onChange} name="host" status="disabled" />
    <div className="divider" />
    <Step handleClick={onChange} name="preview" status="disabled" />
  </div>
);
