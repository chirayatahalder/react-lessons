import { useState } from "react";

export default function MyInput({ type, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;
  return (
    <div>
      <input type={inputType} placeholder={placeholder} />
      {type === "password" && (
        <button
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
}
