import React from "react";


export default function PedidoCard(props) {

  // const { image, servicio } = props.pedido
  var pedido = props.pedido
  const foto =
    props.pedido.img ||
    "https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80";
  const servicio = 'Resolado + ' + pedido.servicio || 'Resolado'
  const zapatos = pedido.marca + ' ' + pedido.modelo || 'Scarpa Drago';
  const buzon = pedido.buzon || 'Sierra Elevation';
  const ultimoMovimiento = pedido.ultimomovimiento || '05-03-2021';
  const textoBotonSiguiente = pedido.textButtonNext || 'Aceptar';
  const textoBotonRegresar = pedido.textButtonNext || 'Rechazar';

  function handleBackButton() {
    pedido.estado -= 1
    console.log(pedido.estado)
    // pedido.save()
  }
  function handleNextButton() {
    pedido.estado += 1
    // pedido.save()
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
                <p class=''>{ultimoMovimiento}</p>
              </div>
            </div>
            <div class='flex p-4 pb-2 border-t border-gray-200 '></div>
            <div class='row-span-2 col-span-2 flex space-x-3 text-sm font-medium'>
              <div class='flex-auto flex space-x-3'>
                <button
                  class='mb-2 md:mb-0 bg-red-600 px-4 py-2 shadow-sm tracking-wider border text-gray-100 rounded-full hover:bg-red-500 inline-flex items-center space-x-2 '
                  onClick={handleBackButton}
                >
                  <span>{textoBotonRegresar}</span>
                </button>
              </div>
              <button
                class='mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800'
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
