$(document).ready(function () {
    console.log("ready!");
    $("#citySearch").on("click", function () {
        var siteConstant = "https://listings.shootspace.io/?q="
        var userSearch = $("#citySearchInput").val();
        userSearch = userSearch.replace(new RegExp(" "), '+')
        console.log(userSearch)
        window.location.replace(siteConstant + userSearch);
        console.log(siteConstant + userSearch);
    })

    // //Hover Effect
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

    // Pricing as follows:
    // SEMI-ANNUAL: 23/month, billed every 6mo. (save 20%)
    // ANNUAL: 20/month, billed every year (save 30%)
    // MONTHLY: 29/month, billed monthly

    $(document).on("click", ".switchBilling", function () {
        // Display starts off on SEMI-ANNUAL PRICING
        console.log("Current billing ID: " + this.id);
        switch (this.id) {
            case "switchToAnnual":
                $("#basicSemiAnnualPrice").html("<h2>$20/month</h2><h6>Annual</br>Billed every year - save 30%</h6>")
                    .addClass("card-text")
                    .attr("id", "basicAnnualPrice");
                $("#switchToAnnual").html('> Switch to Monthly Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToMonthly");
                break;

            case "switchToMonthly":
                $("#basicAnnualPrice").html("<h2>$29/month</h2><h6>Monthly</br>Billed every month</h6>")
                    .addClass("card-text")
                    .attr("id", "basicMonthlyPrice");
                $("#switchToMonthly").html('> Switch to Semi-Annual Billing')
                    .addClass("switchBilling")
                    .attr("id", "switchToSemiAnnual");
                break;
            
            case "switchToSemiAnnual":
            $("#basicMonthlyPrice").html("<h2>$23/month</h2><h6>Semi-Annual</br>Billed every 6mo - save 20%</h6>")
                .addClass("card-text")
                .attr("id", "basicSemiAnnualPrice");
            $("#switchToSemiAnnual").html('> Switch to Annual Billing')
                .addClass("switchBilling")
                .attr("id", "switchToAnnual");
            break;
        };
    });
});

