/* <!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="plugins/jquery-ui/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
    <!-- Bootstrap 4 -->
    <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- ChartJS -->
    <script src="plugins/chart.js/Chart.min.js"></script>
    <!-- Sparkline -->
    <script src="plugins/sparklines/sparkline.js"></script>
    <!-- JQVMap -->
    <script src="plugins/jqvmap/jquery.vmap.min.js"></script>
    <script src="plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
    <!-- jQuery Knob Chart -->
    <script src="plugins/jquery-knob/jquery.knob.min.js"></script>
    <!-- daterangepicker -->
    <script src="plugins/moment/moment.min.js"></script>
    <script src="plugins/daterangepicker/daterangepicker.js"></script>
    <!-- Tempusdominus Bootstrap 4 -->
    <script src="plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
    <!-- Summernote -->
    <script src="plugins/summernote/summernote-bs4.min.js"></script>
    <!-- overlayScrollbars -->
    <script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
    <!-- AdminLTE App -->
    <script src="dist/js/adminlte.js"></script>
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <script src="dist/js/pages/dashboard.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="dist/js/demo.js"></script> */

global.moment = require('moment');
global.Sparkline = require('../../../../node_modules/admin-lte/plugins/sparklines/sparkline');

//global.window.$ = window.jQuery = require('jquery');

require('tempusdominus-bootstrap-4');


import 'moment-timezone';

//import "../../../../node_modules/admin-lte/plugins/jquery/jquery.js";
import "../../../../node_modules/jquery/src/jquery.js";
import "../../../../node_modules/admin-lte/plugins/jquery-ui/jquery-ui.js";

//import "../../../../node_modules/admin-lte/plugins/inputmask/inputmask.js";
$.widget.bridge('uibutton', $.ui.button);

import "../../../../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.js";
import "../../../../node_modules/admin-lte/plugins/chart.js/Chart.js";
//import "../../../../node_modules/admin-lte/plugins/sparklines/sparkline.js";

//import "jquery-sparkline";
import "../../../../node_modules/admin-lte/plugins/jqvmap/jquery.vmap.js";
import "../../../../node_modules/admin-lte/plugins/jqvmap/maps/jquery.vmap.usa.js";

import "../../../../node_modules/admin-lte/plugins/jquery-knob/jquery.knob.min.js";

//import "moment";

import "../../../../node_modules/admin-lte/plugins/daterangepicker/daterangepicker.js";
//import "tempusdominus-bootstrap-4";
import "../../../../node_modules/admin-lte/plugins/summernote/summernote-bs4.js";
import "../../../../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.js";
import "../../../../node_modules/admin-lte/dist/js/adminlte.js";
import "../../../../node_modules/admin-lte/dist/js/pages/dashboard.js";
import "../../../../node_modules/admin-lte/dist/js/demo.js";