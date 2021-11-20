<template>
  <div class="userData">
    <div v-if="!$auth.loading">
      <UserData />
      <TablaUserProfile :email="getEmail()" />
    </div>
  </div>
</template>

<script>
import TablaUserProfile from "@/components/TablaUserProfile.vue";
import UserData from "@/components/UserData.vue";

export default {
  name: "UserProfile",
  components: {
    TablaUserProfile,
    UserData,
  },
  methods: {
    getEmail() {
      return this.$auth.user.email;
    },
  },
};
</script>
