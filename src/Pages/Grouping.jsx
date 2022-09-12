import React, { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
const override = () => {};
const Grouping = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section>
      <div style={{ margin: "20rem 40rem",textAlign:'center' }}>
        {loading && (
          <>
            <PulseLoader color="#06d170" />
            <p>در حال بروز رسانی هستیم</p>
          </>
        )}
      </div>
    </section>
  );
};

export default Grouping;
