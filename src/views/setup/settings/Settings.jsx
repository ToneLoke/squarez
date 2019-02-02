import React, { useState, useEffect } from 'react';
import { TextInput, Field } from '../../squares-core/components';
import './Settings.scss';

const prices = [1, 5, 10, 15, 20, 25];

const Amount = ({ amount }) => (
  <div key={amount} className="settings-price">
    <span>$</span>
    {amount}
  </div>
);

const Settings = () => (
  <div className="settings">
    <Field label="SQUARE PRICE" type="title">
      <div className="settings-wrapper">
        {prices.map(a => (
          <Amount amount={a} />
        ))}
      </div>
    </Field>
    <Field label="GAME SETTINGS" type="title">
      <TextInput type="number" placeholder="25 squares" disabled />
      <TextInput type="dattexte" placeholder="1 day before" disabled />
    </Field>
  </div>
);

export default Settings;
