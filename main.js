console.log('#pasoFino')

$(document).ready(function(){
	
}) 

// modal box for desktop
// bottom modal for cel phones 
// header & footer modal (optional)
// (modal) Methods: show & hide  - Events: show & hide


$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal("show");
    });
        $("#myModal").on('hidden.bs.modal', function () {
            alert('"V for Victory"(Winston Churchill) #pasoFino');
    });
});

// bootstrap tooltips -> explicacion en cuentos y biblioteca
// bootstrap Dropdown -> Cuentos de Carlitos -> links a otras paginas
