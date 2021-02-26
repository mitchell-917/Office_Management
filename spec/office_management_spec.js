'use strict';

  describe('MeetingRoom', function(){
    
    let room;

      beforeEach(function(){
       room = new MeetingRoom('Stamford Bridge');
        
      });

      it('Checks the object is an instance of MeetingRoom', function(){
        expect(room).toBeInstanceOf(MeetingRoom);
      });
  
    describe('Checks if a meeting room is available', function(){
      it('Returns a boolean indicating whether a meeting room is available', function(){
        expect(room.isRoomAvailable()).toBe(true);
        });
      });

    describe('Entering a meeting room should make it unavailable', function(){
      it('Updates a meeting room', function(){
        room.enterMeeting();
        expect(room.isRoomAvailable()).toBe(false);
      });
    });

    describe('Leaving a meeting room should make it available',function(){
      it('Updates a meeting room', function(){
        room.leaveMeeting();
        expect(room.isRoomAvailable()).toBe(true);
      });
    });

    describe('Avoid interrupting a meeting room in use',function(){
      it('Infoms a user the room is not available', function(){
        room.enterMeeting();
        expect(room.enterMeeting()).toEqual("Room is not available");
      });
    });

    describe('In order to distinguish between meeting rooms',function(){
      it('A meeting room must have a number', function(){
        expect(room.getRoomName()).toEqual('Stamford Bridge')
      });
    });
});  
