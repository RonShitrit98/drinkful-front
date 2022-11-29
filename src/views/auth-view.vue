<template>
  <section>
    <router-view @auth="auth" />
  </section>
</template>

<script>
export default {
  methods: {
    auth(type, user) {
      console.log(type, user);
    },
  },
};
</script>
