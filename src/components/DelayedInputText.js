import React, { useState, useEffect } from 'react';
import InputText from './InputText';


function DelayedInputText({ delayedTime, value, onChange, ...resProp }) {
  const [typedValue, setTypedValue] = useState(value);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onChange(typedValue);
    }, delayedTime);

    return () => {
      clearTimeout(timeoutID);
    }
  }, [typedValue, onChange, delayedTime]);

  function onChangeHandler(newValue) {
    setTypedValue(newValue);
  }

  return (
    <InputText value={typedValue} onChange={(event) => onChangeHandler(event.target.value)} { ...resProp }/>
  );
}

DelayedInputText.defaultProps = {
  delayedTime: 500
};

export default DelayedInputText;
