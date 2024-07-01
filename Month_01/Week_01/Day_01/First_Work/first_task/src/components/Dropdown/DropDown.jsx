import React, { useState } from 'react';
import { Radio, Select, Space } from 'antd';
import "../../../styles/DropDown.css"
const options = [
    {
        value: 'All',
        label: "All",
    },
    {
        value: 'Inbox',
        label: "Inbox",
    },
    {
        value: 'Sent',
        label: "Sent",
    },
    {
        value: 'Starred',
        label: "Starred",
    },
    {
        value: 'Important',
        label: "Important",
    },
    {
        value: 'Spam',
        label: "Spam",
    },
    {
        value: 'Trash',
        label: "Trash",
    },
]

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const DropDown = () => {
  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <label className='label'>
            Gmail Folder(s)
        </label>
        <Select
          mode="tags"
          size={"large"}
          placeholder="Please select"
          defaultValue={[]}
          onChange={handleChange}
          style={{
            width: '100%'
          }}
          options={options}
        />
      </Space>
    </>
  );
};
export default DropDown;