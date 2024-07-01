import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const DatePickerBox = () => (
  <Space direction="vertical" style={{
    width: "100%"
  }} size={6}>
    <label className='label'>Select Date</label>
    <DatePicker.RangePicker style={{ width: '100%'}} />
  </Space>
);
export default DatePickerBox