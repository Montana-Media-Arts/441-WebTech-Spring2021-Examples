 $(document).ready(function () {
            $("button").click(function () {
                $("#bikeInformation").load("data/bike.json", function(responseText){
                    var bike = JSON.parse(responseText);
                    $("#bikeInformation").html("Manufacturer: " + bike.manufacturer 
                + "<br>Model:" + bike.model + "<br>First Name:" + bike.owner.firstName + "<br>Last Name:" 
                + bike.owner.lastName + "<br>Sizes Available:<br>" +
                bike.sizes[0] + "<br>" + bike.sizes[1] + "<br>" + bike.sizes[2] + "<br>" + bike.sizes[3]);
                });
            });
        });

       /* function fadeText()
        {
            $("#bikeInformation").fadeOut("slow").fadeIn("slow");
        }
        */