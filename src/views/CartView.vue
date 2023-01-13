<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useShopStore } from "../stores/shop";

const shop = useShopStore();
</script>

<template>
  <div>
    <h2 class="text-2xl">Shopping Cart</h2>
    
    <div v-if="shop.cartQuantity > 0" class="flex flex-col lg:flex-row lg:gap-6">
      <div class="divide-y divide-gray-300 lg:w-2/3">
        <div v-for="item in shop.cart" :key="item.id" class="py-6 flex gap-4">
          <img class="w-32 bg-beige rounded-md" :src="item.photo" />
          <div class="flex justify-between w-full">
            <div class="w-9">
              <div>{{ item.title }}</div>
              <div class="text-sm">${{ item.price / 100 }}</div>
            </div>

            <div>
              <select
                class="bg-white border border-gray-300 rounded px-2 py-1"
                v-model.number="item.quantity"
              >
                <option v-for="i in item.quantity > 10 ? item.quantity : 10">
                  {{ i }}
                </option>
              </select>
            </div>

            <div>
              <XMarkIcon
                class="w-5 h-5 text-gray-500 hover:text-black cursor-pointer"
                @click="shop.removeItem(item)"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 rounded-md p-6 lg:w-1/3 flex flex-col gap-6">
        <h3 class="text-lg">Order summary</h3>

        <div class="divide-y divide-gray-300">
          <div class="py-3 flex justify-between">
            <div>Subtotal</div>
            <div>${{ shop.cartSubtotal / 100 }}</div>
          </div>

          <div class="py-3 flex justify-between">
            <div>Shipping</div>
            <div>${{ shop.cartShipping / 100 }}</div>
          </div>

          <div class="py-3 flex justify-between">
            <div>Tax</div>
            <div>${{ (shop.cartTax / 100).toFixed(2) }}</div>
          </div>

          <div class="py-3 flex justify-between font-bold">
            <div>Order total</div>
            <div>${{ (shop.cartTotal / 100).toFixed(2) }}</div>
          </div>
        </div>

        <button class="flex justify-center bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-500 text-white rounded-md p-3 w-full">
          Checkout
        </button>
      </div>
    </div>

    <div v-else class="mt-10">
      Nothing here, yet!
    </div>
  </div>
</template>
