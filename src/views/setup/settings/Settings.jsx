import React, { useState, useEffect } from 'react';
import { TextInput, Field } from '../../squares-core/components';
import './Settings.scss';

const prices = [1, 5, 10, 15, 20, 25];

const Amount = ({ amount }) => (
  <div key={amount} className="settings-price">
    {amount}
  </div>
);

const Settings = () => (
  <div className="settings">
    <Field label="Bounty Amount">
      <div className="settings-wrapper">
        {prices.map(a => (
          <Amount amount={a} />
        ))}
      </div>
    </Field>
    <Field label="Party Size">
      <TextInput type="number" placeholder="25 squares" disabled />
    </Field>
    <Field label="Expiration Date">
      <TextInput type="dattexte" placeholder="1 day before" disabled />
    </Field>
  </div>
);

export default Settings;
