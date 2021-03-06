import React from "react";
import { estados } from "./../state/estados";
import { apiAddress } from "../connections";

const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
};

export default function PedidoCard({
  order,
  updateOneOrder,
}) {

  const foto = order.image
    ? apiAddress + '/' + order.image
    : "https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80";
  const servicio = order.servicioExtra
    ? "Resolado + " + order.servicioExtra
    : "Resolado";
  const zapatos = order.numRastreo + " | " + order.marca + " " + order.modelo;
  const buzon = order.buzon || "Sierra Elevation";
  const estado = estados[order.estado];
  const ultimoMovimiento = formatDate(order.historialEstados[0].fecha) || "05-03-2021";
  const textoBotonSiguiente = (order.estado==0 && "Aceptar") || "Avanzar";
  const textoBotonRegresar = (order.estado==0 && "Rechazar") || "Retroceder";

  
  function handleBackButton() {
    if (window.confirm("¿Estás seguro de que quieres retroceder el estado del pedido?")) {
      order.estado -= 1;
      order.historialEstados = [{fecha: new Date(), estado: order.estado}, ...order.historialEstados];
      updateOneOrder(order);
    }
  }
  function handleNextButton() {
    order.estado += 1;
    order.historialEstados = [{fecha: new Date(), estado: order.estado}, ...order.historialEstados];
    updateOneOrder(order);
  }
  return (
    <>
      <div class='bg-gray shadow-md rounded-3xl p-4 max-w-md'>
        <div class='flex'>
          <div class=' h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3'>
            <img
              src={foto}
              alt='gatas'
              class=' w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl'
            />
          </div>
          <div class=' flex-auto ml-3 justify-evenly py-2'>
            <div class='flex flex-wrap '>
              <div
                id='servicio'
                class='w-full flex-none text-xs text-blue-700 font-medium '
              >
                {servicio}
              </div>
              <h2 id='' class='flex-auto text-lg font-medium'>
                {zapatos}
              </h2>
            </div>
            <p class='mt-3'></p>
            <div class='flex py-4  text-sm text-gray-500'>
              <div class='flex-1 inline-flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 mr-3 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  ></path>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  ></path>
                </svg>
                <p class=''>{buzon}</p>
              </div>
              <div class='flex-1 inline-flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 mr-2 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
                <div class=''>
                  <p>{estado}</p>
                  <p class=''>{ultimoMovimiento}</p>
                </div>
              </div>
            </div>
            <div class='flex p-4 pb-2 border-t border-gray-200 '></div>
            <div class='row-span-2 col-span-2 flex space-x-3 text-sm font-medium'>
              <div class='flex-auto flex space-x-3'>
                <button
                  class='mb-2 md:mb-0 bg-red-600 px-4 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-red-500 inline-flex items-center space-x-2 '
                  onClick={handleBackButton}
                >
                  <span>{textoBotonRegresar}</span>
                </button>
              </div>
              <button
                class='mb-2 md:mb-0 bg-green-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-green-500'
                onClick={handleNextButton}
              >
                {textoBotonSiguiente}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
