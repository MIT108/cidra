<template>
<div>
  <Dashboard />
</div>
</template>

<script>
import { mapState } from "vuex";

import Dashboard from "../../components/Client/Dashboard";

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
