let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    
    addMeeting: function(num){
        this.meetings = this.meetings + num
    },
    summary: function(){
        return `U have ${this.meetings} meetings today!`
    }
}
myTodos.addMeeting(4);
console.log(myTodos.summary());