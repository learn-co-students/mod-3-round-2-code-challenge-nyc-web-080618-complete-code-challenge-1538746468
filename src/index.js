const theatreId = 3;
const showingsDiv = document.querySelector("#showings");

fetch(`https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`)
.then(r => r.json())
.then(data => {
  showingsDiv.innerHTML = data.showings.map(showing => {
    let newShowing = new Showing(showing);
    return newShowing.render();
  })
})

document.addEventListener("click", (event) => {
  if(event.target.dataset.type === "buy-ticket"){
    let showingId = event.target.dataset.id;
    let showingInstance = allShowings.find(showing => showing.id == showingId);

    if (showingInstance.tickets_remaining > 0) {
      showingInstance.tickets_sold++;
      showingInstance.tickets_remaining--;
      showingsDiv.innerHTML = allShowings.map(showing => showing.render());
      
      fetch("https://evening-plateau-54365.herokuapp.com/tickets", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          showing_id: showingId
        })
      })
      .then(r => r.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
    }
  }
})
