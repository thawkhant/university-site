// Start jQuery Area

$(document).ready(function(){

	// Start Header Section
         // Start Nav Bar
         
              $(".navbuttons").click(function(){
              	$(this).toggleClass("crossxs")
              })


        //  End Nav Bar
	// End Hedader Section

  
// Start Login Box

$("#open-btn").click(function(){
  document.getElementById("form-popup").style.display = 'block';
})

$("#formclose-btn").click(function(){
  document.getElementById("form-popup").style.display = "none";
})

// End Login Box
	
});


// End jQuery



// Start Javascript Area 
  // Start Student Counter Section

    var getcountervalues = document.querySelectorAll('.countervalue');
   //  console.log(getcountervalues);

   getcountervalues.forEach(function(getcountervalue){
       // console.log(getcountervalue);

       getcountervalue.textContent = 0;

       const updatecounter = function(){
       	// console.log("i am working");

       	const getcountertarget = +getcountervalue.getAttribute('data-target');   // + sign is to change number sir
       //	console.log(getcountertarget);
       // console.log(typeof getcountertarget);

       const getcountercontent = +getcountervalue.textContent;
       // console.log(typeof getcountercontent);

       const incnumber = getcountertarget / 100;
       console.log(incnumber);

       if(getcountercontent < getcountertarget){
          
          getcountervalue.textContent = getcountercontent + incnumber;

          setTimeout(updatecounter,50)
       }


       };

       updatecounter()
   })

 // End Student Counter Section
// End Javascript Area

// google code for chart
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',    8],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonesia', 2],
          ['Japan',    8]
        ]);

        var options = {
          title: 'International Students',
          // is3D: true,
          width:550,
           height:400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
// end google code for chart
// Start Ration Section


//End Rating Section


const getyear = document.getElementById("getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.textContent = getfullyear;
