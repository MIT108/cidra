<template>
<div>
  <Dashboard />
</div>
</template>

<script>
import { mapState } from "vuex";

import Dashboard from "../../components/Admin/Dashboard";

export default {
  methods: {},

  computed: {
    ...mapState("auth", {      
    }),
  },

  components: {
    Dashboard,
  },
};
</script>
