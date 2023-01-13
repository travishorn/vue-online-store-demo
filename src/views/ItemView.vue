<script setup>
import { useRoute } from "vue-router";
import { CheckIcon } from "@heroicons/vue/24/outline";
import { useShopStore } from "../stores/shop";

const route = useRoute();
const shop = useShopStore();
const item = shop.forSale.find((item) => item.id === route.params.id);

const addToCart = () => {
  shop.addToCart(item);
};
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6">
    <img class="rounded-xl bg-beige" :src="item.photo" />

    <div class="flex flex-col gap-6 md:gap-8">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold">{{ item.title }}</h2>

        <div class="text-2xl">${{ item.price / 100 }}</div>

        <div>{{ item.description }}</div>
      </div>

      <button
        class="flex justify-center bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-500 text-white rounded-md p-3"
        @click="addToCart"
      >
        <transition mode="out-in">
          <div v-if="shop.addedMessageShown" class="flex gap-2">
            <CheckIcon class="w-6 h-6" />
            Added to cart!
          </div>
          <div v-else>Add to cart</div>
        </transition>
      </button>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.25s;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
