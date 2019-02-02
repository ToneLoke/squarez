import React, { useState, useEffect } from 'react';
import TextInput from '../TextInput';
import Field from '../Field';

const User = ({ input, type }) => (
  <div className="user">
    <Field label={`${type} INFO`} type="title">
      <TextInput type="text" placeholder="venmo name" />
      <TextInput type="text" placeholder="alias" />
    </Field>
  </div>
);

export default User;
