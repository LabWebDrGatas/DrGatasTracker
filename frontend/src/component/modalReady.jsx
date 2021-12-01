import React, { useEffect, useState } from 'react';
import '../css/modal.css'
import ImageUpload from './ImageUpload';
import Button from './button';
import { useHttpClient } from '../hooks/http-hook';
import { useFormHook } from '../hooks/form-hook';
import './ModalReady.css';

const ModalReady = (props) => {

    const [comment, setComment] = useState();

    const handleComment = (e) => {
        setComment(e.target.value);
    }

    const { isLoading, error, sendRequest, clearError } = useHttpClient();  
    const [formState, inputHandler] = useFormHook(
        {
          image: {
            value: null,
            isValid: true
          }
        },
        true
    );

    

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
                        <h2>Puedes enviarle un comentario al cliente</h2>
                        <input class="comment-input" placeholder="Comentario" type="text" name="comment" onChange={handleComment}/>
                        <ImageUpload
                            id="image"
                            center
                            onInput={inputHandler}
                        />
                        <Button
                            onClick={props.handleSubmit(formState, comment)}
                            text='Enviar información'
                        />
                    </div>
                    
                </div>
            </div>
            : null }
        </div>
    )
}

export default ModalReady;