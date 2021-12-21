<template>
  <div class="userData">
    <div v-if="!$auth.loading">
      <UserData />
      <!--<TablaUserProfile :email="this.$auth.user.email" />-->
    </div>
  </div>
</template>

<script>
//import TablaUserProfile from "@/components/TablaUserProfile.vue";
import UserData from "@/components/UserData.vue";

export default {
  name: "UserProfile",
  components: {
    //TablaUserProfile,
    UserData,
  },
};
</script>
