$( document ).ready(function() {
    console.log( "ready!" );
    $("#citySearch").on("click", function() {
        var siteConstant = "https://listings.shootspace.io/?q="
        var userSearch = $("#citySearchInput").val();
        window.location.replace(siteConstant + userSearch);
        // Site currently reloads upon click...
        console.log(siteConstant + userSearch);
    })
});
