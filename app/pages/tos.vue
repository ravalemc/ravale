<!-- pages/tos.vue -->
<script setup lang="ts">
import {
  Scale, FileText, CreditCard,
  ShieldAlert, Ban, HelpCircle,
  ScrollText, Gavel
} from 'lucide-vue-next'
</script>

<template>
  <main class="relative z-10">
    <section class="relative pt-36 pb-12 md:pt-48 md:pb-20 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <Scale :size="16" class="text-[#FB325A]" />
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Legal Documents
            </span>
          </div>

          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <Gavel :size="16" class="text-[#FB325A]" />
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Updated <span class="text-slate-900 font-black">Jan 2025</span>
            </span>
          </div>
        </div>

        <h1 class="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 drop-shadow-sm">
          Terms of Service
        </h1>
        <p class="text-xl text-slate-500 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
          By playing on Ravale or purchasing from our store, you agree to the following terms and conditions.
        </p>
      </div>
    </section>

    <section class="pb-24 px-6">
      <div class="max-w-4xl mx-auto flex flex-col gap-10">
        <div class="bg-red-50 border border-red-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start shadow-sm">
          <div class="p-4 bg-red-100 text-[#FB325A] rounded-2xl shrink-0">
            <CreditCard :size="32" :stroke-width="2.5" />
          </div>
          <div>
            <h2 class="text-2xl font-black text-slate-900 mb-4">Payments & Refund Policy</h2>
            <div class="text-slate-600 leading-relaxed text-lg">
              <p class="mb-4 font-medium text-slate-800">
                <strong>All sales are final.</strong> By making a purchase on the Ravale store, you authorize the transaction and agree that you are either the cardholder or have explicit permission from the cardholder.
              </p>
              <ul class="space-y-3 list-disc pl-5 marker:text-[#FB325A]">
                <li>We do <span class="font-bold text-slate-900">not</span> offer refunds, exchanges, or returns for any digital items or ranks.</li>
                <li>Attempting to chargeback or dispute a payment will result in an <span class="font-bold text-[#FB325A]">automatic, permanent ban</span> from the entire network and Buycraft/Tebex ecosystem.</li>
                <li>We reserve the right to change the price or contents of any package at any time.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
              <ScrollText :size="24" />
            </div>
            <h3 class="text-2xl font-black text-slate-900">1. Mojang Affiliation</h3>
          </div>
          <p class="text-slate-600 leading-relaxed font-medium text-lg">
            Ravale Network is in no way affiliated with, endorsed by, or associated with Mojang AB, Microsoft Corporation, or their respective partners. "Minecraft" is a trademark of Mojang Synergies AB. By playing on our server, you also agree to be bound by Mojang's End User License Agreement (EULA).
          </p>
        </div>

        <div class="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
              <ShieldAlert :size="24" />
            </div>
            <h3 class="text-2xl font-black text-slate-900">2. Account Responsibility</h3>
          </div>
          <p class="text-slate-600 leading-relaxed mb-4 font-medium text-lg">
            You are entirely responsible for the security of your Minecraft account. If your account is hacked, stolen, or used by another person to break server rules, <strong>your account will be held responsible</strong>.
          </p>
          <p class="text-slate-500 leading-relaxed">
            We do not transfer stats, ranks, or items between accounts, even if you lose access to your original account. Please enable two-factor authentication on your Microsoft account to ensure your safety.
          </p>
        </div>

        <div class="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
              <Ban :size="24" />
            </div>
            <h3 class="text-2xl font-black text-slate-900">3. Server Rights & Terminations</h3>
          </div>
          <div class="text-slate-600 leading-relaxed space-y-4 font-medium text-lg">
            <p>Ravale administration reserves the right to:</p>
            <ul class="space-y-3 pl-2">
              <li class="flex gap-3 items-start">
                <div class="w-2 h-2 rounded-full bg-slate-300 mt-2.5 shrink-0"></div>
                <span>Ban or mute any player for any reason, at any time, with or without warning.</span>
              </li>
              <li class="flex gap-3 items-start">
                <div class="w-2 h-2 rounded-full bg-slate-300 mt-2.5 shrink-0"></div>
                <span>Reset player data, map data, or economy balances during season resets or critical bug fixes.</span>
              </li>
              <li class="flex gap-3 items-start">
                <div class="w-2 h-2 rounded-full bg-slate-300 mt-2.5 shrink-0"></div>
                <span>Modify these Terms of Service at any time. Continued use of the service constitutes acceptance of these changes.</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
              <FileText :size="24" />
            </div>
            <h3 class="text-2xl font-black text-slate-900">4. Gameplay Experience</h3>
          </div>
          <p class="text-slate-600 leading-relaxed font-medium text-lg">
            While we strive for 100% uptime and a lag-free experience, we cannot guarantee uninterrupted access to the server. Maintenance, DDoS attacks, or hardware failures may cause temporary downtime. We are not liable for any loss of items or progress due to server crashes or rollbacks, though we will do our best to compensate where fair.
          </p>
        </div>
        <div class="mt-8 p-10 rounded-3xl bg-slate-50 border border-slate-200 text-center">
          <div class="inline-flex p-4 rounded-2xl bg-white text-slate-400 mb-6 shadow-sm border border-slate-100">
            <HelpCircle :size="32" />
          </div>
          <h4 class="text-2xl font-bold text-slate-900 mb-2">Have questions?</h4>
          <p class="text-slate-500 mb-8 font-medium">
            If you are unsure about a rule or term, please ask before acting.
          </p>
          <a href="/contact" class="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-slate-200 rounded-xl font-bold text-slate-600 hover:border-[#FB325A] hover:text-[#FB325A] transition-all">
            Contact Support Team
          </a>
        </div>

      </div>
    </section>
  </main>
</template>