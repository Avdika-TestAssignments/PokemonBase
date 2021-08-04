import React from 'react';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";

const Spinner = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress &&
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="BallTriangle" color="#1b3a79" height="80" width="80" />
    </div>
  );
}

export default Spinner;
