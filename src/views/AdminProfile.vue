<template>
  <div v-if="!$auth.loading" class="adminProfile">
    <div>
      <Dashboard />
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="card-body">
            <TablaAdminProfile />
          </div>
        </div>
      </div>
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
