import React from "react";

export default function TextInput(props) {
  const { id, type, placeholder, clas, style } = props;

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

  var styleSelected = styles[style] || styles['default'];
  
  return (
    <>
      <input
        id={id}
        type='type'
        name='default'
        placeholder={placeholder}
        class={clas + ' ' + styleSelected}
      />
    </>
  );
}
