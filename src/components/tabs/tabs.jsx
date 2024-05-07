import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(null);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <>
      <div className="tabs-container">
        <div className="heading">
          {tabsContent.map((tabItem, index) => (
            <div onClick={() => handleOnClick(index)} key={tabItem.label} className={`tab-item ${currentTabIndex === index ? 'active' : ''}`}>
              <span className="label">{tabItem.label}</span>
            </div>
          ))}
        </div>
        <div className="content" style={{ color: "red" }}>
          {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
      </div>
    </>
  );
}
