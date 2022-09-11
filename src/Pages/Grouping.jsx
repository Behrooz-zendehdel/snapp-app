import React, { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const override = () => {};
const Grouping = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && (
        <>
          <PulseLoader color="#06d170" cssOverride={override} />
          <p>در حال بروز رسانی هستیم</p>
        </>
      )}
    </div>
  );
};

export default Grouping;
