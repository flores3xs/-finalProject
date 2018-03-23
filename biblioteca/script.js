console.log("#pasoFino")

// modal box for desktop
// bottom modal for cel phones 
// header & footer modal (optional)

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal("show");
    });
        $("#myModal").on('hidden.bs.modal', function () {
            alert('"V for Victory"(Winston Churchill) #pasoFino');
    });
});