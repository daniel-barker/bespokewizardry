<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  let contentRef;

  onMount(() => {
    gsap.from(contentRef.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contentRef,
        start: "top center+=100"
      }
    });
  });
</script>

<div class="py-20 px-4">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-serif text-center mb-16 mystical-text">
      The Wizard of Aahz
    </h1>

    <div bind:this={contentRef} class="space-y-12">
      <div class="p-8 mystical-border">
        <h2 class="text-2xl font-serif mb-6 mystical-text">A Sensually-Grounded Mystic</h2>
        <p class="text-slate-300 mb-6">
          As a velvet-voiced guide through inner realms, I offer a unique blend of mystical wisdom and sensual awareness. My approach combines ancient practices with modern understanding, creating a safe and nurturing space for your transformative journey.
        </p>
      </div>

      <div class="p-8 mystical-border">
        <h2 class="text-2xl font-serif mb-6 mystical-text">Core Philosophy</h2>
        <p class="text-slate-300 mb-6">
          I believe in the power of pleasure-forward harm reduction and the importance of integrating psychedelic experiences into one's life with grace and wisdom. My work is rooted in creating safe, sacred spaces where transformation can occur naturally.
        </p>
      </div>

      <div class="p-8 mystical-border">
        <h2 class="text-2xl font-serif mb-6 mystical-text">Experience & Expertise</h2>
        <ul class="space-y-4 text-slate-300">
          <li>• Certified harm reduction specialist</li>
          <li>• Trained in psychedelic integration</li>
          <li>• Experienced ritual facilitator</li>
          <li>• Dedicated to ongoing education and practice</li>
        </ul>
      </div>

      <div class="p-8 mystical-border">
        <h2 class="text-2xl font-serif mb-6 mystical-text">Approach</h2>
        <p class="text-slate-300 mb-6">
          My sessions are characterized by a gentle, hypnotic presence that helps guide you through your experiences. I combine ritualistic elements with practical wisdom, creating a space where both mystical and sensual energies can flow freely.
        </p>
      </div>

      <div class="text-center">
        <a href="/contact" class="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors">
          Connect with The Wizard
        </a>
      </div>
    </div>
  </div>
</div>
