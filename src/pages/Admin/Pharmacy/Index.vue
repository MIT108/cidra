<template>
<div>
  <Page />
</div>
</template>

<script>
import { mapState } from "vuex";

import Page from "@/components/Admin/Pharmacy/Index";

export default {
  data () {
    return {
    }
  },
  methods: {},

  computed: {
    ...mapState("auth", {      
    }),
  },

  components: {
    Page,
  },
};
</script>