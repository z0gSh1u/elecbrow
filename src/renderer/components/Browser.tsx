import React from 'react';
import { Tab } from './App';
import '../styles/Browser.css';

interface BrowserProps {
  tab: Tab;
}

const Browser: React.FC<BrowserProps> = ({ tab }) => {
  return (
    <div className="browser-container">
      {tab.url === 'about:blank' ? (
        <div className="empty-page">
          <h1>New Tab</h1>
          <p>Enter a URL in the address bar above to start browsing.</p>
        </div>
      ) : (
        // This is just a placeholder - actual content is rendered by BrowserView in the main process
        <div className="content-view" id={`browser-view-container-${tab.id}`}></div>
      )}
    </div>
  );
};

export default Browser;
