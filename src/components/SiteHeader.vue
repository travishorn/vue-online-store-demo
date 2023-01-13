<script setup>
import { ShoppingBagIcon } from "@heroicons/vue/24/outline";
import { useShopStore } from "../stores/shop";

const shop = useShopStore();
</script>

<template>
  <div class="flex justify-between items-center">
    <RouterLink class="text-3xl" to="/">Vue Online Store</RouterLink>

    <RouterLink class="flex gap-2 text-gray-500 hover:text-black" to="/cart">
      <ShoppingBagIcon class="h-6 w-6" />
      <span class="text-black">{{ shop.cartQuantity }}</span>
    </RouterLink>
  </div>
</template>