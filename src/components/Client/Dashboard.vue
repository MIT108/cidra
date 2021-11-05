<template>
<div>

    <Head />

    <!-- Page Content  -->
    <div id="content-page" class="content-page">
        <TopBar />

        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 row m-0 p-0">
                    <div class="col-sm-12">
                        <div class="iq-card iq-card-block iq-card-stretch iq-card-height iq-user-profile-block" style="height: 75%;">
                            <div class="iq-card-body">
                                <div class="user-details-block">
                                    <div class="user-profile text-center">
                                        <img src="/images/user/11.png" alt="profile-img" class="avatar-130 img-fluid">
                                    </div>
                                    <div class="text-center mt-3">
                                        <h4><b>{{name}}</b></h4>
                                        <p>27 years, California</p>
                                    </div>
                                    <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0 mt-4 mb-0">
                                        <li class="text-center">
                                            <h6 class="text-primary">Weight</h6>
                                            <h3 id="weight"><span>kg</span></h3>
                                        </li>
                                        <li class="text-center">
                                            <h6 class="text-primary">Height</h6>
                                            <h3 id="height"><span>cm</span></h3>
                                        </li>
                                        <li class="text-center">
                                            <h6 class="text-primary">Goal</h6>
                                            <h3 class="text-warning" id="goal_weight">55<span>kg</span></h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                            <div class="iq-card-body">
                                <div class="patient-steps">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="col-md-6">
                                            <div class="data-block">
                                                <p class="mb-0">Walked</p>
                                                <h5><span id="walk">4532</span> steps</h5>
                                            </div>
                                            <div class="data-block mt-3">
                                                <p class="mb-0">My Goal</p>
                                                <h5><span id="goal_walk">6500</span> steps</h5>
                                            </div>
                                        </div>
                                        <div class="col-md-6" id="parent_per_walk">
                                            <div class="progress-round patient-progress mx-auto" id="percentage_walk" data-value="50">
                                                <span class="progress-left">
                                                    <span class="progress-bar border-secondary"></span>
                                                </span>
                                                <span class="progress-right">
                                                    <span class="progress-bar border-secondary"></span>
                                                </span>
                                                <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center text-center">
                                                    <div class="h4 mb-0">4532<br> <span class="font-size-14">left</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <ul class="patient-role list-inline d-flex align-items-center p-0 mt-4 mb-0">
                                        <div class="iq-progress-bar-linear d-inline-block w-100">
                                            <h6 class="mt-4 mb-3">Storage</h6>
                                            <div class="iq-progress-bar">
                                                <span class="bg-danger" id="progress_step"></span>
                                            </div>
                                            <span class="mt-1 d-inline-block w-100">46% to reach your daily step goal</span>
                                        </div>
                                    </ul>
                                </div>
                                <hr>
                                <div class="patient-steps2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="col-md-6">
                                            <div class="data-block">
                                                <p class="mb-0">Burned</p>
                                                <h5><span id="calorie"></span> kcal</h5>
                                            </div>
                                            <div class="data-block mt-3">
                                                <p class="mb-0">My Goal</p>
                                                <h5 id="">800 kcal</h5>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="progress-round patient-progress mx-auto" data-value="60">
                                                <span class="progress-left">
                                                    <span class="progress-bar border-secondary"></span>
                                                </span>
                                                <span class="progress-right">
                                                    <span class="progress-bar border-secondary"></span>
                                                </span>
                                                <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center text-center">
                                                    <div class="h4 mb-0 text-warning">325<br> <span class="font-size-14 text-secondary">left</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="patient-role list-inline d-flex align-items-center p-0 mt-4 mb-0">
                                        <div class="iq-progress-bar-linear d-inline-block w-100">
                                            <h6 class="mt-4 mb-3">Storage</h6>
                                            <div class="iq-progress-bar">
                                                <span class="bg-danger" data-percent="50"></span>
                                            </div>
                                            <span class="mt-1 d-inline-block w-100">46% to reach your calorie burned goal</span>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div class="iq-card-body pb-0">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="iq-card">
                                        <div class="iq-card-body bg-primary rounded pt-2 pb-2 pr-2">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <p class="mb-0">Advice! Connect your Smart Watch for better results.</p>
                                                <div class="rounded iq-card-icon bg-white">
                                                    <img src="/images/page-img/37.png" class="img-fluid" alt="icon">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="iq-card">
                                        <div class="iq-header-title">
                                            <h4 class="card-title text-primary">Popular Training</h4>
                                        </div>
                                        <div class="iq-card-body pl-0 pr-0 pb-0">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="training-block d-flex align-items-center">
                                                        <div class="rounded-circle iq-card-icon iq-bg-primary">
                                                            <img src="/images/page-img/34.png" class="img-fluid" alt="icon">
                                                        </div>
                                                        <div class="ml-3">
                                                            <h5 class="">Power Training</h5>
                                                            <p class="mb-0">395 kcal / h</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="training-block d-flex align-items-center">
                                                        <div class="rounded-circle iq-card-icon iq-bg-primary">
                                                            <img src="/images/page-img/35.png" class="img-fluid" alt="icon">
                                                        </div>
                                                        <div class="ml-3">
                                                            <h5 class="">Yoga Training</h5>
                                                            <p class="mb-0">395 kcal / h</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="training-block d-flex align-items-center">
                                                        <div class="rounded-circle iq-card-icon iq-bg-primary">
                                                            <img src="/images/page-img/36.png" class="img-fluid" alt="icon">
                                                        </div>
                                                        <div class="ml-3">
                                                            <h5 class="">Stretching</h5>
                                                            <p class="mb-0">395 kcal / h</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="iq-card">
                                        <div class="iq-card-header d-flex justify-content-between p-0 bg-white">
                                            <div class="iq-header-title">
                                                <h4 class="card-title text-primary">Activity Statistic</h4>
                                            </div>
                                        </div>
                                        <div class="iq-card-body p-0">
                                            <div id="patient-chart-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="iq-card mb-0">
                                        <div class="iq-card-header d-flex justify-content-between p-0 bg-white">
                                            <div class="iq-header-title">
                                                <h4 class="card-title text-primary">My Training</h4>
                                            </div>
                                            <div class="iq-card-header-toolbar d-flex align-items-center">
                                                <div class="dropdown">
                                                    <span class="dropdown-toggle iq-bg-primary btn" id="dropdownMenuButton4" data-toggle="dropdown">
                                                        <i class="ri-add-line m-0 text-primary"></i>
                                                    </span>
                                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton4">
                                                        <a class="dropdown-item" href="#"><i class="ri-eye-fill mr-2"></i>View</a>
                                                        <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                                        <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                                        <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                                        <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="iq-card-body p-0">
                                            <table class="table mb-0 table-borderless table-box-shadow">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Training</th>
                                                        <th scope="col">TRX Cardio</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Burned</td>
                                                        <td>350 kcal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Spend</td>
                                                        <td>1hr 45m</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table class="table mb-0 table-borderless mt-4 table-box-shadow">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Training</th>
                                                        <th scope="col">Stretching</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Burned</td>
                                                        <td>180 kcal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Spend</td>
                                                        <td>30m</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="iq-card">
                                        <div class="iq-card-header d-flex justify-content-between p-0 bg-white">
                                            <div class="iq-header-title">
                                                <h4 class="card-title text-primary">Heart Rate</h4>
                                            </div>
                                        </div>
                                        <div class="iq-card-body p-0">
                                            <div class="d-flex align-items-center">
                                                <div class="mr-3">
                                                    <h4 class=""><span id="heart_rate"></span> bpm</h4>
                                                    <p class="mb-0 text-primary">Health Zone</p>
                                                </div>
                                                <div class="rounded-circle iq-card-icon iq-bg-primary"><i class="ri-windy-fill"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="iq-card">
                                        <div class="iq-card-header d-flex justify-content-between p-0 bg-white">
                                            <div class="iq-header-title">
                                                <h4 class="card-title text-primary">Water Balance</h4>
                                            </div>
                                        </div>
                                        <div class="iq-card-body p-0">
                                            <div class="d-flex align-items-center">
                                                <div class="mr-3 text-left">
                                                    <p class="mb-0">Drunk</p>
                                                    <h4 class=""><span id="water_balance"></span> ml/ 2000 ml</h4>
                                                </div>
                                                <div class="rounded-circle iq-card-icon iq-bg-primary"><i class="ri-add-fill"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                        <a class="dropdown-item" href="#"><i class="ri-eye-fill mr-2"></i>View</a>
                                        <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                        <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                                        <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                        <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="iq-card-body">
                            <div class="table-responsive">
                                <ul class="doctors-lists m-0 p-0">
                                    <table class="table mb-0 table-borderless" style="text-align: center;">
                                        <thead>
                                            <tr>
                                                <th scope="col">Hospital</th>
                                                <th scope="col">Problem Description</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Time</th>
                                                <th scope="col">Duration</th>
                                                <th scope="col">status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-<?= $text?>">
                                                <form action="../../controller/Appointment.php" method="POST">

                                                    <td> $a->hospital ?></td>
                                                    <td> $a->description?></td>
                                                    <td> <input required type="date" name="date" class="form-control" value=" $a->date?>"></td>
                                                    <td> <input required type="time" name="time" class="form-control" value=" $a->time?>"></td>
                                                    <input required type="text" name="user_id" class="form-control" value=" $user_id?>" hidden>
                                                    <input required type="text" name="appointment_id" class="form-control" value=" $a->id?>" hidden>
                                                    <td> $a->duration?></td>
                                                    <td><button type="submit" name="modify_appointment_user" class="btn btn-success mb-3">modify</button></td>

                                                </form>

                                                php }else {?>

                                                <td> $a->hospital ?></td>
                                                <td> $a->description?></td>
                                                <td> $a->date?></td>
                                                <td> $a->time?></td>
                                                php if ($a->duration != 0) { ?>
                                                <td> $a->duration?></td>
                                                php }else{?>
                                                <td><a href="pricing.php?id_appointment=$a->id?>"><button type="button" class="btn btn-success mb-3">Set Duration</button></a></td>
                                                php } 
                                                  if ($a->status == "finish") {

                                                      $str = "?meeting_id=".$a->meeting_id."&meeting_pwd=".$a->meeting_pwd;
                                                      ?>

                                                <td><a href="consultation.php$str?>" class="text-success">
                                                        <i class="ri-vidicon-line"></i></a></td>

                                                php }else{?>
                                                <td>
                                                    <a href="../../controller/Appointment.php?delete== $a->id ?>">
                                                        <button type="button" name="home" class="btn btn-danger mt-3 text-white">delete</button>
                                                    </a>
                                                </td>
                                                php } 
                                              }
                                          ?>

                                            </tr>
                                            php } ?>
                                        </tbody>
                                    </table>
                                </ul>

                                <button data-toggle="modal" data-target="#bookApointment" style="width: 100%" class="btn btn-primary d-block mt-3"><i class="ri-add-line"></i> Book Appointment
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                        <div class="iq-card-header d-flex justify-content-between">
                            <div class="iq-header-title">
                                <h4 class="card-title">Town Frequency</h4>
                            </div>
                        </div>
                        <div class="iq-card-body">
                            <ul class="doctors-lists m-0 p-0">
                                <div class="iq-card-body">
                                    <div class="iq-details">
                                        <span class="title text-dark">Yaounde</span>
                                        <div class="percentage float-right text-primary">95 <span>%</span></div>
                                        <div class="iq-progress-bar-linear d-inline-block w-100">
                                            <div class="iq-progress-bar">
                                                <span class="bg-primary" data-percent="95"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="iq-details mt-4">
                                        <span class="title text-dark">Douala</span>
                                        <div class="percentage float-right text-warning">75 <span>%</span></div>
                                        <div class="iq-progress-bar-linear d-inline-block w-100">
                                            <div class="iq-progress-bar">
                                                <span class="bg-warning" data-percent="75"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="iq-details mt-4">
                                        <span class="title text-dark">Bafoussam</span>
                                        <div class="percentage float-right text-success">55 <span>%</span></div>
                                        <div class="iq-progress-bar-linear d-inline-block w-100">
                                            <div class="iq-progress-bar">
                                                <span class="bg-success" data-percent="55"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="iq-details mt-4">
                                        <span class="title text-dark">Maroua</span>
                                        <div class="percentage float-right text-danger">25 <span>%</span></div>
                                        <div class="iq-progress-bar-linear d-inline-block w-100">
                                            <div class="iq-progress-bar">
                                                <span class="bg-danger" data-percent="25"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--modals-->
        <!--booking modal-->
        <div id="bookApointment" class="modal fade" style="height: 100vh;" tabindex="10" role="dialog" aria-labelledby="bookApointment" aria-hidden="true">
            <div class="modal-dialog " role="document" style="height: auto !important;">
                <div class="modal-content p-3 m-2" style=" display: flex; justify-content: center; align-items: center; flex-direction: column">
                    <form style="width: 80%;" method="POST">
                        <div class="modal-header">
                            <h5 class="modal-title" id="bookApointments">Book Appointment</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div class="form-group">
                            <label for="client_name">Enter your name</label>
                            <input type="client_name" class="form-control" id="client_name" name="client_name" required>
                        </div>
                        <div class="form-group">
                            <label for="doctor_name">Select Region</label>

                            <select class="form-control" name="region" id="region" onchange="regionChange(event)">
                                <option selected="" disabled="">Select Region</option>
                                <option value="<?= $d['region'] ?>"></option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="doctor_name">Select City</label>

                            <select class="form-control" name="city" id="city" onchange="cityChange(event)">
                                <option selected="" disabled="">Select City</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="doctor_name">Select Hospital</label>

                            <select class="form-control" name="hospital" id="hospital" required>
                                <option selected="" disabled="">Select Hospital</option>

                            </select>
                        </div>
                        <div class="form-group">
                            <label for="date">Enter the appointment date</label>
                            <input type="date" class="form-control" id="date" name="date" required>
                        </div>
                        <div class="form-group">
                            <label for="time">Enter the appointment time</label>
                            <input type="time" class="form-control" id="time" name="time" required>
                        </div>
                        <div class="form-group">
                            <label for="description">Description of apppointment</label>
                            <textarea class="form-control" placeholder="Description should be max 60 characters" maxlength="60" name="description" id="description" required="true" rows="2"></textarea>
                        </div>
                        <div class="checkbox mb-3">
                            <label><input name="priority" type="checkbox"> Urgent case ?</label>
                        </div>
                        <input type="text" value="<?=$user_id?>" name="user_id" hidden>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" name="bookAppointment" class="btn btn-primary">Book Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <Footer />

    </div>
</div>
</template>

<script>
import Head from '@/components/Include/Header/Client'
import TopBar from '@/components/Include/Header/TopBar'
import Footer from '@/components/Include/Footer/Footer'

export default {
  watch: {
  },
    props: {
        name: name
    },
    methods: {},
    components: {
        Head,
        TopBar,
        Footer
    }
}
</script>
