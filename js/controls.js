$(document).ready(function() {
  $("#year_slider_ion").ionRangeSlider({
    grid: true,
    from: 0,
    values: [
        "1996", "2001", "2006", "2011"
    ],
    hide_min_max: true,
    hide_from_to: true,
    prettify_enabled: false
  });
});