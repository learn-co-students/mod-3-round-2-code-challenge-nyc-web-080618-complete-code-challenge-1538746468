class Showing {
  constructor(showingObject){
    this.id = showingObject.id
    this.film = showingObject.film
    this.capacity = showingObject.capacity
    this.showtime = showingObject.showtime
    this.tickets_sold = showingObject.tickets_sold
    Showing.all.push(this)
  }

  renderShowingsDisplay(){
    let availableTickets = this.capacity - this.tickets_sold
    if (availableTickets < 1){
      availableTickets = "No more"
    }
    return `<div class="card">
      <div class="content">
        <div class="header">
          ${this.film.title}
        </div>
        <div class="meta">
          ${this.film.runtime} minutes
        </div>
        <div class="description">
          <span class="ui label">
            ${this.showtime}
          </span>
          <div id='${this.id} ticketdisplay'>
          <div id='${this.id}' data-numberofRemainingTickets=${availableTickets}>${availableTickets} remaining tickets </div>
          </div>
        </div>
      </div>
      <div class="extra content">
        <div data-findThisButton="${this.id}button" data-showingid="${this.id}"class="ui blue button" id="buyATicket">Buy Ticket</div>
      </div>
    </div>`
  }

  static findParticularShowingByShowingId(id){
    return Showing.all.find(function(show){
      return show.id == id
    })
  }

  static updateShowingsObject(showingObject,numberofShowings){
    if (numberofShowings < 1){

    return `<div id='${showingObject.id}'>No more remaining tickets </div>`
    }
    return `<div id='${showingObject.id}' data-numberofRemainingTickets='${numberofShowings}'>${numberofShowings} remaining tickets </div>`
  }

}

Showing.all = []
