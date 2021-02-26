'use strict';

class MeetingRoom {

  constructor(){
    this.is_available = true;
  }

  is_room_available(){
    return this.is_available === true;
  }
  
  enter_meeting(){
    if(this.is_available === false){
      return 'Room is not available';
    }
    return this.is_available = false;
  }

  leave_meeting(){
    return this.is_available = true;
  }
  
}




