<template>
  <div class="sign-up">
    <form @submit.prevent="signup">
      <h3>User name</h3>
      <input type="text" v-model="newUser.username" />
      <h3>Email</h3>
      <input type="email" required v-model="newUser.email" />
      <h3>Password</h3>
      <input
        type="password"
        minlength="8"
        required
        v-model="newUser.password"
      />
      <h3>confirm password</h3>
      <input type="password" required v-model="confirmPassword" />
      <input type="submit" value="Sign Up" />
    </form>
    <h2>OR</h2>
    <a :href="googleUrl">Sign up with Google</a>
  </div>
</template>

<script>
import { userService } from "../../services/user-service";
import { getGoogleUrl } from "../../services/google-service";
export default {
  data() {
    return {
      newUser: userService.getEmptyUser(),
      confirmPassword: "",
    };
  },
  methods: {
    signup() {
      if (this.newUser.password !== this.confirmPassword) return;
      this.$emit("auth", "signup", this.newUser);
    },
  },
  computed: {
    googleUrl() {
      return getGoogleUrl();
    },
  },
};
</script>
