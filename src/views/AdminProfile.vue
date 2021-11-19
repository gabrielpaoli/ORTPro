<template>
  <div class="adminProfile">
    <div>
      <Dashboard />
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
