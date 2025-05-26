import { useContext } from "react";
import { BsCartCheck, BsPlus, BsDash } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import { CartContext } from "../context/CartContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartSidebar = ({
  setSearchText,
}: {
  setSearchText: (text: string) => void;
}) => {
  const cart = useContext(CartContext);

  if (!cart) return null;

  const {
    cartItems,
    isVisible,
    saveOrder,
    toggleCart,
    clearCart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  } = cart;

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalQuantity = cart?.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const handleCheckout = () => {
    toast.success("Compra finalizada com sucesso!", {
      autoClose: 2000,
    });
    saveOrder();
    clearCart(); // limpa os itens do carrinho
    toggleCart(); // fecha o sidebar
  };

  const handleClose = () => {
    setSearchText(""); // limpa o texto da busca
    toggleCart();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 z-50 flex transition-all duration-300 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* quando clicar fora do carrinho, vai fechar ele */}
      <div className="flex-1" onClick={handleClose} />

      {/* o carrinho está aqui */}
      <div className="h-full w-full sm:w-[500px] bg-white p-6 overflow-y-auto z-100">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-semibold">Seu Carrinho</p>
          <IoCloseOutline
            size={25}
            onClick={handleClose}
            className="cursor-pointer"
          />
        </div>
        {cartItems.length === 0 ? (
          <p className="text-gray-700">Seu carrinho está vazio.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-36 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    R$ {item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      className="bg-gray-200 p-1 rounded"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <BsDash />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-200 p-1 rounded"
                      onClick={() => addToCart(item)}
                    >
                      <BsPlus />
                    </button>
                  </div>
                </div>
                <FaTrashCan
                  size={18}
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          ))
        )}
        <p className="text-lg font-semibold mb-4">
          Total: R$ {total.toFixed(2)}
        </p>
        {totalQuantity > 0 ? (
          <>
            <button
              className="bg-blue-600 text-white w-full py-3 mb-3 rounded flex justify-center items-center gap-2 hover:bg-blue-700 transition"
              onClick={handleCheckout}
            >
              <BsCartCheck /> Finalizar Compra
            </button>
            <button
              className="bg-red-600 text-white w-full py-3 rounded flex justify-center items-center gap-2 hover:bg-blue-700 transition"
              onClick={() => clearCart()}
            >
              <FaTrashCan /> Limpar Carrinho
            </button>
          </>
        ) : (
          <>
            <button className="bg-gray-600 text-white w-full py-3 mb-3 rounded flex justify-center items-center gap-2 cursor-default">
              <BsCartCheck /> Finalizar Compra
            </button>
            <button className="bg-gray-600 text-white w-full py-3 rounded flex justify-center items-center gap-2 cursor-default">
              <FaTrashCan /> Limpar Carrinho
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
