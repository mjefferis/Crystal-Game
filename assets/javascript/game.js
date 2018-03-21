
       //these will be usesd to make our crystal images
    var images = ['assets/images/blue.jpeg', 'assets/images/green.jpeg', 'assets/images/yellow.jpeg', 'assets/images/red.jpeg'];

    //generate a random variable between 19 and 120
    var targetNumber = Math.floor(Math.random() * 102 + 19);
    $("#number-to-guess").text(targetNumber);

    //declare counter, wins, and losses variable
    var counter = 0;
    var wins = 0;
    var losses = 0;
    $("#number-counter").text(counter);
    $("#number-of-wins").text(wins);
    $("#number-of-losses").text(losses);

    function createCrystals() {

      //make the 4 crystals with a for loop
      for (var i = 0; i < 4; i++) {
        var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        var randomNumOptions = numberOptions[Math.floor(Math.random() * numberOptions.length)];

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", images[i]);

        imageCrystal.attr("data-crystalvalue", randomNumOptions);

        $("#crystals").append(imageCrystal);
      }

      // on click function for crystal images
      $(".crystal-image").on("click", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#number-counter").text(counter);


        if (counter === targetNumber) {
          alert("You win!");
          wins++;
          resetVariables();
          $('.crystal-image').hide();
          createCrystals();
        }

        else if (counter > targetNumber) {
          alert("You lose!");
          losses++;
          resetVariables();
          $('.crystal-image').hide();
          createCrystals();

        };
      });
    };

    //function that resets variables once game is complete 
    function resetVariables() {
      counter = 0;
      targetNumber = Math.floor(Math.random() * 102 + 19);
      $("#number-to-guess").text(targetNumber);
      $("#number-counter").text(counter);
      $("#number-of-wins").text(wins);
      $("#number-of-losses").text(losses);
      $('.crystal-image').hide();
      createCrystals();
    };

    //create crystals for first round
    createCrystals();

