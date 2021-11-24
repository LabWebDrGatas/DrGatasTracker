import React from "react";

import PedidoCard from "../component/PedidoCard";

export default function PedidoScroller({
  orders,
  estado,
  defaultText,
  updateOneOrder,
}) {
  var filteredOrders = orders.filter((order) => order.estado == estado);
  return (
    <>
      <div class='overflow-x-scroll'>
        <div class='flex'>
          {filteredOrders.length === 0 && <p>{defaultText}</p>}
          {filteredOrders &&
            filteredOrders.map((order) => (
              <PedidoCard key={order.numPedido} order={order} updateOneOrder={updateOneOrder} />
            ))}
        </div>
      </div>
    </>
  );
}
