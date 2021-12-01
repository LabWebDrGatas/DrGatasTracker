import React from "react";
import Button from "./../component/button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiAddress } from "../connections";
import ImageUpload from "../component/ImageUpload";
import { useFormHook } from "../hooks/form-hook";
import { useHttpClient } from "../hooks/http-hook";

export default function Solicitud() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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

  console.log(errors)

  const onSubmit = async data => {
    console.log("submit clicked");
    console.log(JSON.stringify(data));
    try {
      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('cliente', data.cliente);
      formData.append('buzon', data.buzon);
      formData.append('marca', data.marca);
      formData.append('modelo', data.modelo);
      formData.append('talla', data.talla);
      formData.append('comentarioCliente', data.comentarioCliente);
      formData.append('materialSuela', data.materialSuela);
      formData.append('servicioExtra', data.servicioExtra);
      formData.append('image', formState.inputs.image.value);

      for (let value of formData.values()) {
        console.log(value);
      }

      let res = await sendRequest(
        apiAddress + '/createPedido',
        'POST',
        formData
      )
        alert("Pedido creado");
    } catch (error) {
      console.log(error);
      alert("Error al crear el pedido");
    }
    /*
    await axios.post(
      apiAddress + "/createPedido",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },        
      }
    ).then(res => {
      console.log(res);
      console.log(res.data);
      res.status === 200
        ? alert("Pedido creado")
        : alert("Error al crear el pedido");
    }).catch(err => {
      console.log(err);
      alert("Error al crear el pedido");
    });
    */
  };

  return (
    <>
      <div class='container py-10'>
        <div class='flex'>
          <p class='text-5xl mx-auto'>Nuevo pedido</p>
        </div>
      </div>
      <div class='container py-2'>
        <form
          id='form-pedido'
          role='form'
          class='space-y-7'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class='space-y-1'>
            <h3>Cliente</h3>
            <div class='flex-col md:flex-row space-x-4'>
              <input
                class={(errors.cliente && "input-warning") || "input-default"}
                placeholder='Nombre'
                name='cliente'
                {...register("cliente", {
                  required: {
                    value: true,
                    message: "Favor de introducir un nombre",
                  },
                  maxLength: {
                    value: 50,
                    message: "Debe tener menos de 50 caracteres",
                  },
                })}
              />
              <input
                class={(errors.email && "input-warning") || "input-default"}
                placeholder='Email'
                name='email'
                {...register("email", {
                  required: {
                    value: true,
                    message: "Favor de introducir un correo electrónico",
                  },
                  pattern: {
                    value: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/,
                    message: "Debe ser un correo válido: ejemplo@mail.com",
                  },
                })}
              />
            </div>
          </div>
          <div class='space-y-1'>
            <h3 for='buzon'>Buzón</h3>
            <select
              class='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
              name='buzon'
              id='buzon'
              {...register("buzon", {
                required: true,
              })}
            >
              <option value='RockCamp'>RockCamp</option>
              <option value='Sierra Elevation'>Sierra Elevation</option>
              <option value='Pico Norte'>Pico Norte</option>
              <option value='Delta'>Delta</option>
              <option value='Mad Complex'>Mad Complex</option>
            </select>
          </div>
          <div class='space-y-1'>
            <h3>Zapatos</h3>
            <div class='grid grid-cols-6 gap-4'>
              <input
                class={`col-span-3  
                  ${(errors.marca && "input-warning") || "input-default"}`}
                placeholder='Marca'
                name='marca'
                {...register("marca", {
                  required: {
                    value: true,
                    message: "Debe especificar la marca de los zapatos",
                  },
                })}
              />
              <input
                class={`col-span-3  
                  ${(errors.modelo && "input-warning") || "input-default"}`}
                placeholder='Modelo'
                name='modelo'
                {...register("modelo", {
                  required: {
                    value: true,
                    message: "Debe especificar el modelo de los zapatos",
                  },
                })}
              />
              <input
                class={`col-span-1  
                  ${(errors.talla && "input-warning") || "input-default"}`}
                placeholder='Talla EUR'
                name='talla'
                type='decimal'
                {...register("talla", {
                  required: {
                    value: true,
                    message:
                      "Debe especificar la talla de los zapatos (en EUR)",
                  },
                })}
              />
              <textarea
                placeholder='Comentario'
                class={`col-span-5
                  ${(errors.comentarioCliente && "input-warning") || "input-default"}`}
                name='comentarioCliente'
                {...register("comentarioCliente")}
              />
            </div>
          </div>
          <div class='space-y-1 flex-col'>
            <h3>Servicio:</h3>
            <p class='text-xl' for='material_suela'>
              Material suela
            </p>
            <select
              class='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
              id='material_suela'
              name='materialSuela'
              {...register("materialSuela")}
            >
              <option value='madrock'>Mad Rock</option>
              <option value='davos'>Davos</option>
            </select>
          </div>
          <div>
            <p class='text-xl'>Servicio Adicional:</p>
            <label>
              <input
                type='radio'
                name='servicioExtra'
                value='Cambio de liga'
                {...register("servicioExtra")}
              />
              Cambio de liga
            </label>
            <br />
            <label>
              <input
                type='radio'
                name='servicioExtra'
                value='Parche'
                {...register("servicioExtra")}
              />
              Parche
            </label>
            <br />
            <label>
              <input
                aria-checked='true'
                type='radio'
                name='servicioExtra'
                value='Ninguno'
                checked
                {...register("servicioExtra")}
              />
              Ninguno
            </label>
            <ImageUpload
                  id="image"
                  center
                  onInput={inputHandler}
                />{" "}
          </div>
          <div class='mb-2 '>
            <Button id='submit-button' type='submit' text='Agregar' />
          </div>
        </form>
      </div>
    </>
  );
}
