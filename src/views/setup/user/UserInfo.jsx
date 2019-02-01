import React, { useState, useEffect } from 'react';
import TextInput from '../../../squares-core/components/TextInput/TextInput';
import Field from '../../../squares-core/components/Field/Field';

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
