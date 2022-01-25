function Tickets(age, time, movie) {
  this.age = age;
  this.time = time;
  this.movie = movie;
}

Tickets.prototype.cost = function() {
  let ticketTotal = 5; //Default ticket price
  if ( this.age <= 17 || this.age >= 50) { //reduce price for children and seniors
    ticketTotal -= 2;
  }
  else if (this.time === "matinee") { //Reduced cost for matinee
    ticketTotal -= 2;
  }
  return ticketTotal;
}

Tickets.prototype.custAge = function() {
  const notEighteen = "You are not 18! Get Lost!";
  if (this.movie === "terminator" && this.age <= "17") {
    $("#ticket").hide();
    return notEighteen;
  } else if (this.movie === "matrix" && this.age <= "17") {
    $("#ticket").hide();
    return notEighteen;
  }
}

Tickets.prototype.findMovie = function() {
  return this.movie + " " + this.time + " " + price
}



//UI 
 $(document).ready(function(){
  $("form#user-entry").submit(function(event){
    event.preventDefault();
    const age = $("#age").val();
    const time = $("#times").val();
    const movie = $("#movie").val();

    let newTicket = new Tickets(age, time, movie);
    const underEighteen = newTicket.custAge(); //Block underage viewers
    console.log(underEighteen);
    $("#notEighteen").text(underEighteen);
   
    const ticketPrice = newTicket.cost();
    $("#ticket").html("Your Ticket Price: $" + ticketPrice);
    
    

  });
 });

