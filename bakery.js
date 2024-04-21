
        console.log("inside script");
        function showDiv(type)
        {
            var type=type.options[type.selectedIndex].innerHTML;
            console.log(type);
            if(type=="round"){
                let toggle = document.getElementById('square');

                if (window.getComputedStyle(toggle).display !== 'none') {

                  toggle.style.display="none";
                }
                
                 document.getElementById("round").style.display = "block";
                }
            else{
                let toggle = document.getElementById('round');

                if (window.getComputedStyle(toggle).display !== 'none') {

                  toggle.style.display="none";
                }
                document.getElementById("square").style.display = "block";
            }
      }

        function submit() {




          var type = document.getElementById("shape").value;
          


          var fname= document.getElementById('fname').value;
          var lname=document.getElementById('lname').value;
          var address=document.getElementById('address').value;
          var postal=document.getElementById('postal').value;
          var phone=document.getElementById('phone').value;
          var email=document.getElementById('email').value;

          var opt1 =document.getElementById('opt1').value;
          var radius= parseFloat(document.getElementById('radius').value);
          console.log(radius);


          var opt2=document.getElementById('opt2').value;
          var length= parseFloat( document.getElementById('length').value);
          var width=parseFloat ( document.getElementById('width').value);
          console.log(length);

          var cheese1 = document.getElementById('cheese');
          console.log(cheese1.checked);
          var almonds1 = document.getElementById('almonds');
          console.log(almonds1.checked);
          var jam1 = document.getElementById('jam');
          console.log(jam1.checked);


          if (type=="round") {
            var area1 = 3.14*radius*radius;
        
                    
            var cost1 =   15+ (area1-707)*0.02;
            console.log(cost1);
        
            if (opt1 == 1) {
            var finalcost1 = cost1;
            }
            else if ( opt1 == 2) {
            var finalcost1 = cost1 + cost1*0.5;
            }
            else if (opt1==3) {
            var finalcost1 = cost1 + (cost1*0.5)*2;
            }
        
            console.log(finalcost1);
        }
        
        
        
        else if (type == "square") {
        
            var area2 =length*width;
        
            var cost2 = 18+ (area2-900)*0.02;
                   console.log(cost2);
                    
                   if (opt2 == 1) {
                    var finalcost2 = cost2;
                  }
                  else if ( opt2 == 2) {
                    var finalcost2 = cost2 + cost2*0.5;
                  }
                  else if (opt2==3) {
                    var finalcost2 = cost2 + (cost2*0.5)*2;
                  }
                  console.log(finalcost2);
        }
        




          if (cheese1.checked===true) {
            var cheesecost= 5;
            console.log(cheesecost);
          }
          else {
            var cheesecost = 0;
            console.log(cheesecost);
          }

          if (almonds1.checked===true) {
            var almondscost= 7;
          }
          else {
            var almondscost = 0;
          }

          if (jam1.checked===true) {
            var jamcost= 4;
          }
          else {
            var jamcost = 0;
          }


          var finalbill1 = finalcost1 +cheesecost+jamcost+almondscost;
          console.log(finalbill1);
          var finalbill2 = finalcost2 +cheesecost+jamcost+almondscost;


          
          document.write("<br><br><br>");
          document.write(fname +"&nbsp;"+ lname +"<br>" );
          document.write(address + "<br>");
          document.write(postal + "<br>");
          document.write(phone +"<br>");
          document.write(email);

          document.write("<br><br><p>Your order:</p><br><br>");




          if (type=="round") {
          document.write("Round cake" +"&nbsp;"+radius+"cm" +"&nbsp;"+ "with" +"&nbsp;"+ opt1 +"&nbsp;"+ "layers:"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+ "$"+ finalcost1.toFixed(2)+ "<br>");

             if (cheese1.checked===true) {
              document.write("Cream Cheese icing toping" +"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"$5" + "<br>");
             }
             if (almonds1.checked===true){
              document.write("Fruit and Almond topping" +"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"$7" + "<br>");
             }
             if (jam1.checked===true) {
              document.write("Fruit Jam filling"  +"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"$4" + "<br>");
             }
          
          document.write("Total"  +"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;" +"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"$" +finalbill1.toFixed(2));
            }
         
          else if (type ==="square") {
            document.write("Sheet cake" +"&nbsp;"+length+"cm"+ "&nbsp;"+"and" +"&nbsp;" +width+"cm" +"&nbsp;"+ "with" +"&nbsp;"+ opt2 +"&nbsp;"+ "layers:"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+ "$"+ finalcost2.toFixed(2) + "<br>");

            if (cheese1.checked===true) {
              document.write("Cream Cheese icing toping" +"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"$5" + "<br>");
             }
             if (almonds1.checked===true){
              document.write("Fruit and Almond topping" +"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"$7" + "<br>");
             }
             if (jam1.checked===true) {
              document.write("Fruit Jam filling"  +"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"$4" + "<br>");
             }
             document.write("Total" +"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;" +"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"$" +finalbill2.toFixed(2));

          }


      }
        

        