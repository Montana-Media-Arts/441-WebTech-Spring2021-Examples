 let bike = {
                "manufacturer" : "Santa Cruz",
                "model" : "5010",
                "owner" : {
                    "firstName" : "Bob",
                    "lastName" : "Jones"
                },
                "sizes" : [
                    "small",
                    "medium",
                    "large",
                    "x-large"
                ]
            }
        
        $(function () {
            $("button").click(function () {
                showBikeInfo();
            });

        });
       
        function showBikeInfo()
            {
                $("#bikeInformation").html("Manufacturer: " + bike.manufacturer 
                + "<br>Model:" + bike.model + "<br>First Name:" + bike.owner.firstName + "<br>Last Name:" 
                + bike.owner.lastName + "<br>Sizes Available:<br>" +
                bike.sizes[0] + "<br>" + bike.sizes[1] + "<br>" + bike.sizes[2] + "<br>" + bike.sizes[3]);
            }