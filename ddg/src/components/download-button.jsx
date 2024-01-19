import React from 'react';

const DownloadButton = () => {
  return (
    <a className="download-button" href='/'>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" height="16">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 .5a.75.75 0 01.75.75v8.264l2.986-2.81a.75.75 0 111.028 1.092l-4.25 4a.75.75 0 01-1.028 0l-4.25-4a.75.75 0 111.028-1.092l2.986 2.81V1.25A.75.75 0 018 .5zm-5.25 13a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H2.75z" fill="currentColor">
          </path>
        </svg>
      Download DuckDuckGo Browser
    </a>
  );
};

export default DownloadButton;
