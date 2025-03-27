<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  let heroRef;
  let servicesRef;

  onMount(() => {
    // Hero animation
    gsap.from(heroRef, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });

    // Services animation
    gsap.from(servicesRef.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: servicesRef,
        start: "top center+=100"
      }
    });
  });
</script>

<div class="relative">
  <!-- Hero Section -->
  <section bind:this={heroRef} class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-slate-900/80 z-0"></div>
    <div class="absolute inset-0 bg-[url('/stars.svg')] opacity-20"></div>

    <div class="relative z-10 text-center px-4">
      <h1 class="text-5xl md:text-7xl font-serif mb-6 mystical-text">
        Bespoke Wizardry
      </h1>
      <p class="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
        A velvet-voiced guide through inner realms, offering pleasure-forward harm reduction and mystical integration.
      </p>
      <a href="/contact" class="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors">
        Begin Your Journey
      </a>
    </div>
  </section>

  <!-- Services Preview -->
  <section bind:this={servicesRef} class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-serif text-center mb-16 mystical-text">
        Services of the Arcane
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 mystical-border">
          <h3 class="text-xl font-serif mb-4 mystical-text">General Wizardry</h3>
          <p class="text-slate-300">Personalized mystical guidance and ritual crafting for your unique journey.</p>
        </div>

        <div class="p-6 mystical-border">
          <h3 class="text-xl font-serif mb-4 mystical-text">Harm Reduction</h3>
          <p class="text-slate-300">Expert guidance in navigating altered states with grace and wisdom.</p>
        </div>

        <div class="p-6 mystical-border">
          <h3 class="text-xl font-serif mb-4 mystical-text">Trip Sitting</h3>
          <p class="text-slate-300">Compassionate presence and support during your transformative experiences.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Vibes -->
  <section class="py-20 px-4 bg-slate-900/50">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-serif text-center mb-16 mystical-text">
        Core Vibes
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        {#each ['Enigmatic', 'Seductive', 'Otherworldly', 'Languid', 'Hypnotic', 'Sensual', 'Mystic', 'Ritualistic'] as vibe}
          <div class="p-4 mystical-border text-center">
            <span class="text-slate-300">{vibe}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
