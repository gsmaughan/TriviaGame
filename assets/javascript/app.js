window.onload = function loaded(){

	var i = 0;
	var right = 0;
	var wrong = 0;
	var tested = 0;

	var image;

	var button1;
	var button2;
	var button3;
	var button4;

	var radioBtn;
	var false1;
	var false2;
	var false3;

	var number = 10; //seconds to choose an answer
	var intervalId;

	var array = ["./assets/images/seth.jpg", "./assets/images/al2.jpg", "./assets/images/alma.jpg", "./assets/images/dority.jpg", "./assets/images/joanie.jpg", 
					"./assets/images/doc.jpg", "./assets/images/sol.jpg", "./assets/images/trixie.jpg", "./assets/images/farnum.jpg", "./assets/images/cy.jpg"]

	var characters = ["Seth Bullock", "Al Swearengen", "Alma Garrett", "Dan Dority", "Joanie Stubbs", "Doc Cochran",
	 "Sol Star", "Trixie", "E.B. Farnum", "Cy Tolliver"];

	 

	$("#start").on("click", function(){
		$("#start").text("Submit");
		picture();
		number = 11;
		temp = "";

		// i++;
	}); //end start on click

	function picture(){

		if(i <= 9){
		$("#photo").html('<img src= "'+array[i]+'" width="230" height="230" alt="image"></img>');
		
		console.log(i);
		question();
		}

		else if (i >= 10){
			$("#start").detach();
			$("#photo").detach();
			$("#body").css('background-image', 'url(./assets/images/deadwood3.jpg)');
			$("#question").empty();
			
			// SHOW RESULTS HERE
		}
		i++;

	} //end picture function

	function question(){
		$("#who").text("Who is this character?");
		radio();
		run();
	} //end question function

	function radio(){
		if (i == 0){
			//Seth Bullock
  			false1 = $('<input type="radio" name="test" id="test" value = "1" >Al Swearengen</input>');
			radioBtn =  $('<input type="radio" name="test" id="test" value = "1" class = "correct">Seth Bullock</input>');
    		false2 =  $('<input type="radio" name="test" id="test" value = "1">Sol Star</input>');
    	 	false3 =  $('<input type="radio" name="test" id="test" value = "1">Dan Dority</input>');
			
			$("#radioButton").append(radioBtn, false3, false2, false1);

			test();
    		
		} //end i == 0

		if(i == 1){
			//Al Swearengen
			 $("#radioButton").empty();
			 radioBtn = $('<input type="radio" name="test" id="test" value = "1" class = "correct">Al Swearengen</input>');
			 false1 =  $('<input type="radio" name="test" id="test" value = "2">Seth Bullock</input>');
    		 false2 =  $('<input type="radio" name="test" id="test" value = "3">Sol Star</input>');
    		 false3 =  $('<input type="radio" name="test" id="test" value = "4">Dan Dority</input>');
    		
    		 $("#radioButton").append(false3, false1, radioBtn, false2);

    		 test();
		}
		if(i == 2){
			//Alma Garrett
			 radioBtn = $('<input type="radio" name="test" id="Alma Garrett" value="1">Alma Garrett</input>');
			 false1 =  $('<input type="radio" name="test">Joanie Stubbs</input>');
    		 false2 =  $('<input type="radio" name="test">Trixie</input>');
    		 false3 =  $('<input type="radio" name="test">Calamity Jane</input>');
    		 $("#radioButton").empty();
    		 $("#radioButton").append(false3, false1, false2, radioBtn);
    		 test();
		}
		if(i == 3){
			//Dan Dority
			 var false3 = $('<input type="radio" name="Doc Cochran" id="Doc Cochran">Doc Cochran</input>');
			 var false1 =  $('<input type="radio" name="E.B. Farnum">E.B. Farnum</input>');
    		 var false2 =  $('<input type="radio" name="Cy Tolliver">Cy Tolliver</input>');
    		 radioBtn =  $('<input type="radio" name="Dan Dority">Dan Dority</input>');
    		 $("#radioButton").empty();
    		 $("#radioButton").append(false3, false1, radioBtn, false2);	
    	}
    	if(i == 4){
			//Joanie Stubbs
			 radioBtn = $('<input type="radio" name="Joanie Stubbs" id="Joanie Stubbs">Joanie Stubbs</input>');
			 var false1 =  $('<input type="radio" name="Alma Garrett">Alma Garrett</input>');
    		 var false2 =  $('<input type="radio" name="Trixie">Trixie</input>');
    		 var false3 =  $('<input type="radio" name="Calamity Jane">Calamity Jane</input>');
    		 $("#radioButton").empty();
    		 $("#radioButton").append(false3, false1, false2, radioBtn);
		}
		if(i == 5){
			//Doc Cochran
			 radioBtn = $('<input type="radio" name="Doc Cochran" id="Doc Cochran">Doc Cochran</input>');
			 var false1 =  $('<input type="radio" name="E.B. Farnum">E.B. Farnum</input>');
    		 var false2 =  $('<input type="radio" name="Sol Star">Sol Star</input>');
    		 var false3 =  $('<input type="radio" name="Dan Dority">Dan Dority</input>');
    		 $("#radioButton").empty();
    		 $("#radioButton").append(radioBtn, false1, false3, false2);	
    	}
    	if(i == 6){
			//Sol Star
			 var false2 = $('<input type="radio" name="Doc Cochran" id="Doc Cochran">Doc Cochran</input>');
			 var false1 =  $('<input type="radio" name="E.B. Farnum">E.B. Farnum</input>');
    		 radioBtn =  $('<input type="radio" name="Sol Star">Sol Star</input>');
    		 var false3 =  $('<input type="radio" name="Dan Dority">Dan Dority</input>');
    		 $("#radioButton").empty();
    		 $("#radioButton").append(false3, false1, radioBtn, false2);	
    	}
    	if(i == 7){
			//Trixie
			 var false2 = $('<input type="radio" name="Joanie Stubbs" id="Joanie Stubbs">Joanie Stubbs</input>');
			 var false1 =  $('<input type="radio" name="Alma Garrett">Alma Garrett</input>');
    		 radioBtn =  $('<input type="radio" name="Trixie">Trixie</input>');
    		 var false3 =  $('<input type="radio" name="Calamity Jane">Calamity Jane</input>');
    		 $("#radioButton").empty();
    		 $("#radioButton").append(false3, radioBtn, false1, false2);
		}
		if(i == 8){
			//E.B. Farnum
			 var false1 = $('<input type="radio" name="Doc Cochran" id="Doc Cochran">Doc Cochran</input>');
			 radioBtn =  $('<input type="radio" name="E.B. Farnum">E.B. Farnum</input>');
    		 var false2 =  $('<input type="radio" name="Sol Star">Sol Star</input>');
    		 var false3 =  $('<input type="radio" name="Dan Dority">Dan Dority</input>');
    		 $("#radioButton").empty();
    		 $("#radioButton").append(radioBtn, false1, false2, false3);	
    	}
    	if(i == 9){
			//Cy Tolliver
			 var false3 = $('<input type="radio" name="Doc Cochran" id="Doc Cochran">Doc Cochran</input>');
			 var false1 =  $('<input type="radio" name="E.B. Farnum">E.B. Farnum</input>');
    		 radioBtn =  $('<input type="radio" name="Cy Tolliver">Cy Tolliver</input>');
    		 var false2 =  $('<input type="radio" name="Dan Dority">Dan Dority</input>');
    		 $("#radioButton").empty();
    		 $("#radioButton").append(radioBtn, false1, false3, false2);	
    	}
	} //end radio function

	function test(){
		$('#test').click(function () {
			tested++;
			console.log("tested " + tested + " times");
   				if (this.class == 'correct') {
      				temp = "right!";
      				console.log("temp is " + temp);
  				}
			}); // end click function
		}
		

	// function testForWrong(){

	// 	$('#test').click(function () {
 //   				if (this.value == '2') {
 //      			alert('Wrong answer');
 //  				$('input:radio[value!=2]').prop("checked", false);;
 //  				console.log("line 180 works");
 //  				}
	// 		}); // end click function
	// 	}





	function run() {    // function for timer
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }  // end run function

    //  The decrement function.
    function decrement() {  // function for timer decrement

      //  Decrease number by one.
      number--;

      //  Show the number in the #row1 tag.
      $("#row3").html("<h2>" + number + "</h2>");  //show the time in html


      //  Once number hits zero...
      if (number === 0) {
        wrong++;
        picture();
        number = 10;
      }
    } // end decrement function






}// end window on.load