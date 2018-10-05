document.addEventListener('DOMContentLoaded', (event) => {
  const showingDisplay = document.getElementById('ui cards showings')


  fetch('https://evening-plateau-54365.herokuapp.com/theatres/8')
    .then(resp => resp.json())
    .then(function(movieTheater) {
      let showingsArray = movieTheater.showings
      showingsArray.forEach(function(showing) {
        showing = new Showing(showing)
        showingDisplay.innerHTML += showing.renderShowingsDisplay()
      })
    })
  document.addEventListener('click', (event) => {
    if (event.target.id == 'buyATicket') {
      let selectedShowing = Showing.findParticularShowingByShowingId(event.target.dataset.showingid)
      const displayNumberOfCurrentTickets = document.getElementById(`${selectedShowing.id}`)
      //
      const outerDisplayForTickets = document.getElementById(`${selectedShowing.id} ticketdisplay`)
      let adjustedNumberOfAppropriateTickets = displayNumberOfCurrentTickets.dataset.numberofremainingtickets

      if(adjustedNumberOfAppropriateTickets == "No" || adjustedNumberOfAppropriateTickets == undefined){
        adjustedNumberOfAppropriateTickets = 0
        // was looking at the example in the last few minutes and realized that they remove the button when the tickets are gone
        // spent last few minutes trying to locate the button so that it can be removed when tickets are gone
        // const findButton = document.getAttribute(`dataset.outerDisplayForTickets`)
        // debugger
      } else {
        adjustedNumberOfAppropriateTickets = parseInt(displayNumberOfCurrentTickets.dataset.numberofremainingtickets) - 1
      }
        fetch('https://evening-plateau-54365.herokuapp.com/tickets', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            showing_id: selectedShowing.id
          })
        })
      outerDisplayForTickets.innerHTML = Showing.updateShowingsObject(selectedShowing, adjustedNumberOfAppropriateTickets)

    }
  })



})
