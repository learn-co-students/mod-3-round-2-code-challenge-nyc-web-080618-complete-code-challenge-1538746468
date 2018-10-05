const theatreId = 2;
document.addEventListener("DOMContentLoaded", e=> {

  const showDiv =document.getElementById('showDiv')
  fetch('https://evening-plateau-54365.herokuapp.com/theatres/2')
    .then(res=> res.json())
    .then(resJson => {

      const ftheatre =  new Theatre(resJson)
      // debugger
      showDiv.innerHTML += ftheatre.render()
    })

  document.addEventListener('click', e=>{

    if( e.target.className === "ui blue button"){

      e.preventDefault()
      const showId = parseInt(e.target.id)

    let showInstance =   Theatre.findById(showId)
   debugger

 if (showingInstance.capacity- showingInstance.tickets_sold > 0) {
      showingInstance.tickets_sold++;

    


      fetch('https://evening-plateau-54365.herokuapp.com/tickets',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body:JSON.stringify({
           showing_id:showId
        })
      }).then(res=> res.json())
        .then(resJson=> {
        console.log(resJson)
        })
    }}
  })
})
