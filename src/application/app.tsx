import React from 'react';
import IpcService from '../IpcService';

function App(): JSX.Element {
  const handler = () => {
    const service = IpcService.getInstance();

    service.send('SVN_CHANNEL', {});
  };
  return (
    <div>
      <button type="submit" onClick={handler}>
        clicked
      </button>
    </div>
  );
}

export default App;
