'use strict';

  describe('MeetingRoom', function(){
    
    let room_001;

      beforeEach(function(){
       room_001 = new MeetingRoom('Stamford Bridge');
        
      });

      it('Checks the object is an instance of MeetingRoom', function(){
        expect(room_001).toBeInstanceOf(MeetingRoom);
      });
  
    describe('Checks if a meeting room is available', function(){
      it('Returns a boolean indicating whether a meeting room is available', function(){
        expect(room_001.isRoomAvailable()).toBe(true);
        });
      });

    describe('Entering a meeting room should make it unavailable', function(){
      it('Updates a meeting room', function(){
        room_001.enterMeeting();
        expect(room_001.isRoomAvailable()).toBe(false);
      });
    });

    describe('Leaving a meeting room should make it available',function(){
      it('Updates a meeting room', function(){
        room_001.leaveMeeting();
        expect(room_001.isRoomAvailable()).toBe(true);
      });
    });

    describe('Avoid interrupting a meeting room in use',function(){
      it('Infoms a user the room is not available', function(){
        room_001.enterMeeting();
        expect(room_001.enterMeeting()).toEqual("Room is not available");
      });
    });

    describe('In order to distinguish between meeting rooms',function(){
      it('A meeting room must have a number', function(){
        expect(room_001.getRoomName()).toEqual('Stamford Bridge')
      });
    });
});  
