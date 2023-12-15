<script setup>
defineProps({
  subTitle: String,
})
</script>

<template>
  <div class="h-screen w-full bg-gray-900 relative">
    <div
      class="w-[525px] h-[580px] absolute top-[115px] right-[250px] bg-cover bg-no-repeat"
      style="background-image: url('/src/assets/right-image-hero-1.png')"
    ></div>
    <div
      class="w-full h-full bg-no-repeat bg-cover flex gap-[120px] pl-[50px]"
      style="
        background-image: url('/src/assets/background-element-hero-section-1-1.png');
      "
    >
      <!-- icon start -->
      <div class="h-full w-max flex flex-col gap-[20px] justify-center">
        <div
          v-motion
          :enter="{
            scale: 1,
          }"
          :hovered="{
            scale: 1.1,
          }"
          class="social"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </div>
        <div
          v-motion
          :enter="{
            scale: 1,
          }"
          :hovered="{
            scale: 1.1,
          }"
          class="social"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </div>
        <div
          v-motion
          :enter="{
            scale: 1,
          }"
          :hovered="{
            scale: 1.1,
          }"
          class="social"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </div>
      </div>
      <!-- icon end -->

      <!-- title start -->
      <div class="flex h-full w-[475px] flex-col gap-[20px] pt-[150px]">
        <h1 class="text-white text-7xl whitespace-normal font-bold">
          We Provide Cyber <br />
          Solutions For Your Security.
        </h1>
        <p class="text-xl text-gray-400">{{ subTitle }}</p>
        <!-- button start -->
        <div class="w-full h-[57px] flex gap-[20px]">
          <button
            v-motion
            :enter="{ y: 0 }"
            :hovered="{ y: -4 }"
            class="button outline-none bg-blue-500"
          >
            Get Started
          </button>
          <button
            v-motion
            :enter="{ y: 0 }"
            :hovered="{ y: -4 }"
            class="button outline-none border-[0.5px] border-gray-500"
          >
            Contact Us
          </button>
        </div>
        <!-- button end -->
      </div>
      <!-- title end -->
    </div>
  </div>
</template>
