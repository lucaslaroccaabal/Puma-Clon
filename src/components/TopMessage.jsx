import { useState } from "react";

const TopMessage = ({ text }) => {
  const [message, setMessage] = useState(text);
  return (
    <div className="bg-[#ae946d]">
      <h1 className="text-white text-center text-sm p-5">{message}</h1>
    </div>
  );
};
export default TopMessage;
