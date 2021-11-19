<template>
  <div class="userData">
    <div>
      <UserData />
      <TablaUserProfile />
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
};
</script>
