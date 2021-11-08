import React from "react";
import TextInput from "../component/textInput";
import Button from './../component/button';

export default function Solicitud() {
  return (
    <>
      <div class='container py-10'>
        <div class='flex'>
          <p class='text-5xl mx-auto'>Nuevo pedido</p>
        </div>
      </div>
      <div class='container py-2'>
        <form id='form-pedido' role='form' class='space-y-7'>
          <div class='space-y-1'>
            <h3>Cliente</h3>
            <div class='flex-col md:flex-row space-x-4'>
              <TextInput placeholder='Nombre' style='warn' />
              <TextInput placeholder='Apellido' style='' />
              <TextInput placeholder='Email' style='' />
            </div>
          </div>
          <div class='space-y-1'>
            <h3 for='buzon'>Buzón</h3>
            <select
              class='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
              name='buzon'
              id='buzon'
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
              <TextInput
                clas='col-span-3'
                style='default'
                placeholder='Marca'
              />
              <TextInput clas='col-span-3' placeholder='Modelo' />
              <TextInput clas='col-span-1' placeholder='Talla EUR' />
              <textarea
                placeholder='Comentario'
                class='col-span-5 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200'
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
              name='material_suela'
            >
              <option value='madrock'>Mad Rock</option>
              <option value='davos'>Davos</option>
            </select>
          </div>
          <div>
            <p class='text-xl'>Servicio Adicional:</p>
            <label>
              <input type='radio' name='servicioextra' value='cambio_de_liga' />
              Cambio de liga
            </label>
            <br />
            <label>
              <input type='radio' name='servicioextra' value='parche' />
              Parche
            </label>
            <br />
            <label>
              <input
                aria-checked='true'
                type='radio'
                name='servicioextra'
                value='ninguno'
              />
              Ninguno
            </label>
          </div>
          <div class='mb-2 '>
            <Button
              id='submit-button'
              type='submit'
              text='Agregar'
            />
          </div>
        </form>
      </div>
    </>
  );
}
