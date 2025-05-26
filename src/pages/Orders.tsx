import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Orders = () => {
  const cart = useContext(CartContext);
  if (!cart) return null;

  const { orders } = cart;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-blue-900 mb-8">
        Meus Pedidos
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">Você ainda não realizou nenhum pedido.</p>
      ) : (
        orders.map((order, index) => {
          const totalCompra = order.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          );

          return (
            <div key={index} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold">Pedido #{index + 1}</h3>
                <span className="text-sm font-normal text-gray-700">
                  (Total: R$ {totalCompra.toFixed(2)})
                </span>
              </div>

              <div className="flex flex-wrap gap-8">
                {order.map((item) => (
                  <div key={item.id} className="border p-4 rounded w-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded"
                    />
                    <p className="font-semibold mt-2">{item.title}</p>
                    <p className="text-sm text-gray-600">
                      Qtd: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total: R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;
