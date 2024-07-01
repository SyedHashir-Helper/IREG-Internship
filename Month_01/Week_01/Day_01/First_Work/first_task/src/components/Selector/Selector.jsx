import React from 'react';
import { Select, Tag } from 'antd';
const options = [
  {
    label: 'filename:pdf',
    value: 'gold',
  },
  {
    label: 'category:social',
    value: 'lime',
  },
  {
    label: 'larger:1M',
    value: 'green',
  },
  {
    label: 'has:attachments',
    value: 'cyan',
  },
];

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginInlineEnd: 4
      }}
    >
      {label}
    </Tag>
  );
};
const Selector = () => (
    <>
        <label className='label'>
            Advanced Option(s)
        </label>
        <Select

        mode="multiple"
        tagRender={tagRender}
        defaultValue={[]}
        style={{
            width: '100%',
            lineHeight: 2.5,
            height: "3.25em",
            overflow: "hidden"
        }}
        options={options}
        />

    </>
);
export default Selector;