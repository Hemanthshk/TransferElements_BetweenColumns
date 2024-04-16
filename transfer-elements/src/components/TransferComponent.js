// TransferComponent.js
import React, { useState, useEffect } from 'react';
import { Transfer } from "antd";
import axios from 'axios';

import './TransferComponent.css';

function TransferComponent() {
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://apis.ccbp.in/list-creation/lists')
      .then(response => {
        const data = response.data;
        const newMockData = data.map(item => ({
          key: item.id,
          title: `List ${item.list_number}: ${item.name}`,
          description: item.description || 'No description',
        }));
        setMockData(newMockData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };

  return (
    <Transfer
      dataSource={mockData}
      showSearch
      listStyle={{
        width: 250,
        height: 300
      }}
      operations={["Right", "Left"]}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={(item) => `${item.title}-${item.description}`}
    />
  );
}

export default TransferComponent;
