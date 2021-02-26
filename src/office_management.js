'use strict';

class MeetingRoom {

  constructor() {
    this.is_available = true;
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

}

class Office {

  constructor(){
    this.meetingRooms = [];
  }

  getRoomNames(){
    return this.meetingRooms;
  }

  addMeetingRoom(meetingRoom){
    this.meetingRooms.push(meetingRoom);
  }
}




