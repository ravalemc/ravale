<script setup lang="ts">
import {
  Copy, Check, Search, X,
  Pickaxe, Crown, Server,
  Gamepad2, Trophy, Users, ArrowLeft, ShoppingBasket,
  Clock, Gem, Zap, Flame, Hammer
} from 'lucide-vue-next'

const API_URL = 'https://24eln7m3z3vrbtbeogsskhzoiq0gikja.lambda-url.us-east-1.on.aws/'
const ip = 'ravale.net'

const copied = ref(false)
const searchQuery = ref('')
const searchedPlayer = ref<any>(null)
const searchError = ref(false)
const isLoading = ref(false)

const leaderboards = ref<any>({ prison: [] })
const server = ref({ players: { online: 0 } })

const copyIp = () => {
  navigator.clipboard.writeText(ip)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

const fetchLeaderboard = async () => {
  try {
    const res = await fetch(`${API_URL}?type=leaderboard`)
    const data = await res.json()
    if (Array.isArray(data)) {
      leaderboards.value.prison = data
    }
  } catch (e) {
    console.error("Failed to load leaderboard", e)
  }
}

const handleSearch = async () => {
  if (!searchQuery.value) return
  isLoading.value = true
  searchError.value = false
  searchedPlayer.value = null

  try {
    const res = await fetch(`${API_URL}?type=search&query=${searchQuery.value}`)
    if (res.ok) {
      searchedPlayer.value = await res.json()
    } else {
      searchError.value = true
    }
  } catch (e) {
    searchError.value = true
  } finally {
    isLoading.value = false
  }
}

const clearSearch = () => {
  searchedPlayer.value = null
  searchQuery.value = ''
  searchError.value = false
}

const currentLeaderboard = computed(() => leaderboards.value.prison)

onMounted(async () => {
  await fetchLeaderboard()
  try {
    const req = await fetch('https://api.mcsrvstat.us/3/ravale.net')
    server.value = await req.json()
  } catch(e) {}
})
</script>

<template>
  <main class="relative z-10">
    <section id="hero" class="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span class="text-slate-900 font-black">{{ server.players?.online || 0 }}</span> Players Online
        </span>
        </div>

        <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900 drop-shadow-sm">
          RAVALE
        </h1>
        <p class="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          The next generation of Minecraft network. Immerse yourself in our custom engineered Skyblock and Prison realms.
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <button
              @click="copyIp"
              class="group relative h-14 pl-6 pr-2 flex items-center bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-[#FB325A] transition-all duration-300 w-full md:w-auto justify-between md:justify-start shadow-xl shadow-slate-200/50 hover:shadow-[#FB325A]/10"
          >
            <div class="flex items-center gap-3 mr-6">
              <Server :size="20" class="text-slate-400 group-hover:text-[#FB325A] transition-colors" />
              <span class="font-bold font-mono text-lg text-slate-600 tracking-wide group-hover:text-slate-900 transition-colors">{{ ip }}</span>
            </div>

            <div class="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-50 group-hover:bg-[#FB325A] transition-all duration-300">
              <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-50" enter-to-class="opacity-100 scale-100" leave-active-class="duration-200 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-50">
                <Copy v-if="!copied" class="absolute text-slate-400 group-hover:text-white" :size="18" />
                <Check v-else class="absolute text-white" :size="20" :stroke-width="3" />
              </transition>
            </div>
          </button>

          <a href="https://store.ravale.net" target="_blank" class="bg-[#FB325A] text-white pl-6 pr-6 py-4 rounded-2xl font-bold hover:bg-[#d92b4d] transition-all duration-300 shadow-xl shadow-[#FB325A]/25 hover:shadow-2xl hover:shadow-[#FB325A]/40 hover:-translate-y-1">
            <ShoppingBasket :size="24" :stroke-width="2.5" />
          </a>
        </div>
      </div>
    </section>

    <section id="gamemodes" class="py-12 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 rounded-2xl bg-[#FB325A]/10 flex items-center justify-center text-[#FB325A]">
            <Gamepad2 :size="24" />
          </div>
          <div>
            <h2 class="text-2xl font-black text-slate-900">Select Realm</h2>
            <p class="text-slate-500 font-medium text-sm">Choose your path to glory</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">

          <div class="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-[#FB325A]/30 transition-all duration-500 shadow-2xl shadow-slate-200/50 hover:shadow-[#FB325A]/10 h-[400px]">
            <div class="absolute inset-0 h-full w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
              <NuxtImg  src="/prison.png" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Prison" />
            </div>

            <div class="relative z-20 p-8 h-full flex flex-col justify-end select-none">
              <div class="mb-3 inline-flex px-3 py-1 rounded-full bg-[#FB325A] text-white text-xs font-bold uppercase tracking-wider w-fit shadow-lg shadow-[#FB325A]/20">
                LAUNCHED
              </div>
              <h3 class="text-4xl font-black text-white mb-2 drop-shadow-md">OP Prison</h3>
              <p class="text-slate-200 font-medium leading-relaxed max-w-md drop-shadow-sm">
                Mine your way to the top in our custom economy. Featuring auto-miners, gangs, and explosive enchants.
              </p>
            </div>
          </div>

          <div class="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-amber-400/50 transition-all duration-500 shadow-2xl shadow-slate-200/50 hover:shadow-amber-500/10 h-[400px] select-none">
            <div class="absolute inset-0 h-full w-full overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
              <NuxtImg  src="/skyblock.jpg" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0" alt="Skyblock" />
            </div>

            <div class="relative z-20 p-8 h-full flex flex-col justify-end">
              <div class="mb-3 inline-flex px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wider w-fit shadow-lg shadow-amber-400/20">
                COMING SOON
              </div>
              <h3 class="text-4xl font-black text-white mb-2 drop-shadow-md">Skyblock</h3>
              <p class="text-slate-200 font-medium leading-relaxed max-w-md drop-shadow-sm">
                Start on a floating island and expand your empire. Includes custom spawners, minions, and dungeons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 px-6 pb-24" id="stats">
      <div class="max-w-6xl mx-auto">

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-[#FB325A]/10 flex items-center justify-center text-[#FB325A]">
              <Trophy :size="24" />
            </div>
            <div>
              <h2 class="text-2xl font-black text-slate-900">Leaderboards</h2>
              <p class="text-slate-500 font-medium text-sm">Top players on Prison Realm</p>
            </div>
          </div>

          <div class="relative w-full md:w-80 group">
            <input
                v-model="searchQuery"
                @keyup.enter="handleSearch"
                type="text"
                placeholder="Search Username..."
                class="w-full bg-white border-2 border-slate-100 text-slate-800 px-4 py-3 rounded-2xl pl-11 focus:border-[#FB325A] focus:ring-4 focus:ring-[#FB325A]/10 focus:outline-none transition-all placeholder:text-slate-400 shadow-sm"
            />
            <Search class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#FB325A] transition-colors" :size="20" />
          </div>
        </div>

        <div class="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 min-h-[400px]">
          <div v-if="isLoading" class="p-12 text-center text-slate-400">
            <div class="animate-spin w-8 h-8 border-4 border-slate-200 border-t-[#FB325A] rounded-full mx-auto mb-4"></div>
            <span class="font-medium">Fetching data...</span>
          </div>

          <div v-else-if="searchError" class="p-12 text-center">
            <div class="inline-flex p-4 rounded-full bg-red-50 text-[#FB325A] mb-4">
              <X :size="32" />
            </div>
            <h3 class="text-slate-900 font-bold text-lg mb-1">Player Not Found</h3>
            <p class="text-slate-500 text-sm">We couldn't find a player with that name.</p>
            <button @click="clearSearch" class="mt-6 font-bold text-sm text-[#FB325A] hover:text-[#d92b4d] hover:underline">Back to leaderboard</button>
          </div>

          <div v-else-if="searchedPlayer" class="relative p-8 md:p-10">
            <button @click="clearSearch" class="absolute top-6 right-6 p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all">
              <X :size="20" />
            </button>

            <div class="flex flex-col md:flex-row gap-10 items-center md:items-start">
              <div class="relative group flex-shrink-0">
                <div class="w-40 h-40 rounded-3xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center overflow-hidden shadow-lg">
                  <NuxtImg :src="`https://api.mineatar.io/body/full/${searchedPlayer.uuid}?scale=16`" class="h-[90%] object-contain drop-shadow-xl" alt="Player Skin" />
                </div>
                <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-black bg-slate-800 text-white border-2 border-white shadow-lg whitespace-nowrap uppercase tracking-wider">
                  Rank {{ searchedPlayer.rank }}
                </div>
              </div>

              <div class="flex-grow w-full">
                <div class="text-center md:text-left mb-8">
                  <div class="flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start mb-2">
                    <h3 class="text-4xl font-black text-slate-900 tracking-tight">{{ searchedPlayer.name }}</h3>
                    <span v-if="searchedPlayer.group && searchedPlayer.group !== 'Default'" class="px-2.5 py-1 rounded-md bg-[#FB325A]/10 text-[#FB325A] text-xs font-bold border border-[#FB325A]/20 uppercase">
                      {{ searchedPlayer.group }}
                    </span>
                  </div>
                  <div class="flex items-center gap-3 justify-center md:justify-start text-sm font-bold text-slate-400">
                    <span class="flex items-center gap-1.5"><Zap :size="16" class="text-amber-400" /> {{ searchedPlayer.multiplier }} Multiplier</span>
                    <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span class="flex items-center gap-1.5"><Flame :size="16" class="text-orange-500" /> {{ searchedPlayer.streak }} Day Streak</span>
                  </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <!-- Balance -->
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div class="flex items-center gap-2 text-slate-400 text-xs uppercase font-bold mb-1">
                      <Trophy :size="14" /> Balance
                    </div>
                    <div class="text-xl md:text-2xl font-black text-emerald-500">{{ searchedPlayer.balance }}</div>
                  </div>

                  <!-- Tokens -->
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors">
                    <div class="flex items-center gap-2 text-slate-400 text-xs uppercase font-bold mb-1">
                      <Users :size="14" /> Tokens
                    </div>
                    <div class="text-xl md:text-2xl font-black text-slate-800">{{ searchedPlayer.tokens || 0 }}</div>
                  </div>

                  <!-- Shards (New) -->
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-cyan-200 transition-colors">
                    <div class="flex items-center gap-2 text-slate-400 text-xs uppercase font-bold mb-1">
                      <Gem :size="14" class="text-cyan-500" /> Shards
                    </div>
                    <div class="text-xl md:text-2xl font-black text-slate-800">{{ searchedPlayer.shards || 0 }}</div>
                  </div>

                  <!-- Prestige -->
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors">
                    <div class="flex items-center gap-2 text-slate-400 text-xs uppercase font-bold mb-1">
                      <Pickaxe :size="14" /> Prestige
                    </div>
                    <div class="text-xl md:text-2xl font-black text-slate-800">{{ searchedPlayer.prestige }}</div>
                  </div>

                  <!-- Blocks Mined (New) -->
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors">
                    <div class="flex items-center gap-2 text-slate-400 text-xs uppercase font-bold mb-1">
                      <Hammer :size="14" /> Blocks
                    </div>
                    <div class="text-xl md:text-2xl font-black text-slate-800">{{ searchedPlayer.blocks }}</div>
                  </div>

                  <!-- Playtime (New) -->
                  <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors">
                    <div class="flex items-center gap-2 text-slate-400 text-xs uppercase font-bold mb-1">
                      <Clock :size="14" /> Playtime
                    </div>
                    <div class="text-xl md:text-2xl font-black text-slate-800">{{ searchedPlayer.playtime }}</div>
                  </div>

                  <!-- Favorite Block (New - Full Width on Mobile) -->
                  <div class="col-span-2 md:col-span-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors flex items-center justify-between">
                    <div>
                      <div class="flex items-center gap-2 text-slate-400 text-xs uppercase font-bold mb-1">
                        Favorite Block
                      </div>
                      <div class="text-lg font-bold text-slate-800">{{ searchedPlayer.favoriteBlock || 'None' }}</div>
                    </div>
                    <div class="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-400">
                      <Pickaxe :size="20" />
                    </div>
                  </div>
                </div>

                <div class="mt-8 flex justify-center md:justify-start">
                  <button @click="clearSearch" class="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-[#FB325A] transition-colors group">
                    <ArrowLeft :size="18" class="group-hover:-translate-x-1 transition-transform" />
                    Back to leaderboard
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="divide-y divide-slate-100">
            <div class="grid grid-cols-12 px-6 py-5 bg-slate-50/80 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <div class="col-span-1">#</div>
              <div class="col-span-5 md:col-span-4">Player</div>
              <div class="col-span-3 text-right md:text-left">Prestige</div>
              <div class="hidden md:block md:col-span-2">Tokens</div>
              <div class="col-span-3 md:col-span-2 text-right">Balance</div>

            </div>

            <div
                v-for="(player, index) in currentLeaderboard"
                :key="index"
                class="grid grid-cols-12 px-6 py-4 items-center hover:bg-slate-50/80 transition-colors group"
            >
              <div class="col-span-1 font-bold font-mono text-slate-400 group-hover:text-[#FB325A] transition-colors">
                <Crown v-if="index === 0" :size="20" class="text-amber-400 fill-amber-400" />
                <span v-else-if="index === 1" class="text-slate-500 text-lg">2</span>
                <span v-else-if="index === 2" class="text-slate-500 text-lg">3</span>
                <span v-else>{{ index + 1 }}</span>
              </div>

              <div class="col-span-5 md:col-span-4 flex items-center md:gap-4 gap-2">
                <div class="md:w-10 md:h-10 w-6 h-6 md:rounded-xl rounded-md bg-slate-200 overflow-hidden ring-2 ring-transparent group-hover:ring-[#FB325A]/20 transition-all">
                  <NuxtImg :src="`https://api.mineatar.io/face/${player.uuid}?scale=32`" class="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300" alt="face" />
                </div>
                <span class="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{{ player.name }}</span>
              </div>

              <div class="col-span-3 text-right md:text-left font-mono font-medium text-slate-500">{{ player.prestige }}</div>

              <div class="hidden md:block md:col-span-2 font-mono font-medium text-slate-500">{{ player.tokens || 0 }}</div>

              <div class="col-span-3 md:col-span-2 text-right font-mono font-bold text-emerald-500">{{ player.balance }}</div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
</template>