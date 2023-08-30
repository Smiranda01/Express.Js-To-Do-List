$(document).ready(function() {
    // On page load, check localStorage for each checkbox's state
    $(".crossCheckbox").each(function(index) {
        var isChecked = localStorage.getItem("checkbox_" + index);
        
        if (isChecked === "true") {
            $(this).prop("checked", true);
            $(this).next("p").addClass("crossed");
        } else {
            $(this).prop("checked", false);
            $(this).next("p").removeClass("crossed");
        }
    });

    // When a checkbox is changed, update its state in localStorage
    $(".crossCheckbox").change(function() {
        var index = $(".crossCheckbox").index(this);
        
        if ($(this).is(":checked")) {
            $(this).next("p").addClass("crossed");
            localStorage.setItem("checkbox_" + index, true);
        } else {
            $(this).next("p").removeClass("crossed");
            localStorage.setItem("checkbox_" + index, false);
        }
    });
});

