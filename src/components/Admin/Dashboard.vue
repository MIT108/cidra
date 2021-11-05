<template>
<div>

    <!-- The Modal -->
    <div class="addhospital  pt-5" v-if="addHospitalForm">
        <div id="myModal" class="model mt-5 pt-5">
            <div class="space"></div>
            <!-- Modal content -->
            <div class="modal-content mt-5 pt-5" style="width: 100%;">
                <br>
                <br>
                <span class="close" v-on:click.left="addHospitalForm = !addHospitalForm">&times;</span>
                <div class="iq-card">
                    <div class="iq-card-header d-flex justify-content-between">
                        <div class="iq-header-title">
                            <h4 class="card-title">Add Hospital</h4>
                        </div>
                    </div>
                    <div class="iq-card-body">
                        <p>Enter Informtion of hospital note all fields are required</p>
                        <form @submit.prevent="onAddHospital()" method="post">
                            <div class="form-group">
                                <label for="exampleInputText1">Name of hospital</label>
                                <input type="text" class="form-control" v-model="addHospitalValue.name" id="exampleInputText1" placeholder="Ex: clinic la bridge">

                                <div class="error" style="color: red;" v-if="errors.name">
                                    {{ errors.name }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Country</label>
                                <select v-model="addHospitalValue.country" id="country" @change="getStates($event)" v-html="countries" class="form-control">

                                </select>
                                <div class="error" style="color: red;" v-if="errors.country">
                                    {{ errors.country }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Region</label>
                                <select v-model="addHospitalValue.state" id="state" @change="getTowns($event)" v-html="states" class="form-control">
                                </select>
                                <div class="error" style="color: red;" v-if="errors.state">
                                    {{ errors.state }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">City</label>

                                <select v-model="addHospitalValue.city" class="form-control" id="city" v-html="towns">
                                </select>
                                <div class="error" style="color: red;" v-if="errors.city">
                                    {{ errors.city }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail3">Email </label>
                                <input type="email" v-model="addHospitalValue.email" class="form-control" id="exampleInputEmail3" placeholder="Ex: CLB@gmail.com">

                                <div class="error" style="color: red;" v-if="errors.email">
                                    {{ errors.email }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputphone">Hospital contact</label>
                                <input type="number" class="form-control" v-model="addHospitalValue.contact" id="exampleInputphone" placeholder="e.g 658528672">

                                <div class="error" style="color: red;" v-if="errors.contact">
                                    {{ errors.contact }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword3">Hopital Matricule</label>
                                <input type="text" class="form-control" id="exampleInputPassword3" v-model="addHospitalValue.matricule" placeholder="hopsital1023">

                                <div class="error" style="color: red;" v-if="errors.matricule">
                                    {{ errors.matricule }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Description of hospital</label>
                                <textarea class="form-control" v-model="addHospitalValue.description" id="exampleFormControlTextarea1" rows="3"></textarea>

                                <div class="error" style="color: red;" v-if="errors.description">
                                    {{ errors.description }}
                                </div>
                            </div>
                            <button type="submit" name="addHospital" class="btn btn-primary">Submit</button>
                            <button v-on:click.left="addHospitalForm = !addHospitalForm" class="btn iq-bg-danger">cancel</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- End of modal -->

    <Head />

    <!-- Page Content  -->
    <div id="content-page" class="content-page">
        <TopBar />

        <!-- TOP Nav Bar END -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row">

                        <!-- <flatfile-button :licenseKey="this.licenseKey" :customer="this.customer" :settings="this.settings" :onData="this.onData">
                            Import Contacts
                        </flatfile-button> -->

                        <div class="col-md-6 col-lg-3" id="flip-card">
                            <div id="flip-card-inner" class="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div id="flip-card-front" class="iq-card-body P-0 rounded" style="background:  no-repeat scroll center center; background-size: contain; min-height: 150px;">
                                    <img src="/images/page-img/38.jpg" alt="Avatar" style="width:200px;height:100px;"><br>
                                    <span>fasdf</span>
                                </div>
                                <div id="flip-card-back" class="iq-card-body P-0 rounded">
                                    <h5>fasdfasdf</h5>
                                    <p>region & city</p>
                                    <p>date</p>
                                </div>
                            </div>
                        </div>

                        <!-- Trigger modal opening -->
                        <div class="col-md-6 col-lg-3" id="addproject" v-on:click.left="addHospital()">
                            <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div class="iq-card-body P-0 rounded" style="background-size: contain; min-height: 150px; align-items: center;">
                                    <div class="addproject1" style="min-height: 115px;">
                                        <img src="/images/page-img/plus.png" width="40" height="40">
                                        <span>add hospital</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height iq-user-profile-block">
                        <div class="iq-card-body">
                            <div class="user-details-block">
                                <div class="user-profile text-center">
                                    <img src="/images/user/12.png" alt="profile-img" class="avatar-130 img-fluid">
                                </div>
                                <div class="text-center mt-3">
                                    <h4>
                                        <b>MINSANTE</b>
                                    </h4>
                                    <p>Miendjem Daniel</p>
                                    <p>Ministry of Public Health Cameroon Republic <br>Your health our priority !!</p>
                                    <a href="#" class="btn btn-primary">View More</a>
                                </div>
                                <hr>
                                <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0">
                                    <li class="text-center">
                                        <h3 class="counter">450</h3>
                                        <span>Total Request</span>
                                    </li>
                                    <li class="text-center">
                                        <h3 class="counter">30</h3>
                                        <span>Daily Request</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">Health Centers Distribution Curve</h4>
                            </div>
                        </div>
                        <div class="iq-card-body">
                            <div id="am-simple-chart" style="height: 350px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height p-3">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">Time</h4>
                            </div>
                        </div>

                        <div class="iq-card-body row">
                            <div class="analog-clock iq-card-body P-0 rounded mb-3">

                                <canvas id="canvas" width="inherit" height="inherit">
                                </canvas>
                            </div>
                            <center>
                                <h4>Active Time</h4>
                            </center>
                            <div class="iq-card-body P-0 rounded digital-clock mt-3" style="">

                                <div id="digital-clock" class="font-size-24">
                                    <span class="h" id="h">01</span>
                                    <span>:</span>
                                    <span class="m" id="m">53</span>
                                    <span>:</span>
                                    <span class="s" id="s">15</span>&nbsp;
                                    <span class="t" id="t">AM</span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">Patient overview</h4>
                            </div>
                        </div>
                        <div class="iq-card-body pl-0 pr-0">
                            <div id="home-chart-03" style="height: 280px;"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <center>
                                    <h4 class="card-title">Relative percentage of hospital</h4>
                                </center>
                            </div>
                        </div>
                        <div class="iq-card-body">
                            <ul class="doctors-lists m-0 p-0">
                                <div class="iq-details">
                                    <span class="title text-dark">
                                        fasdf
                                    </span>
                                    <div class="percentage float-right text-<?= $color ?>">
                                        10
                                        <span>%</span>
                                    </div>
                                    <div class="iq-progress-bar-linear d-inline-block w-100">
                                        <div class="iq-progress-bar">
                                            <span class="bg-<?= $color ?>" data-percent="<?= $region_percent ?>"></span>
                                        </div>
                                    </div>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <!--                  <div class="col-lg-4">-->
                <!--                     <div class="iq-card iq-card-block iq-card-stretch iq-card-height">-->
                <!--                        <div class="iq-card-header d-flex justify-content-between">-->
                <!--                           <div class="iq-header-title">-->
                <!--                              <h4 class="card-title">Nearest Treatment</h4>-->
                <!--                           </div>-->
                <!--                        </div>-->
                <!--                        <div class="iq-card-body smaill-calender-home">-->
                <!--                           <input type="text" class="flatpicker d-none">-->
                <!--                        </div>-->
                <!--                     </div>-->
                <!--                  </div>-->
                <div class="col-lg-6">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height-half">
                        <div class="iq-card-body">
                            <h6>TOTAL NUMBER OF HOPITAL YOU CREATED</h6>
                            <h3>
                                <b>
                                    total
                                </b>
                            </h3>
                        </div>
                        <div id="wave-chart-7"></div>
                    </div>
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height-half">
                        <div class="iq-card-body">
                            <h6>TOTAL NUMBER OF HOPITAL CREATED</h6>
                            <h3>
                                <b>
                                    total hospital
                                </b>
                            </h3>
                        </div>
                        <div id="wave-chart-8"></div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">Hospital Management</h4>
                            </div>
                        </div>
                        <div class="iq-card-body hospital-mgt">
                            <div class="progress mb-3" style="height: 30px;">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: 20%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">OPD</div>
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                            <div class="progress mb-3" style="height: 30px;">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: 30%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Treatment</div>
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                            <div class="progress mb-3" style="height: 30px;">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: 60%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Laboratory Test</div>
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">85%</div>
                            </div>
                            <div class="progress mb-3" style="height: 30px;">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: 40%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">New Patient</div>
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                            <div class="progress mb-3" style="height: 30px;">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: 35%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Doctors</div>
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">95%</div>
                            </div>
                            <div class="progress" style="height: 30px;">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: 28%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Discharge</div>
                                <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">35%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">New Appointments </h4>
                            </div>
                            <div class="iq-card-header-toolbar d-flex align-items-center">
                                <div class="dropdown">
                                    <span class="dropdown-toggle text-primary" id="dropdownMenuButton5" data-toggle="dropdown">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
                                        <a class="dropdown-item" href="#">
                                            <i class="ri-eye-fill mr-2"></i>View</a>
                                        <a class="dropdown-item" href="#">
                                            <i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                        <a class="dropdown-item" href="#">
                                            <i class="ri-pencil-fill mr-2"></i>Edit</a>
                                        <a class="dropdown-item" href="#">
                                            <i class="ri-printer-fill mr-2"></i>Print</a>
                                        <a class="dropdown-item" href="#">
                                            <i class="ri-file-download-fill mr-2"></i>Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="iq-card-body">
                            <div class="table-responsive">
                                <table class="table mb-0 table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Patient</th>
                                            <th scope="col">Doctor</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Timing</th>
                                            <th scope="col">Contact</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Petey Cruiser</td>
                                            <td>Dr.Monty Carlo</td>
                                            <td>20/02/2020</td>
                                            <td>8:00 AM</td>
                                            <td>+1-202-555-0146</td>
                                        </tr>
                                        <tr>
                                            <td>Anna Sthesia</td>
                                            <td>Dr.Pete Sariya</td>
                                            <td>25/02/2020</td>
                                            <td>8:30 AM</td>
                                            <td>+1-202-555-0164</td>
                                        </tr>
                                        <tr>
                                            <td>Paul Molive</td>
                                            <td>Dr.Brock Lee</td>
                                            <td>25/02/2020</td>
                                            <td>9:45 AM</td>
                                            <td>+1-202-555-0153</td>
                                        </tr>
                                        <tr>
                                            <td>Anna Mull</td>
                                            <td>Dr.Barb Ackue</td>
                                            <td>27/02/2020</td>
                                            <td>11:30 AM</td>
                                            <td>+1-202-555-0154</td>
                                        </tr>
                                        <tr>
                                            <td>Paige Turner</td>
                                            <td>Dr.Walter Melon</td>
                                            <td>28/02/2020</td>
                                            <td>3:30 PM</td>
                                            <td>+1-202-555-0101</td>
                                        </tr>
                                        <tr>
                                            <td>Don Stairs</td>
                                            <td>Dr.Arty Ficial</td>
                                            <td>28/02/2020</td>
                                            <td>4:30 PM</td>
                                            <td>+1-202-555-0176</td>
                                        </tr>
                                        <tr>
                                            <td>Pat Agonia</td>
                                            <td>Dr.Barb Ackue</td>
                                            <td>29/02/2020</td>
                                            <td>5:00 PM</td>
                                            <td>+1-202-555-0194</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">Hospital Lists</h4>
                            </div>
                        </div>
                        <div class="iq-card-body">
                            <ul class="doctors-lists m-0 p-0">
                                <li class="d-flex mb-4 align-items-center">
                                    <div class="user-img img-fluid">
                                        <img src="/images/user/12.png" alt="story-img" class="rounded-circle avatar-40"></div>
                                    <div class="media-support-info ml-3">
                                        <h6>
                                            name
                                        </h6>
                                        <p class="mb-0 font-size-12">
                                            city, 'hostpital
                                        </p>
                                    </div>
                                    <div class="iq-card-header-toolbar d-flex align-items-center">
                                        <div class="dropdown show">
                                            <span class="dropdown-toggle text-primary" id="dropdownMenuButton41" data-toggle="dropdown" aria-expanded="true" role="button">
                                                <i class="ri-more-2-line"></i>
                                            </span>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a class="dropdown-item" href="#">
                                                    <i class="ri-message-2-fill mr-2"></i>
                                                    email
                                                </a>
                                                <a class="dropdown-item" href="#">
                                                    <i class="ri-phone-fill mr-2"></i>
                                                    contact
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a href="javascript:void();" class="btn btn-primary d-block mt-3">
                                <i class="ri-add-line"></i> View All Hospitals </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- Wrapper END -->

        <Footer />

    </div>
</div>
</template>

<script>
import Head from "@/components/Include/Header/Client";
import TopBar from "@/components/Include/Header/TopBar";
import Footer from "@/components/Include/Footer/Footer";
import Axios from "axios";
import addHospitalValidation from '../../services/addHospitalValidation';
import {
    LOADING_SPINNER_SHOW_MUTATION,
    ADD_HOSPITAL,
} from '../../store/admindashboardconstant';
// import {
//     FlatfileButton
// } from '@flatfile/vuejs'
import {
    mapMutations,
    mapActions
} from "vuex";
// import {
//     setTimeout
// } from 'timers';

export default {
    components: {
        Head,
        TopBar,
        Footer,

        // FlatfileButton,
    },

    data() {
        return {
            addHospitalValue: {
                name: "",
                country: "",
                state: "",
                city: "",
                email: "",
                contact: "",
                matricule: "",
                description: "",
                created_by: "",
                log: "",
                lat: ""
            },
            errors: [],
            loadCountry: false,

            licenseKey: '4b2e3f9a-40b3-4801-a6d0-c50ec5a038e7',
            customer: {
                userId: '12345',
            },
            settings: {
                type: 'test import',
                fields: [{
                    label: 'name',
                    key: 'Name'
                }, {
                    label: 'email',
                    key: 'Email'
                }]
            },
            addHospitalForm: false,
            locationToken: "",
            countries: '<option selected="" disabled="">Select country</option>',
            states: '<option selected="" disabled="">Select state</option>',
            towns: '<option selected="" disabled="">Select town</option>'
        }
    },
    methods: {

        ...mapActions('auth', {
            addhos: ADD_HOSPITAL,
        }),

        // *optional* shown here for demonstration purposes
        onData: function (results) {
            // Do something with the data here
            console.log(results);
            return "Done!";
        },
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION,
        }),
        addHospital() {
            this.addHospitalForm = !this.addHospitalForm
            if (!this.loadCountry) {
                this.showLoading(true);
            }
        },
        getCountry(token) {
            this.states = ""
            this.towns = ""
            // var option = '<option value=""></option>';
            this.states = '<option selected="" disabled="">Select state</option>'
            this.towns = '<option selected="" disabled="">Select town</option>'
            const headers = {
                "Authorization": "Bearer " + token,
                "Accept": "application/json"
            }
            Axios.get("https://www.universal-tutorial.com/api/countries/", {
                headers
            }).then(response => {
                for (let index = 0; index < response.data.length; index++) {
                    var option = "<option value=" + response.data[index].country_name + ">" + response.data[index].country_name + "</option>";
                    this.countries = this.countries + option;
                }
                this.loadCountry = true
                this.showLoading(false);
            })

        },
        getStates(event) {
            this.showLoading(true);
            let country = event.target.value
            this.towns = ""
            this.towns = '<option selected="" disabled="">Select town</option>'
            const headers = {
                "Authorization": "Bearer " + this.locationToken,
                "Accept": "application/json"
            };
            Axios.get("https://www.universal-tutorial.com/api/states/" + country, {
                    headers
                })
                .then(response => {
                    console.log(response)
                    for (let index = 0; index < response.data.length; index++) {
                        var option = "<option value=" + response.data[index].state_name + ">" + response.data[index].state_name + "</option>";
                        this.states = this.states + option;
                    }
                    this.showLoading(false);

                })

        },
        getTowns(event) {
            this.showLoading(true);

            let state = event.target.value
            const headers = {
                "Authorization": "Bearer " + this.locationToken,
                "Accept": "application/json"
            };
            Axios.get("https://www.universal-tutorial.com/api/cities/" + state, {
                    headers
                })
                .then(response => {
                    for (let index = 0; index < response.data.length; index++) {
                        var option = "<option value=" + response.data[index].city_name + ">" + response.data[index].city_name + "</option>";
                        this.towns = this.towns + option;
                    }
                    this.showLoading(false);
                })

        },
        async onAddHospital() {
            console.log(this.addHospitalValue)

            let validations = new addHospitalValidation(
                this.addHospitalValue.name,
                this.addHospitalValue.country,
                this.addHospitalValue.state,
                this.addHospitalValue.city,
                this.addHospitalValue.email,
                this.addHospitalValue.contact,
                this.addHospitalValue.matricule,
                this.addHospitalValue.description,
                this.addHospitalValue.created_by
            );

            this.errors = validations.checkValidations();
            if ('name' in this.errors || 'country' in this.errors || 'state' in this.errors || 'city' in this.errors || 'email' in this.errors || 'contact' in this.errors || 'matricule' in this.errors || 'description' in this.errors) {
                return false;
            }
            //make spinner true
            this.showLoading(true);
            console.log(this.addHospitalValue)
            //signup registration
            // try {
            //     await this.addhos({
            //         email: this.email,
            //         password: this.password,
            //     });
            // } catch (error) {
            //     this.error = error;
            //     this.showLoading(false);
            // }
            this.showLoading(false);
        }
    },
    created() {},
    watch: {},
    props: {

    },
    mounted() {
        this.loadCountry = false
        // GET request using axios with set headers
        const headers = {
            "Accept": "application/json",
            "api-token": "qtQtIN_YTY7YK2tr6GO6M_exU0lYgwdPJ3VNbuEK9KS8i1oPhtDFw5YJnyi_R6yvs-8",
            "user-email": "miendjemthierry01@gmail.com"
        };
        Axios.get("https://www.universal-tutorial.com/api/getaccesstoken", {
                headers
            })
            .then(response => {
                this.locationToken = response.data.auth_token
                this.getCountry(response.data.auth_token)

            })

        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.9;
        setInterval(drawClock, 1000);

        function drawClock() {
            drawFace(ctx, radius);
            drawNumbers(ctx, radius);
            drawTime(ctx, radius);
        }

        function drawFace(ctx, radius) {
            var grad;
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();
            grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
            grad.addColorStop(0, "rgba(8, 155, 171, 1)");
            grad.addColorStop(0.5, "white");
            grad.addColorStop(1, "rgba(8, 155, 171, 1)");
            ctx.strokeStyle = grad;
            ctx.lineWidth = radius * 0.1;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(8, 155, 171, 1)";
            ctx.fill();
        }

        function drawNumbers(ctx, radius) {
            var ang;
            var num;
            ctx.font = radius * 0.15 + "px arial";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            for (num = 1; num < 13; num++) {
                ang = num * Math.PI / 6;
                ctx.rotate(ang);
                ctx.translate(0, -radius * 0.85);
                ctx.rotate(-ang);
                ctx.fillText(num.toString(), 0, 0);
                ctx.rotate(ang);
                ctx.translate(0, radius * 0.85);
                ctx.rotate(-ang);
            }
        }

        function drawTime(ctx, radius) {
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            //hour
            hour = hour % 12;
            hour =
                hour * Math.PI / 6 +
                minute * Math.PI / (6 * 60) +
                second * Math.PI / (360 * 60);
            drawHand(ctx, hour, radius * 0.5, radius * 0.07);
            //minute
            minute = minute * Math.PI / 30 + second * Math.PI / (30 * 60);
            drawHand(ctx, minute, radius * 0.8, radius * 0.07);
            // second
            second = second * Math.PI / 30;
            drawHand(ctx, second, radius * 0.9, radius * 0.02);
        }

        function drawHand(ctx, pos, length, width) {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.moveTo(0, 0);
            ctx.rotate(pos);
            ctx.lineTo(0, -length);
            ctx.stroke();
            ctx.rotate(-pos);
        }

        function Time() {
            // Creating object of the Date class
            var date = new Date();
            // Get current hour
            var hour = date.getHours();
            // Get current minute
            var minute = date.getMinutes();
            // Get current second
            var second = date.getSeconds();
            // Variable to store AM / PM
            var period = "";
            // Assigning AM / PM according to the current hour
            if (hour >= 12) {
                period = "PM";
            } else {
                period = "AM";
            }
            // Converting the hour in 12-hour format
            if (hour == 0) {
                hour = 12;
            } else {
                if (hour > 12) {
                    hour = hour - 12;
                }
            }
            // Updating hour, minute, and second
            // if they are less than 10
            hour = update(hour);
            minute = update(minute);
            second = update(second);
            // Adding time elements to the div
            document.getElementById("h").innerText = hour;
            document.getElementById("m").innerText = minute;
            document.getElementById("s").innerText = second;
            document.getElementById("t").innerText = period;
            // Set Timer to 1 sec (1000 ms)
            setTimeout(Time, 1000);
        }
        // Function to update time elements if they are less than 10
        // Append 0 before time elements if they are less than 10
        function update(t) {
            if (t < 10) {
                return "0" + t;
            } else {
                return t;
            }
        }
        Time();

    },
};
</script>

<style>
.digital-clock {

    background-color: black;
    width: 100%;
    height: 10vh;
    margin-top: 4px;
    background-color: rgba(8, 155, 171, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: white;
    font-family: Bernard MT Condensed;
    font-size: 40px;
}

.analog-clock {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    width: 100%;
    height: 20vh;
    overflow: hidden;
}

.analog-clock canvas {
    background-color: transparent;
    left: 50%;
    padding-left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.space {

    height: 10vh;
}

#addproject:hover {
    cursor: pointer;
}

.addhospital {
    width: 100%;

    overflow: auto;
    background-color: rgba(0, 0, 0, 0.466);
    position: absolute;
    z-index: 10000;
    display: flex;
    /* Hidden by default */
    position: fixed;
    /* Full height */
    overflow: auto;
    justify-content: center;
    align-items: center;

    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
}

.addproject1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100% !important;
    color: #1093d2;
}

/* The Modal (background) */
.model {
    margin-top: 12px;
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

#flip-card {
    background-color: transparent;
    width: 250px;
    height: 150px;
    border-radius: 25px;
    perspective: 1000px;
    /* Remove this if you
          don't want the 3D effect */
}

/* This container is needed to position the front and back side */
#flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
#flip-card:hover #flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
#flip-card-front,
#flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
#flip-card-front {
    background-color: #bbb;
    color: black;
}

/* Style the back side */
#flip-card-back {
    background-color: #089bab;
    color: white;
    transform: rotateY(180deg);
    text-transform: capitalize;
}
</style>
