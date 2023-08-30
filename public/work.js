$(document).ready(function() {
    // On page load, check localStorage for each checkbox's state
    $(".crossCheckboxWork").each(function(index) {
        var isChecked = localStorage.getItem("checkboxwork_" + index);
        
        if (isChecked === "true") {
            $(this).prop("checked", true);
            $(this).next("p").addClass("crossed");
        } else {
            $(this).prop("checked", false);
            $(this).next("p").removeClass("crossed");
        }
    });

    // When a checkbox is changed, update its state in localStorage
    $(".crossCheckboxWork").change(function() {
        var index = $(".crossCheckboxWork").index(this);
        
        if ($(this).is(":checked")) {
            $(this).next("p").addClass("crossed");
            localStorage.setItem("checkboxwork_" + index, true);
        } else {
            $(this).next("p").removeClass("crossed");
            localStorage.setItem("checkboxwork_" + index, false);
        }
    });
});
