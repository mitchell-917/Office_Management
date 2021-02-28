'use strict';

  describe('Office and MeetingRoom class', function(){
    
    let var1, var2, test1, test2;

      beforeEach(function(){
       var1 = new Office();
       var2 = new MeetingRoom('Northampton');
       test1 = new MeetingRoom('test1');
       test2 = new MeetingRoom('test2');
      });

      it('Checks the object is an instance of Office', function(){
        expect(var1).toBeInstanceOf(Office);
      });

      it('Checks the object is an instance of MeetingRoom', function(){
        expect(var2).toBeInstanceOf(MeetingRoom);
      });
  
    describe('Checks if a meeting room is available', function(){
      it('Returns a boolean indicating whether a meeting room is available', function(){
        expect(var2.isRoomAvailable()).toBe(true);
        });
      });

    describe('Entering a meeting room should make it unavailable', function(){
      it('Updates a meeting room', function(){
        var2.enterMeeting();
        expect(var2.isRoomAvailable()).toBe(false);
      });
    });

    describe('Leaving a meeting room should make it available',function(){
      it('Updates a meeting room', function(){
        var2.leaveMeeting();
        expect(var2.isRoomAvailable()).toBe(true);
      });
    });

    describe('Avoid interrupting a meeting room in use',function(){
      it('Infoms a user the room is not available', function(){
        var2.enterMeeting();
        expect(var2.enterMeeting()).toEqual("Room is not available");
      });
    });

    describe('In order to distinguish between meeting rooms',function(){
      it('A meeting room must have a name', function(){
        expect(var2.name).toEqual('Northampton');
      });
    });

    describe('So that staff can coordinate meetings', function(){
      it('add a meeting room to the office', function(){
        var1.addMeetingRoom('North');
        expect(var1.listMeetingRooms()).toEqual(['North']);
      });
    });

    describe('A user can manage meeting rooms', function(){
      it('List all the meeting rooms in the office', function(){
        var1.addMeetingRoom('test1');
        var1.addMeetingRoom('test2');
        expect(var1.listMeetingRooms()).toEqual(['test1','test2']);
      });
    });

    describe('A user can see where to have their meeting room', function(){
      it('should list all available rooms', function(){
        test1.enterMeeting();
        var1.addMeetingRoom(test1);
        var1.addMeetingRoom(test2);
        expect(var1.listAvailableRooms()).toEqual([test2]);
      });
    });
});  
