import React, { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loader() {
  return (
    <div className="sweet-loading">
      <SyncLoader
        color="#9a6d6d"
        loading="true"
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
