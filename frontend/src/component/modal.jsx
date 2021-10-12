import React, { useState } from 'react';
import '../css/modal.css'

const Modal = (props) => {

    return(
        <div className="myModal">
            {props.isVisible ? 
            <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50" style={{zIndex: 10}}>

                <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">

                    <div class="border-b px-4 py-2 flex justify-between items-center">
                        <h3 class="font-semibold text-lg">{props.title}</h3>
                        <button class="text-black close-modal" onClick={props.onClose}>X</button>
                    </div>

                    <div className="body">
                        {props.body}
                    </div>
                    <div class="flex justify-end items-center w-100 border-t p-3">
                        {props.footer}
                    </div>
                </div>
            </div>
            : null }
        </div>
    )
}

export default Modal;