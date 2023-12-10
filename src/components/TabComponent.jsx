import React, { useState } from 'react';
import HtmlReactParser from "html-react-parser"
const TabComponent = ({discription, fragrance, ingredients}) => {
  const [activeTab, setActiveTab] = useState('chat');

  const tabBtnStyle = {
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    padding: '8px 16px',
    marginRight: '10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };



  const renderTabContent = () => {
    switch (activeTab) {
      case 'chat':
        return <div>{HtmlReactParser(discription)}</div>;
      case 'status':
        return <div>{HtmlReactParser(fragrance)}</div>;
      case 'call':
        return <div>{HtmlReactParser(ingredients)}</div>;
      default:
        return <div>{HtmlReactParser(discription)}</div>;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column',  }}>
      <div className=' mt-8 mb-4 border-b-[1px] flex justify-around'>
        <button  onClick={() => setActiveTab('chat')}>
        <p className='px-2'>DESCRIPTION</p> 
        {activeTab === 'chat' &&  <hr className=" h-[3px] bg-blue-600" />}
        </button>
        
        <button onClick={() => setActiveTab('status')} >
        <p className='px-2'>FRAGRANCE</p> 
        {activeTab === 'status' &&  <hr className=" h-[3px] bg-blue-600" /> }
        </button>
        <button onClick={() => setActiveTab('call')}>
         <p className='px-2'>INGREDIENTS</p> 
        {activeTab === 'call' &&  <hr className=" h-[3px] bg-blue-600" /> }
        </button>
      </div>
      <div style={{ flexGrow: 1, padding: '1rem' }}>{renderTabContent()}</div>
    </div>
  );
};

export default TabComponent;
