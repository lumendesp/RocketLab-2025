import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

// o componente que usar o CartContext, vai poder acessar essas coisas
interface CartContextType {
  cartItems: CartItem[]; // itens que estão no carrinho
  addToCart: (item: CartItem) => void; // adicionar item ao carrinho
  removeFromCart: (id: number) => void; // remover item do carrinho
  decreaseQuantity: (id: number) => void; // diminuir a quantidade no carrinho
  clearCart: () => void; // limpar todo o carrinho
  isVisible: boolean; // visibilidade da barra lateral do carrinho
  toggleCart: () => void; // abrir ou fechar a barra
  orders: CartItem[][]; // os pedidos do carrinho
  saveOrder: () => void; // salvar o pedido
}

// o contexto é como se fosse um canal de comunicação, é só a estrutura, a definição do que pode ser compartilhado
// createContext cria um contexto React (permite compartilhar os dados entre componentes)
// ou o contexto tem o formato definido no CartContextType ou é nulo
export const CartContext = createContext<CartContextType | null>(null);

// o provider é quem realmente fornece os dados pro contexto, ou seja, é onde é definido os dados e as funções que vão ser compartilhadas. exemplo: dentro de um componente, tem um h1, esse h1 é passado como children. quando eu englobo minha aplicação no meu provider, todos os componentes dentro dela vão ser children.
// recebe {children} -> uma propriedade do react, representa qualquer coisa colocada dentro de um componente
// ReactNode -> pode ser qualquer coisa renderizável no react
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<CartItem[][]>([]);

  const [isVisible, setIsVisible] = useState(false);

  // pegando os dados do localStorage
  useEffect(() => {
    const cartData = localStorage.getItem("cartItems");
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  // salvando os dados no localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const itemExists = prev.find((i) => i.id === item.id);
      if (itemExists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // carregando orders do localStorage
  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // salvando orders no localStorage
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsVisible((prev) => !prev);
  };

  const saveOrder = () => {
    if (cartItems.length === 0) return;
    setOrders((prev) => [...prev, cartItems]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        isVisible,
        toggleCart,
        orders,
        saveOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
