$(document).ready(function() {
    
    //creates a new burger in the database when "submit" button is clicked
    $("#submit").on("click", function(event) {

    event.preventDefault();
    const newBurger = {
        burger_name: $("#burger-name").val().trim(),
        devoured: 0
    };
    console.log(newBurger);
    
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(){
            console.log("New Burger Created!");
            location.reload();
        }
    )
    });

    //when "eat it" button is clicked, updates "devoured" column for clicked burger in database
    $(".devour").on("click", function(event) {
        
        event.preventDefault()
  
        const id = $(this).prev().prev()[0].innerHTML;
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function(){
                location.reload();
            }
        )
        });

  });