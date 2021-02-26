'use strict';

class MeetingRoom {

  constructor(room_name) {
    this.is_available = true;
    this.room_name = room_name;
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
  
  get_room_name(){
    return this.room_name;
  }
}




