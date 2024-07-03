import React, { useState } from 'react'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { FaSearch, FaCog, FaPlay } from 'react-icons/fa';
import GmailSearch from './GmailSearch/GmailSearch';
import Configuration from './Configuation/Configuration';
import Save from './Save/Save';



const TabsSection = () => {
  const [activeTab, setActivetab] = useState("1")

  const setActiveTabkey = (key) => {
    setActivetab(key);
    console.log("setActiveTab");
    console.log(activeTab);
  }

  const items = [
    {
      Header: "Gmail Search",
      Icon: <FaSearch/>,         
      Children: <GmailSearch setActiveTabkey={setActiveTabkey}/>
    },
    {
      Header: "Configuration",
      Icon: <FaCog/>,
      Children: <Configuration setActiveTabkey={setActiveTabkey}/>
    },
    {
      Header: "Save & Run",
      Icon: <FaPlay/>,
      Children: <Save setActiveTabkey={setActiveTabkey}/>
    },
  ]

  return (
    <div>
      <Tabs
        size='large'
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        // onChange={setActiveTab(activeTab)}
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
