document.addEventListener("DOMContentLoaded", function(event) {
const theatreId = 5;

  const content = document.getElementById("content")
  const cardList = document.querySelector(".ui-cards-showings")


  fetch("https://evening-plateau-54365.herokuapp.com/theatres/5")
    .then((response) => {
      return response.json()
    })
    .then((showingJsonObj) => {
      showingJsonObj.showings.forEach((showing)=> {
  	     // let showingList = new Showing(showing)
         cardList.innerHTML += `<div class="card">
                                   <div class="content">
                                     <div class="header">
                                       ${showing.film.title}
                                     </div>
                                     <div class="meta">
                                       ${showing.film.runtime}
                                     </div>
                                     <div class="description">
                                       <span class="ui label">
                                         ${showing.showtime}
                                       </span>
                                       ${showing.tickets_sold} remaining tickets
                                     </div>
                                   </div>
                                   <div class="extra content">
                                     <div id="buyButton" data-id=${showing.id} class="ui blue button">Buy Ticket</div>
                                   </div>
                                 </div>`
      })
    }) //first fetch GET


    document.addEventListener("click", function(event) {

      if(event.target.id === "buyButton") {
        let buttonId = event.target.dataset.id
        console.log(buttonId)

        let found = Showing.all.find((show) => {
          return show.id == buttonId
        })

        ticketSold =- found.tickets_sold
        console.log(ticketSold)

        fetch(`https://evening-plateau-54365.herokuapp.com/tickets/`, {
          method: POST,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: ({
            showing_id: found
          })
        })

      } //end of if statement

    })












}); //end of DOM content loader
