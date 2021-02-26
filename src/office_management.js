'use strict';

class MeetingRoom {

  constructor(room_name) {
    this.is_available = true;
    this.room_name = room_name;
  }

  isRoomAvailable(){
    return this.is_available === true;
  }
  
  enterMeeting(){
    if(this.is_available === false){
      return 'Room is not available';
    }
    return this.is_available = false;
  }

  leaveMeeting(){
    return this.is_available = true;
  }
  
  getRoomName(){
    return this.room_name;
  }

  


}




