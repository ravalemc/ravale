<script setup lang="ts">
import {
  Shield, MessageSquare, Swords, Monitor,
  Gavel, AlertTriangle, CheckCircle2, AlertOctagon
} from 'lucide-vue-next'

const ruleCategories = [
  {
    title: 'General Conduct',
    description: 'Basic expectations for all players.',
    icon: Shield,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    rules: [
      'Be respectful to all players and staff members. Toxicity is not tolerated.',
      'Do not impersonate staff members or famous community figures.',
      'Account security is your responsibility. We are not liable for compromised accounts.',
      'Do not scam other players. Agreements made in-game are binding.',
      'Inappropriate skins, capes, or usernames are strictly prohibited.'
    ]
  },
  {
    title: 'Chat & Communication',
    description: 'Keep the chat clean and readable.',
    icon: MessageSquare,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    rules: [
      'No spamming, flooding, or excessive use of caps.',
      'Do not advertise other servers or suspicious links.',
      'Hate speech, racism, sexism, and discrimination result in an immediate ban.',
      'Do not bypass the chat filter or encourage others to do so.',
      'Discussing political or controversial topics that incite conflict is not allowed.'
    ]
  },
  {
    title: 'Gameplay & Economy',
    description: 'Fair play ensures a balanced economy.',
    icon: Swords,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    rules: [
      'Griefing or stealing is not allowed in claimed areas (Skyblock).',
      'Using alternate accounts (alts) to farm rewards or boost stats is prohibited.',
      'Do not exploit bugs or glitches. Report them immediately for a reward.',
      'TP-Trapping or killing players in non-PvP zones is forbidden.',
      'Real World Trading (RWT) of in-game items for real money is strictly banned.'
    ]
  },
  {
    title: 'Client Modifications',
    description: 'What you can and cannot install.',
    icon: Monitor,
    color: 'text-[#FB325A]',
    bg: 'bg-[#FB325A]/10',
    rules: [
      'Hacked clients (Kill Aura, X-Ray, Fly, etc.) result in a permanent ban.',
      'Macros and auto-clickers are not allowed. One physical click = one action.',
      'Allowed mods: Optifine, Sodium, Minimaps (no entities), Schematica (printer off).',
      'Hardware macros (mouse/keyboard software) to automate gameplay are banned.',
      'Using a VPN to bypass an IP ban is strictly prohibited.'
    ]
  }
]
</script>

<template>
  <main class="relative z-10">
    <section class="relative pt-36 pb-12 md:pt-48 md:pb-20 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
          <Gavel :size="16" class="text-[#FB325A]" />
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Updated <span class="text-slate-900 font-black">Jan 2025</span>
          </span>
        </div>

        <h1 class="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 drop-shadow-sm">
          Server Rules
        </h1>
        <p class="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          To ensure a fair and enjoyable experience for everyone on Ravale, please read and understand our community guidelines.
        </p>
      </div>
    </section>

    <section class="pb-24 px-6">
      <div class="max-w-6xl mx-auto">

        <div class="bg-amber-50 border border-amber-200 rounded-3xl p-6 md:p-8 mb-12 flex flex-col md:flex-row gap-6 items-start shadow-sm">
          <div class="p-3 bg-amber-100 text-amber-600 rounded-xl shrink-0">
            <AlertTriangle :size="32" />
          </div>
          <div>
            <h3 class="text-xl font-black text-slate-900 mb-2">Staff Discretion</h3>
            <p class="text-slate-600 leading-relaxed">
              These rules are not exhaustive. Staff members reserve the right to punish players for actions deemed disruptive or harmful to the server environment, even if not explicitly listed below. Common sense is your best guide.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
              v-for="(category, index) in ruleCategories"
              :key="index"
              class="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl shadow-slate-200/50 hover:border-slate-200 transition-all duration-300"
          >
            <div class="flex items-center gap-4 mb-8">
              <div :class="`w-14 h-14 rounded-2xl ${category.bg} ${category.color} flex items-center justify-center`">
                <component :is="category.icon" :size="28" :stroke-width="2.5" />
              </div>
              <div>
                <h2 class="text-2xl font-black text-slate-900">{{ category.title }}</h2>
                <p class="text-slate-400 font-medium text-sm">{{ category.description }}</p>
              </div>
            </div>

            <ul class="space-y-4">
              <li
                  v-for="(rule, rIndex) in category.rules"
                  :key="rIndex"
                  class="flex items-start gap-4 group"
              >
                <div class="mt-1 min-w-[24px]">
                  <CheckCircle2 :size="20" class="text-slate-300 group-hover:text-[#FB325A] transition-colors" />
                </div>
                <span class="text-slate-600 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                  {{ rule }}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-16 text-center bg-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#FB325A]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div class="relative z-10 max-w-2xl mx-auto">
            <div class="inline-flex justify-center items-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6 backdrop-blur-sm border border-white/10">
              <AlertOctagon :size="32" />
            </div>

            <h2 class="text-3xl md:text-4xl font-black text-white mb-4">See a rule breaker?</h2>
            <p class="text-slate-300 text-lg mb-8 leading-relaxed">
              Help us keep Ravale safe. If you spot someone breaking the rules, report them on our Discord or use the in-game reporting system.
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <button class="bg-[#FB325A] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#d92b4d] transition-all duration-300 shadow-xl shadow-[#FB325A]/25">
                Join Discord to Report
              </button>
              <div class="px-8 py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10">
                In-game: <span class="font-mono text-[#FB325A] ml-2">/report &lt;name&gt;</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>