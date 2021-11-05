<template>
    <!-- Sign in Start -->
    <section class="sign-in-page">
        <div class="container sign-in-page-bg mt-2 p-0">
            <div class="row no-gutters">
                <div class="col-md-6 text-center">
                    <div class="sign-in-detail text-white">
                        <a
                            class="sign-in-logo mb-5"
                            href="#"
                        >
                            <img
                                src="/images/logo/logo4.svg"
                                class="img-fluid"
                                alt="logo"
                            >
                                </a>
                                <div
                                    class="owl-carouselc"
                                    data-autoplay="true"
                                    data-loop="true"
                                    data-nav="false"
                                    data-dots="true"
                                    data-items="1"
                                    data-items-laptop="1"
                                    data-items-tab="1"
                                    data-items-mobile="1"
                                    data-items-mobile-sm="1"
                                    data-margin="0"
                                >
                                    <div class="item">
                                        <img
                                            src="/images/login/1.png"
                                            class="img-fluid mb-4"
                                            alt="logo"
                                        >
                                            <h4 class="mb-1 text-white">Login-in to Platform </h4>
                                            <p>It is the best in terms of consultation just try our services and enjoy quick , fast and good consultation.</p>
                                    </div>
                                    <!--<div class="item">
                            <img src="/images/login/2.png" class="img-fluid mb-4" alt="logo">
                            <h4 class="mb-1 text-white">Professional Follow Ups</h4>
                            <p>On this platform once you sign up there is a complete follow up of our patients before and after their consultations.</p>
                        </div>
                        <div class="item">
                            <img src="/images/login/3.png" class="img-fluid mb-4" alt="logo">
                            <h4 class="mb-1 text-white">Products Delivery</h4>
                            <p>This platform gives you the ability to command your products and receive a home delivery of your product.</p>
                        </div>-->
                    </div>
                </div>
            </div>

            <div class="col-md-6 position-relative">
                <div class="sign-in-from  shadow-lg mr-5">
                    <h1 class="mb-0">Sign in </h1>
                    <p>Enter your email address and password to access dashboard.</p>

                    <div
                        class="alert text-white bg-danger"
                        v-if="error"
                        role="alert"
                    >
                        <div class="iq-alert-icon">
                            <i class="ri-alert-fill"></i>
                        </div>
                        <div class="iq-alert-text">{{error}}</div>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <i class="ri-close-line"></i>
                            </button>
                </div>
                <form
                    @submit.prevent="onLogin()"
                    method="post"
                >

                    <!--<Message :msg="msg" :danger="danger" :success="success" :warning="warning" />-->

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            class="form-control mb-0"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                            v-model.trim="email"
                        >
                    </div>
                    <div
                        class="error text-danger"
                        v-if="errors.email"
                    >
                        {{errors.email}}
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <a
                    href="pages-recoverpw.php"
                    class="float-right"
                >Forgot password?</a>
                    <input
                        type="password"
                        class="form-control mb-0"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        v-model.trim="password"
                    >
            </div>
            <div
                class="error text-danger"
                v-if="errors.password"
            >
                {{errors.password}}
        </div>
        <!-- <div class="account"></div>-->
        <div class="d-inline-block w-100">
            <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                <input
                    type="checkbox"
                    class="custom-control-input"
                    name="remember"
                    id="customCheck1"
                >
                    <label
                        class="custom-control-label"
                        for="customCheck1"
                    >Remember Me</label>
            </div>
            <button
                type="submit"
                class="btn btn-primary float-right"
            >Sign in</button>
        </div>

        <div class="sign-info">
            <span class="dark-color d-inline-block line-height-2">Don't have an account? download the mobile applciation to create one </span>
            <span style="color: lightblue">Or</span>
            <a href="signup.php">register here</a>
            <ul class="iq-social-media">
                <li>
                    <a href="#">
                        <i class="ri-android-line"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="ri-apple-line"></i>
                    </a>
                </li>
            </ul>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
    </section>
    <!-- Sign in END -->
</template>

<script>
// import Message from "@/components/Message";
import SignupValidations from "../services/SignupValidations.js";
import { mapActions, mapMutations } from "vuex";
import {
  LOGIN_ACTION,
  LOADING_SPINNER_SHOW_MUTATION,
} from "../store/storeconstants.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
      page: "",
    };
  },
  methods: {
    ...mapActions("auth", {
      login: LOGIN_ACTION,
    }),
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
    async onLogin() {
      this.showLoading(true);
      let validations = new SignupValidations(this.email, this.password);

      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
      this.error = "";

      try {
        this.page = await this.login({
          email: this.email,
          password: this.password,
        });
      } catch (e) {
        this.error = e;
      }
      if (
        typeof this.page["success"] === "undefined" ||
        this.page["success"] === null
      ) {
          this.error = this.page["error"] 
            setTimeout(() => (this.error = null), 2000);
        this.showLoading(false);
      }
      if (
        typeof this.page["error"] === "undefined" ||
        this.page["error"] === null
      ) {
        let URL = "/" + this.page['success'];

        this.showLoading(false);
        this.$router.push(URL);
      }
    },
  },
};
</script>
