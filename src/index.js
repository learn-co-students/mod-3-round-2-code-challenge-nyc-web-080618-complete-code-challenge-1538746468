document.addEventListener("DOMContentLoaded", () => {

  const theatreId = 10;
  const movieUrl = `https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`
  const tickets = `https://evening-plateau-54365.herokuapp.com/tickets`
  const container = document.getElementById('divcontainer')

  fetch(movieUrl)
    .then(response => response.json())
    .then(movieObj => movieObj.showings.forEach(movie => {
      let newMovie = new Movie(movie)
      container.innerHTML += newMovie.render()

    })) //end of forEach

  container.addEventListener('click', event => {
    let showingId = event.target.dataset.id
    fetch(tickets, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          showing_id: showingId
        })
      }) //end of fetch
      .then(() => {
        container.innerHTML = ''
        fetch(movieUrl)
          .then(response => response.json())
          .then(movieObj => movieObj.showings.forEach(movie => {
            let newMovie = new Movie(movie)
            container.innerHTML += newMovie.render()

          }))
      })





  }) //end of eventListener









}) //end of document