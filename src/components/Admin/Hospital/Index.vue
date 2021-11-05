<template>
<div>

    <Head />

    <!-- Page Content  -->
    <div id="content-page" class="content-page">
        <TopBar />

        <!-- TOP Nav Bar END -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">List Hospitals</h4>
                            </div>
                            <div>
                                <div class="btn btn-primary">Add Hospital</div>
                            </div>
                        </div>
                        <div class="iq-card-body">

                            <div class="iq-card-header d-flex justify-content-between row">
                                <div class="iq-header-title col-md-6 col-lg-4 col-xl-3" style="display: flex;">
                                    <div class="h3 color-black">
                                        Sort By
                                    </div>
                                    <div>
                                        <select name="" class="ml-5 form-control" id="">
                                            <option value="name">All</option>
                                            <option value="name">name</option>
                                            <option value="name">name</option>
                                            <option value="name">name</option>
                                            <option value="name">name</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">

                                    <div class="input-group">
                                        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Search..." aria-describedby="inputGroupPrepend2" required>

                                        <div class="input-group-prepend" style="cursor: pointer;">
                                            <span class="input-group-text" id="inputGroupPrepend2"><img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table id="datatable" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                        <tr>
                                            <td>Garrett Winters</td>
                                            <td>Accountant</td>
                                            <td>Tokyo</td>
                                            <td>63</td>
                                            <td>2011/07/25</td>
                                            <td>$170,750</td>
                                        </tr>
                                        <tr>
                                            <td>Ashton Cox</td>
                                            <td>Junior Technical Author</td>
                                            <td>San Francisco</td>
                                            <td>66</td>
                                            <td>2009/01/12</td>
                                            <td>$86,000</td>
                                        </tr>
                                        <tr>
                                            <td>Cedric Kelly</td>
                                            <td>Senior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                            <td>2012/03/29</td>
                                            <td>$433,060</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->

        <Footer />

    </div>
</div>
</template>

<script>
import Head from "@/components/Include/Header/Client";
import TopBar from "@/components/Include/Header/TopBar";
import Footer from "@/components/Include/Footer/Footer";
export default {
    components: {
        Head,
        TopBar,
        Footer,

        // FlatfileButton,
    },

    created() {},
    watch: {},
    props: {

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
