import { getDownloadText } from '../lib/download';
import DownloadIcon from './download-icon';

const DownloadButton = () => {
  const handleClick = () => {
    window.alert('Download functionality is not implemented yet.');
  };

  return (
    <button
      className="download-button"
      name="download-button"
      aria-label="Download DuckDuckGo"
      title="Download DuckDuckGo"
      onClick={handleClick}
    >
      <DownloadIcon />
      Download DuckDuckGo for {getDownloadText() ?? 'your device'}
    </button>
  );
};

export default DownloadButton;
