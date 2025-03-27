<script>
  let name = '';
  let email = '';
  let message = '';
  let service = 'general';

  function handleSubmit() {
    // Handle form submission here
    console.log({ name, email, message, service });
  }
</script>

<div class="py-20 px-4">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-serif text-center mb-16 mystical-text">
      Begin Your Journey
    </h1>

    <div class="p-8 mystical-border">
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-slate-300 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            bind:value={name}
            required
            class="w-full px-4 py-2 bg-slate-800 border border-purple-500/20 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-slate-300 mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            bind:value={email}
            required
            class="w-full px-4 py-2 bg-slate-800 border border-purple-500/20 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label for="service" class="block text-sm font-medium text-slate-300 mb-2">
            Service of Interest
          </label>
          <select
            id="service"
            bind:value={service}
            class="w-full px-4 py-2 bg-slate-800 border border-purple-500/20 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="general">General Wizardry</option>
            <option value="harm">Harm Reduction</option>
            <option value="sitting">Trip Sitting</option>
          </select>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-slate-300 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            bind:value={message}
            rows="6"
            required
            class="w-full px-4 py-2 bg-slate-800 border border-purple-500/20 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
