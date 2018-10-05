  allMovies = []

  class Movie {


    constructor(obj) {
      this.showing_id = obj.id
      this.title = obj.film.title
      this.runtime = obj.film.runtime
      this.showtime = obj.showtime
      this.capacity = obj.capacity
      this.tickets_sold = obj.tickets_sold
      this.remaining_tickets = this.capacity - this.tickets_sold
      allMovies.push(this)
    }

    render() {
      if (this.remaining_tickets === 0) {
        return (`<div class="card">
  <div class="content">
    <div class="header">
      ${this.title}
    </div>
    <div class="meta">
      ${this.runtime}
    </div>
    <div class="description">
      <span class="ui label">
        ${this.showtime}
      </span>
      ${this.remaining_tickets} remaining tickets
    </div>
  </div>
  <div class="extra content">
    <div>SOLD OUT</div>
  </div>
</div>`)
      } else {
        return (`<div class="card">
  <div class="content">
    <div class="header">
      ${this.title}
    </div>
    <div class="meta">
      ${this.runtime}
    </div>
    <div class="description">
      <span class="ui label">
        ${this.showtime}
      </span>
      ${this.remaining_tickets} remaining tickets
    </div>
  </div>
  <div class="extra content">
    <div data-id="${this.showing_id}" class="ui blue button">Buy Ticket</div>
  </div>
</div>`)
      }
    }

  } // end of class