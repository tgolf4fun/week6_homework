$(document).ready(function(){
  console.log("LETS GO!!");
  //clear out any classes already there
  $('body').removeClass();
  $('#city-type').click(cityBackground);
    // create an array of cities
    var myCities = ["NYC","SF","LA","ATX","SYD","SEA"];
    //not needed but just making sure I can read my array
    console.log(myCities[0]);

    //add array values to the option menu on the html page
    myCities.forEach(function(item){
            $('#city-type').append($("<option>"+item+"</option>"));
        });
    //Update html page background
    function cityBackground(){
        event.preventDefault();
    // get user selection
    var city = $('#city-type').val();
    // conditionals for input comparison to defined cities
    if (city === "NYC") {
        //use the attr instead of addClass method
        $('body').attr('class', 'nyc');
        }
    else if (city === "SF") {
        $('body').attr('class', 'sf');
        }
    else if (city === "LA") {
        $('body').attr('class', 'la')
        }
    else if (city === "ATX") {
        $('body').attr('class', 'austin')
        }
    else if (city == "SYD") {
        $('body').attr('class', 'sydney')
        }
    else if (city == "SEA") {
        $('body').attr('class', 'sea')
        }
    }
});
