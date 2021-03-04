 $(document).ready(function () {
            $("button").click(function () {
                $("#bikeInformation").load("data/bikeInfo.txt", fadeText);
            });
        });

        function fadeText()
        {
            $("#bikeInformation").fadeOut("slow").fadeIn("slow");
        }