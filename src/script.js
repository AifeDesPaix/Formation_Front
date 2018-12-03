import "./import-jquery";
import "jquery-ui-dist/jquery-ui.js";
import "materialize-css";

$(document).ready(function() {
  console.log($("*"));
  $(".sidenav").sidenav();
});
