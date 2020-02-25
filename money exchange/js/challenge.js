
function collect() {
    var amount = document.getElementById("amount").value;
    var currency = document.getElementById("currency").value;

	    if (!amount || amount ==0) {
        document.getElementById("oneDoller").innerHTML = 0;
        document.getElementById("TolalDoller").innerHTML = 0;


        document.getElementById("oneRY").innerHTML = 0;
        document.getElementById("TolalRY").innerHTML =0;

        document.getElementById("oneRS").innerHTML = 0;
        document.getElementById("TolalRS").innerHTML = 0;

        document.getElementById("oneYoro").innerHTML = 0;
        document.getElementById("TolalYoro").innerHTML = 0;



    }
	
	  
     else if (currency == 1) {
        document.getElementById("oneDoller").innerHTML = 1  + " دولار";
        document.getElementById("TolalDoller").innerHTML = amount * 1 + " دولار";


        document.getElementById("oneRY").innerHTML = 605  + " ريال يمني";
        document.getElementById("TolalRY").innerHTML = amount * 605 + " ريال يمني";

        document.getElementById("oneRS").innerHTML = 3.75 + " ريال سعودي";
        document.getElementById("TolalRS").innerHTML = amount * 3.75 + " ريال سعودي";

        document.getElementById("oneYoro").innerHTML = .91 + " يورو ";
        document.getElementById("TolalYoro").innerHTML = amount * .91 + " يورو ";



    } else if (currency == 2) {
        document.getElementById("oneDoller").innerHTML = 0.0017  + " دولار";
        document.getElementById("TolalDoller").innerHTML = amount * 0.0017   + " دولار";


        document.getElementById("oneRY").innerHTML = 1 + " ريال يمني";
        document.getElementById("TolalRY").innerHTML = amount * 1 + " ريال يمني";

        document.getElementById("oneRS").innerHTML = 0.006 + " ريال سعودي";
        document.getElementById("TolalRS").innerHTML = amount * 0.006 + " ريال سعودي";

        document.getElementById("oneYoro").innerHTML = 0.0036 + " يورو ";
        document.getElementById("TolalYoro").innerHTML = amount * 0.0036 + " يورو ";
        
    } 
    
    
    else if (currency == 3) {
        document.getElementById("oneDoller").innerHTML = 0.27 + " دولار";
        document.getElementById("TolalDoller").innerHTML = amount * 0.27 + " دولار";


        document.getElementById("oneRY").innerHTML = 158 + " ريال يمني";
        document.getElementById("TolalRY").innerHTML = amount * 158 + " ريال يمني";

        document.getElementById("oneRS").innerHTML = 1 + " ريال سعودي";
        document.getElementById("TolalRS").innerHTML = amount * 1 + " ريال سعودي";

        document.getElementById("oneYoro").innerHTML = 0.24 + " يورو ";
        document.getElementById("TolalYoro").innerHTML = amount * 0.24 + " يورو ";
    } 
    
    
    else if (currency == 4) {
        document.getElementById("oneDoller").innerHTML = 0.0017  + " دولار";
        document.getElementById("TolalDoller").innerHTML = amount * 0.0017 + " دولار";


        document.getElementById("oneRY").innerHTML = 274.5 + " ريال يمني";
        document.getElementById("TolalRY").innerHTML = amount * 274.5 + " ريال يمني";

        document.getElementById("oneRS").innerHTML = 4.11 + " ريال سعودي";
        document.getElementById("TolalRS").innerHTML = amount * 4.11 + " ريال سعودي";

        document.getElementById("oneYoro").innerHTML = 1 + " يورو ";
        document.getElementById("TolalYoro").innerHTML = amount * 1 + " يورو ";
    }



}





