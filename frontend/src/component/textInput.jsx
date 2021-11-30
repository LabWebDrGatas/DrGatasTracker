import React from "react";

export default function TextInput(props) {
  const {className, state} = props;

  const styles = {
    default:
      "px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200",
    success:
      "px-4 py-2 rounded-lg border border-green-500 text-green-600 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-200",
    warning:
      "px-4 py-2 rounded-lg border border-yellow-500 text-yellow-600 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-200",
    error:
      "px-4 py-2 rounded-lg border border-red-500 text-red-600 placeholder-red-600 focus:outline-none focus:ring-2 focus:ring-red-200",
  };

  const currentState = styles[state] ?? styles['default'];
  
  return (
    <>
      <input
        {...props}
        className={className + ' ' + currentState}
      />
    </>
  );
}
