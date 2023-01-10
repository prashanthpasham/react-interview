import React, { useState, useCallback } from 'react';
export default function Parent1({ parent }) {
  const [text, SetText] = useState('Child Data');
  const callParent = useCallback(() => {
    parent(text);
  });

  return <button onClick={callParent}>Click Me!</button>;
}
