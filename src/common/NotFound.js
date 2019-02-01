/* eslint-disable no-param-reassign */
import React from 'react';


export default function NotFound({ staticContext }) {
  if (staticContext) {
    staticContext.notFound = true;
  }
  return (
  //= ====================== 404 PAGE =======================
    <div>Not found</div>
  );
}
