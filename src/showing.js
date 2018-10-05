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
