<template>
  <div class="h-full app">
    <header>
      <nav class="w-full p-4">
        <div class="nav-item">
          <router-link to="/"><img src="./assets/piyo_hiyoko.png" class="brand">{{ $store.ctfName }}</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/challenges">CHALLENGES</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/ranking">RANKING</router-link>
        </div>
        <div class="expandable">
        </div>
      </nav>
    </header>
    <main class="container mx-auto h-full">
      <router-view />
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import data from "../info-update.json";
import info from "../info.json";

export default Vue.extend({
  data() {
    return {
      messages: []
    };
  },
  mounted() {
    Vue.set(this.$store, "ranking", data.ranking);
    Vue.set(this.$store, "challenges", data.challenges);
    Vue.set(this.$store, "ctfStart", info.ctf_start);
    Vue.set(this.$store, "ctfEnd", info.ctf_end);
    Vue.set(this.$store, "ctfName", info.ctf_name);

    document.title = this.$store.ctfName;
  },
  methods: {
  }
});
</script>

<style lang="scss">
@import "./assets/vars.scss";
@import "./assets/tailwind.css";

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap');

html,
body {
  @extend .bg-bg-color;
  color: $fg-color;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
}
.app a {
  color: $accent-color;
  &:hover {
    text-decoration: underline;
  }
}

input[type="number"] {
  text-align: center;
  text-align: center;
  background-color: transparent;
  border-bottom: 1px solid $accent-color;
  display: inline-block;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  text-align: center;
  background-color: transparent;
  border-bottom: 1px solid $accent-color;
  display: inline-block;
  width: 100%;
  margin: 0.25rem;
  padding: 0.25rem 0;
}

input[type="submit"],
.button {
  text-decoration: none;
  margin: 0.25rem 0;
  padding: 0.25rem 0.5rem;
  background-color: transparent;
  border: 1px solid $accent-color;
  border-radius: 0.25rem;
  &:hover:not(:disabled) {
    background-color: $accent-color;
    cursor: pointer;
  }
  &[disabled] {
    filter: grayscale(50%);
  }
}
textarea {
  background-color: transparent;
  border-bottom: 1px solid $accent-color;
  display: inline-block;
  width: 100%;
  margin: 0.25rem;
  padding: 0.25rem;
}

.inline-form {
  display: flex;

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    display: inline-block;
    flex: 1;
  }

  label {
    padding: 0.25rem 0;
    margin: 0.25rem 0;
  }
}

pre {
  display: inline-block;
  padding: 0 0.5rem;
  border: 1px solid $accent-color;
  border-radius: 0.25rem;
  background-color: rgba($accent-color, 0.2);
}

code {
  display: inline-block;
  padding: 0 0.25rem;
  border-radius: 0.25rem;
  background-color: rgba($accent-color, 0.2);
}
</style>

<style lang="scss" scoped>
@import "./assets/vars.scss";

.brand {
  height: 1.5em;
  width: auto;
  margin-right: 0.5em;
  display: inline;
}

nav {
  border-bottom: 1px solid $accent-color;
  display: flex;
}

nav .nav-item {
  margin-right: 1rem;
}

nav .expandable {
  flex-grow: 1;
}

@media (max-width: 39rem) {
  nav {
    display: block;
  }

  nav .nav-item {
    margin-right: 0;
    text-align: center;
  }

  nav .expandable {
    display: none;
  }
}

nav a {
  color: $fg-color;
}

.messages {
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.message {
  width: 15rem;
  margin-top: 0.25rem;
  padding: 0.5rem 1rem;
  border: 1px solid $accent-color;
  background-color: rgba($accent-color, 0.8);
  word-break: break-word;

  border-radius: 0.25rem;
}

.message.error {
  border: 1px solid $warn-color;
  background-color: rgba($warn-color, 0.6);
}

.message:hover {
  cursor: pointer;
}
</style>
