class Showing {
  constructor(showingObj){
    this.id = showingObj.id;
    this.film = showingObj.film;
    this.capacity = showingObj.capacity;
    this.showtime = showingObj.showtime;
    this.tickets_sold = showingObj.tickets_sold;
    this.tickets_remaining = this.capacity - this.tickets_sold;
    allShowings.push(this);
  }

  render(){
    return `
      <div class="card">
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
            ${this.tickets_remaining} remaining tickets
          </div>
        </div>
        <div class="extra content">
          <div class="ui blue button" data-type="buy-ticket" data-id=${this.id}>Buy Ticket</div>
        </div>
      </div>
    `
  }
}

allShowings = [];
