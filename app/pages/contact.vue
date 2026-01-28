<!-- pages/contact.vue -->
<script setup lang="ts">
import {
  Mail, Copy, Check,
  LifeBuoy, ArrowRight, Clock
} from 'lucide-vue-next'

const email = 'support@ravale.net'
const copied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}
</script>

<template>
  <main class="relative z-10">

    <!-- Hero Section -->
    <section class="relative pt-36 pb-12 md:pt-48 md:pb-20 px-6">
      <div class="max-w-4xl mx-auto text-center">

        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
          <LifeBuoy :size="16" class="text-[#FB325A]" />
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Help Center
          </span>
        </div>

        <h1 class="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 drop-shadow-sm">
          Get in Touch
        </h1>
        <p class="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Need assistance with a payment, found a bug, or just want to chat?
          Choose your preferred method below.
        </p>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="pb-24 px-6">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        <!-- Method 1: Discord (Primary) -->
        <div class="group relative bg-white rounded-3xl p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 hover:border-[#5865F2]/50 hover:shadow-[#5865F2]/10 transition-all duration-300 flex flex-col h-full">
          <!-- Recommended Badge -->
          <div class="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#5865F2]/10 text-[#5865F2] text-xs font-bold uppercase tracking-wider">
            Recommended
          </div>

          <div class="w-16 h-16 rounded-2xl bg-[#5865F2] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#5865F2]/30 group-hover:scale-110 transition-transform duration-300">
            <!-- Discord SVG -->
            <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
            </svg>
          </div>

          <h3 class="text-3xl font-black text-slate-900 mb-4">Discord Support</h3>
          <p class="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
            Join our community Discord to open a support ticket. This is the fastest way to reach our staff team, report players, or appeal bans.
          </p>

          <div class="flex items-center gap-2 mb-8 text-sm font-bold text-slate-400">
            <Clock :size="16" />
            <span>Avg. response time: &lt; 2 hours</span>
          </div>

          <a href="#" target="_blank" class="w-full py-4 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-center transition-colors shadow-xl shadow-[#5865F2]/20 hover:shadow-[#5865F2]/30 flex items-center justify-center gap-2">
            Join Discord
            <ArrowRight :size="18" />
          </a>
        </div>

        <!-- Method 2: Email -->
        <div class="group relative bg-white rounded-3xl p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 hover:border-[#FB325A]/30 hover:shadow-[#FB325A]/10 transition-all duration-300 flex flex-col h-full">

          <div class="w-16 h-16 rounded-2xl bg-[#FB325A] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#FB325A]/30 group-hover:scale-110 transition-transform duration-300">
            <Mail :size="32" :stroke-width="2" />
          </div>

          <h3 class="text-3xl font-black text-slate-900 mb-4">Email Us</h3>
          <p class="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
            For business inquiries, payment issues that cannot be resolved via Discord, or other formal administrative matters.
          </p>

          <div class="flex items-center gap-2 mb-8 text-sm font-bold text-slate-400">
            <Clock :size="16" />
            <span>Avg. response time: 24 - 48 hours</span>
          </div>

          <!-- Email Copy Box -->
          <button
              @click="copyEmail"
              class="relative w-full py-4 rounded-xl border-2 border-slate-100 bg-slate-50 hover:bg-white hover:border-[#FB325A] text-slate-600 hover:text-slate-900 font-bold transition-all flex items-center justify-between px-6 group/btn"
          >
            <span class="font-mono text-lg">{{ email }}</span>

            <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 group-hover/btn:border-[#FB325A] group-hover/btn:text-[#FB325A] transition-colors">
              <transition
                  enter-active-class="duration-200 ease-out"
                  enter-from-class="opacity-0 scale-50"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="duration-200 ease-in"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-50"
              >
                <Check v-if="copied" class="absolute" :size="16" :stroke-width="3" />
                <Copy v-else class="absolute" :size="16" />
              </transition>
            </div>
          </button>

        </div>

      </div>
    </section>

  </main>
</template>