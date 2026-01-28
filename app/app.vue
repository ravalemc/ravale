app.vue
<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#FB325A]/20 selection:text-[#FB325A] relative font-sans">
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FB325A]/10 rounded-full blur-[120px] -z-10"></div>
    </div>

    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>