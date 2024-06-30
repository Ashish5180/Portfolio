import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="h-screen">
      {isAppLoading ? (
        <div className="flex justify-center items-center h-full">
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="hourglass-loading"
            colors={['#306cce', '#72a1ed']}
          />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default App;
