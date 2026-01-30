Navbar.vue
<script setup lang="ts">
import { ShoppingBasket } from 'lucide-vue-next'
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center pointer-events-none">
    <div class="pointer-events-auto px-6 py-3 rounded-full flex items-center justify-between w-full max-w-5xl shadow-xl shadow-slate-200/60 bg-white/80 backdrop-blur-xl border border-white/40 ring-1 ring-slate-900/5">

      <a
          href="/"
          class="flex items-center gap-3 select-none hover:opacity-80 transition-opacity duration-200 cursor-pointer"
      >
        <div class="w-9 h-9 bg-[#FB325A] rounded-xl flex items-center justify-center font-bold text-white">
          R
        </div>
        <span class="font-black text-xl tracking-wide text-slate-900">RAVALE</span>
      </a>

      <div class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
        <a href="#gamemodes" class="hover:text-[#FB325A] transition-colors">Gamemodes</a>
        <a href="#stats" class="hover:text-[#FB325A] transition-colors">Stats</a>
      </div>

      <a href="https://store.ravale.net" target="_blank" class="flex items-center gap-2.5 bg-[#FB325A] text-white pl-4 pr-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#d92b4d] transition-all duration-300 shadow-lg shadow-[#FB325A]/25 hover:shadow-xl hover:shadow-[#FB325A]/40 transform hover:-translate-y-0.5 group">
        <ShoppingBasket :size="18" :stroke-width="2.5" class="group-hover:-rotate-12 transition-transform duration-300" />
        <span class="tracking-wide">STORE</span>
      </a>
    </div>
  </nav>
</template>