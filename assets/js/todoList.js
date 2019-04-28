//checking specific todos by clicking
$("ul").on("click","li",function(){

    $(this).toggleClass("complete");
});

//Click on X to delete ToDO
 $("ul").on("click","span",function(event){

    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
 });

 $("input[type='text']").keypress(function(event){
    
    //if enter key is pressed
    if(event.which === 13)
    {
        //grabbing a new todo text from input
        var todoText=$(this).val(); 
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> "+todoText+"</li>");   
        
    }
 });

 $("ul").on("hover","span",function(){

    $(this).toggleClass("hover");
 });

$(".fa-plus").click(function(){

    $("input[type='text']").toggle(300);
    
});






