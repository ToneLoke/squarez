import React, { useState, useEffect } from 'react';
import TextInput from './TextInput';
import Field from './Field';

const User = () => (
  <div className="user">
    <Field label="Payout Id">
      <TextInput type="text" placeholder="@toneloke" disabled />
    </Field>
    <Field label="Alias">
      <TextInput type="text" placeholder="square display" disabled />
    </Field>
  </div>
);

export default User;
