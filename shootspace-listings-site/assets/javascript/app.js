$( document ).ready(function() {
    console.log( "ready!" );
    $("#citySearch").on("click", function() {
        var siteConstant = "https://listings.shootspace.io/?q="
        var userSearch = $("#citySearchInput").val();
        userSearch = userSearch.replace(new RegExp(" "),'+')
        console.log(userSearch)
        window.location.replace(siteConstant + userSearch);
        console.log(siteConstant + userSearch);
    })
});

