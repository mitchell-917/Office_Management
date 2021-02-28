'use strict';

class MeetingRoom {

  constructor(name) {
    this.is_available = true;
    this.name = name;
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
    this.availableRooms = [];
  }

  addMeetingRoom(meetingRoom){
    this.meetingRooms.push(meetingRoom);
  }
    
  listMeetingRooms(){
    return this.meetingRooms
  }
    
  listAvailableRooms(){
    for (let i = 0; i < this.meetingRooms.length; i++){
      if(this.meetingRooms[i].is_available === true){
       this.availableRooms.push(this.meetingRooms[i]);
      }
    }
    return this.availableRooms
  }
}




