

function collect()
{
    var total = document.getElementById("total").value;
    var liquid = document.getElementById("liquid").value;
    var ratio = document.getElementById("ratio").value;
    
    var tip= (total - liquid) *ratio ;
    document.getElementById("tip").innerHTML =tip;
    
}

