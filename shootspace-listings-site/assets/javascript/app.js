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

    // Hover Effect
        // $(".card").hover(
        //     function(){ 
        //         $(this).animate({
        //             marginTop: "-=1%",
        //         }, 200);
        //     },

        //     function() {
        //         $(this).animate({
        //             marginTop: "8%"
        //         }, 200);
        //     },
        // );
});

