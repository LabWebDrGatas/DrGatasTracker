import React from 'react'

export default function Button({ type, onClick, text, id,}) {
  return (
    <div>
      <button
        id={id}
        class='font-bold place-self-right px-5 py-3 rounded-xl text-sm text-white bg-indigo-600 hover:bg-indigo-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all'
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
