import React, { useState } from 'react';
import Parent1 from './Parent1';
export default function Parent() {
  const [text, setText] = useState('Parent Data');
  const callParent = (txt) => {
    setText(txt);
  };
  return (
    <div>
      <h1>{text}</h1>
      <Parent1 parent={callParent} />
    </div>
  );
}
