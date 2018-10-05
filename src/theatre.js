class Showing {

constructor(showingObj) {
  this.id = showingObj.id,
  this.film = showingObj.film,
  this.title = showingObj.title, //
  this.runtime = showingObj.runtime, //
  this.tickets_sold = showingObj.tickets_sold //
  Showing.all.push(this)
} //end of constructor



}// end of class
Showing.all = []
