import React from 'react'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { FaSearch, FaCog, FaPlay } from 'react-icons/fa';
import GmailSearch from './GmailSearch/GmailSearch';

const items = [
  {
    Header: "Gmail Search",
    Icon: <FaSearch/>,         
    Children: <GmailSearch/>
  },
  {
    Header: "Configuration",
    Icon: <FaCog/>,
    Children: <GmailSearch/>
  },
  {
    Header: "Save & Run",
    Icon: <FaPlay/>,
    Children: <GmailSearch/>
  },
]

const TabsSection = () => {
  return (
    <div>
      <Tabs
        size='large'
        defaultActiveKey="2"
        centered={true}
        style={{
          width: "100%"
        }}
        items={items.map((Icon, i) => {
        const id = String(i + 1);
        return {
            key: id,
            label: Icon.Header,
            children: Icon.Children,
            icon: Icon.Icon,
        };
        })}
        />
    </div>
  )
}

export default TabsSection
