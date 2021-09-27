import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <div class='footer bg-gray-700 my-10'>
        <div class='container mx-auto py-10 text-gray-200'>
          <div class='flex flex-col justify-evenly first:items-center md:flex-row md:space-x-20 gap-y-5'>
            <div class='flex-initial w-1/6'>
              <a id='footer-logo' href='/Home' class='logo_footer'>
                <img
                  class='footer-logo'
                  src='https://i.ibb.co/0255Nmc/imagotipo-amarillo@0.5x.png'
                  alt='imagotipo Dr Gatas'
                />
              </a>
            </div>
            <div class='address flex-initial'>
              <h3 class='text-lg font-bold'>Dirección</h3>
              <ul class='loca'>
                <li>
                  <p>RockCamp, Ciénega de González, Nuevo León, México</p>
                </li>
                <li>
                  <a href='#'></a>WhatsApp (81 1998 9735)
                </li>
                <li>
                  <a href='#'></a>drgatas@gmail.com
                </li>
              </ul>
            </div>
            <div>
              <div class='social flex-1'>
                <h3 class='text-lg font-bold'>Redes sociales</h3>
                <ul class='Menu_footer list-inside underline'>
                  <li>
                    <a href='https://facebook.com/DrGatas'>Facebook</a>{" "}
                  </li>
                  <li>
                    <a href='https://instagram.com/doctorgatas'>Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
