'use strict';

  describe('MeetingRoom', function(){
    
    let officeOne, meetingRoom;

      beforeEach(function(){
       officeOne = new Office();
       meetingRoom = new MeetingRoom();
      });

      it('Checks the object is an instance of Office', function(){
        expect(officeOne).toBeInstanceOf(Office);
      });

      it('Checks the object is an instance of MeetingRoom', function(){
        expect(meetingRoom).toBeInstanceOf(MeetingRoom);
      });
  
    describe('Checks if a meeting room is available', function(){
      it('Returns a boolean indicating whether a meeting room is available', function(){
        expect(meetingRoom.isRoomAvailable()).toBe(true);
        });
      });

    describe('Entering a meeting room should make it unavailable', function(){
      it('Updates a meeting room', function(){
        meetingRoom.enterMeeting();
        expect(meetingRoom.isRoomAvailable()).toBe(false);
      });
    });

    describe('Leaving a meeting room should make it available',function(){
      it('Updates a meeting room', function(){
        meetingRoom.leaveMeeting();
        expect(meetingRoom.isRoomAvailable()).toBe(true);
      });
    });

    describe('Avoid interrupting a meeting room in use',function(){
      it('Infoms a user the room is not available', function(){
        meetingRoom.enterMeeting();
        expect(meetingRoom.enterMeeting()).toEqual("Room is not available");
      });
    });

    describe('In order to distinguish between meeting rooms',function(){
      it('A meeting room must have a name', function(){
        officeOne.addMeetingRoom('Test');
        expect(officeOne.getRoomNames()).toEqual(['Test']);
      });
    });

    describe('So that staff can coordinate meetings', function(){
      it('add a meeting room to the office', function(){
        officeOne.addMeetingRoom('Test');
        expect(officeOne.getRoomNames()).toEqual(['Test']);
      });
    });
});  
