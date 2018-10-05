const Theatre= (()=> {
  const allTheatres=[]
  return class{
    constructor(tJson){
      this.id = tJson.id;
      this.name =tJson.name;
      this.showings = tJson.showings
      allTheatres.push(this)
    }
    render(){

      return this.showings.map(show=>

         `<div class="card">
        <div class="content">
         <div class="header">

         ${show.film.title}

       </div>
       <div class="meta">
         ${show.film.runtime} minutes
       </div>
       <div class="description">
         <span class="ui label">
           ${show.showtime}
         </span>
         ${show.capacity - show.tickets_sold} remaining tickets
       </div>
     </div>
     <div class="extra content">
       <div class="ui blue button" id=${show.id} >Buy Ticket</div>
     </div>
   </div>`).join('')

      }
      static findById(showId){

        return allTheatres[0].showings.find(show => show.id == showId)
      }


  }
})()
