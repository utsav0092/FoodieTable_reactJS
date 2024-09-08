import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { TiTick } from "react-icons/ti";

const Success = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <TiTick className="text-6xl absolute bg-green-500 text-white rounded-full top-[260px] left-[600px]" />
          <h2 className="text-3xl font-semibold mb-4 text-center bg-yellow-400 rounded-lg p-4">
            Order Successful!
          </h2>
          <p className="font-semibold">Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;