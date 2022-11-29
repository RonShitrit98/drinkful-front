<template>
  <section>
    <router-view @auth="auth" />
  </section>
</template>

<script>
import { useUserStore } from "../stores/user.store";
export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  methods: {
    async auth(type, user) {
      try {
        await this.userStore[type](user);
      } catch (error) {
        if (error.type === "usernameTaken") {
          this.message.isUsernameTaken = true;
        }
      }
    },
  },
};
</script>
