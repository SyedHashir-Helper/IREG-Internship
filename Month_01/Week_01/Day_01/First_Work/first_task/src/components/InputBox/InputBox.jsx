import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
const onChange = (e) => {
  console.log(e);
};
const InputBox = ({label, placeholder}) => (
  <>
    <label className='label'>{label}</label>
    <Input placeholder={placeholder} allowClear onChange={onChange} style={{
      lineHeight: "2.5"
    }} />
  </>
);
export default InputBox;