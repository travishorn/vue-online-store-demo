import { defineStore } from "pinia";
import coatImage from "../assets/coat_600.png";
import heelsImage from "../assets/heels_600.png";
import hoodieImage from "../assets/hoodie_600.png";
import jacketImage from "../assets/jacket_600.png";
import shirtImage from "../assets/shirt_600.png";
import sneakersImage from "../assets/sneakers_600.png";

export const useShopStore = defineStore("shop", {
  state: () => {
    return {
      forSale: [
        {
          id: "coat",
          title: "Coat",
          price: 2999,
          photo: coatImage,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh. Varius duis at consectetur lorem donec massa sapien faucibus.",
        },
        {
          id: "heels",
          title: "Heels",
          price: 2124,
          photo: heelsImage,
          description: "Pellentesque sit amet porttitor eget dolor morbi. Cras pulvinar mattis nunc sed blandit. Sem fringilla ut morbi tincidunt.",
        },
        {
          id: "hoodie",
          title: "Hoodie",
          price: 2499,
          photo: hoodieImage,
          description: "Urna porttitor rhoncus dolor purus non enim praesent elementum. Morbi non arcu risus quis varius quam quisque id diam. Volutpat commodo sed egestas egestas fringilla phasellus faucibus.",
        },
        {
          id: "jacket",
          title: "Jacket",
          price: 2800,
          photo: jacketImage,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh. Varius duis at consectetur lorem donec massa sapien faucibus.",
        },
        {
          id: "shirt",
          title: "Shirt",
          price: 1190,
          photo: shirtImage,
          description: "Pellentesque sit amet porttitor eget dolor morbi. Cras pulvinar mattis nunc sed blandit. Sem fringilla ut morbi tincidunt.",
        },
        {
          id: "sneakers",
          title: "Sneakers",
          price: 2699,
          photo: sneakersImage,
          description: "Urna porttitor rhoncus dolor purus non enim praesent elementum. Morbi non arcu risus quis varius quam quisque id diam. Volutpat commodo sed egestas egestas fringilla phasellus faucibus.",
        },
      ],
      cart: [],
      addedMessageShown: false,
    };
  },
  getters: {
    cartQuantity() {
      return this.cart.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0);
    },
    cartSubtotal() {
      return this.cart.reduce((prev, curr) => {
        return prev + curr.price * curr.quantity;
      }, 0);
    },
    cartShipping() {
      return (Math.ceil(this.cartQuantity / 10)) * 500;
    },
    cartTax() {
      return (this.cartSubtotal * 0.08);
    },
    cartTotal() {
      return this.cartSubtotal + this.cartShipping + this.cartTax;
    },
  },
  actions: {
    addToCart(item) {
      const existingId = this.cart
        .findIndex((cartItem) => cartItem.id === item.id);

      if (existingId !== -1) {
        this.cart[existingId].quantity += 1;
      } else {
        this.cart.push({
          ...item,
          quantity: 1,
        });
      }

      this.addedMessageShown = true;

      setTimeout(() => {
        this.addedMessageShown = false;
      }, 2000);
    },
    removeItem(removedItem) {
      this.cart = this.cart.filter((item) => item.id !== removedItem.id);
    },
  },
});
