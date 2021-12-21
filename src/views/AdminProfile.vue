<template>
  <div v-if="!$auth.loading" class="adminProfile">
    <div class="dash">
      <Dashboard />
    </div>
    <div class="table">
      <TablaAdminProfile />
    </div>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
import TablaAdminProfile from "@/components/TablaAdminProfile.vue";

export default {
  name: "AdminProfile",
  components: {
    Dashboard,
    TablaAdminProfile,
  },
};
</script>
<style scoped>
.dash {
  margin-bottom: 22px;
}
</style>
