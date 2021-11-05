<template>
    <div class="loading-box">

        <!-- loader Start -->
        <div id="loading1">
            <div id="loading-center1">
                <div class="loading-2 loading-2--full-height"></div>
            </div>
        </div>
        <!-- loader END -->
    </div>
</template>
<script>
export default {
  props: {
    text: {
      required: false,
      type: String,
      default: "Loading",
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#loading1 {

    background-color: rgba(0, 0, 0, 0.151);
    width: 100%;
    height: 100vh;
    z-index: 900000000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}
#loading-center1 {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/logo/logo4.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
/* Style #2 */
.loading-2 {
  display: flex;
  justify-content: center;
}

.loading-2--full-height {
  align-items: center;
  height: 100%;
}

.loading-2::after {
  content: "";
  width: 90px;
  height: 90px;
  background: #089bab;
  opacity: 0.5;
  border-radius: 50%;
  animation: loading-2 1s ease-in-out infinite alternate;
}

@keyframes loading-2 {
  /* Safari support */
  from {
    opacity: 0;
    transform: scale(1);
  }

  to {
    opacity: 1;
    transform: scale(1.75);
  }
}
</style>
