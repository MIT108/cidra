<template>
    <div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { IS_USER_AUTHENTICATED_GETTER } from '../store/storeconstants.js'
export default {
    computed: {
        ...mapGetters('auth', {
            isAuthenticated: IS_USER_AUTHENTICATED_GETTER,
        })
    }
}
</script>