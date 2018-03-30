console.log("#pasoFino")

// ToolTips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

// modal
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal("show");
    });
        $("#myModal").on('hidden.bs.modal', function () {
            alert('"V for Victory"(Winston Churchill) #pasoFino');
    });
});