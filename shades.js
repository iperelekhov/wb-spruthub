var moving = [];
var movingTimer = [];

var virtualShades = [
  {
    code: "rollshade_1",
    title: "Roll shade Bedroom Left",
    realDeviceName: "shade72:2",
    chanelId: "1",
    timeToOpen: 31700
  },
  {
    code: "rollshade_2",
    title: "Roll shade Bedroom Right",
    realDeviceName: "shade72:2",
    chanelId: "2",
    timeToOpen: 31700
  },
  {
    code: "rollshade_3",
    title: "Roll shade Kitchen Right",
    realDeviceName: "shade72:1",
    chanelId: "1",
    timeToOpen: 31700
  },
  {
    code: "rollshade_4",
    title: "Roll shade Kitchen Left",
    realDeviceName: "shade72:1",
    chanelId: "2",
    timeToOpen: 31200
  }
];

var shadeTestInterval = [];
var directionUp = [];

virtualShades.forEach(function(device, idx){


defineVirtualDevice(device.code, {
    title: device.title ,
    cells: {
      up: {
        title: "Up",
	    type: "pushbutton",
	    value: false
	    },
      down: {
        title: "Down",
	    type: "pushbutton",
	    value: false
	    },
      position: {
        title: "Current position",
	    type: "range",
	    value: 0,
        max: 100,
        min: 0,
        readonly: true
	    },
      previous_position: {
        title: "Previous position",
	    type: "string",
        value: '0'
      },
      target_position: {
        title: "Target Position",
        type: "range",
	    value: 0,
        max: 100,
        min: 0,
      },
      reset: {
        title: "reset",
	    type: "pushbutton",
	    value: false
	  },
    }
})

defineRule({
    whenChanged: device.code + "/up",
    then: function() {
        dev[device.code]["target_position"] = 100;
    }
});
  
defineRule({
    whenChanged: device.code + "/down",
    then: function() {
        dev[device.code]["target_position"] = 0;
    }
});
  
  
defineRule({
    whenChanged: device.code + "/reset",
    then: function() {
      moving[1] = true;
      dev[device.code]["position"] = 0;
      dev[device.code]["target_position"] = 0;
      dev[device.code]["previous_position"] = '0';
      if (movingTimer[idx]) {
      	clearTimeout(movingTimer[idx])
      }
      setTimeout(function () {
         moving[idx] = false;
       }, 1000);
    }
});


defineRule({
    whenChanged: device.code + "/target_position",
    then: function (newValue, devName, cellName) {
       movingTime = device.timeToOpen;
       if (shadeTestInterval[idx]) {
         clearTimeout(shadeTestInterval[idx]);
       }
       dev[device.realDeviceName]["ON" + device.chanelId] = false;
       setTimeout(function(){
         if (dev[device.code + "/position"] < newValue) {
           directionUp[idx] = true;
         } else {
           directionUp[idx] = false;
         }
         dev[device.realDeviceName]["DIR" + device.chanelId] = directionUp[idx];
         dev[device.realDeviceName]["ON" + device.chanelId] = true;
         shadeTestInterval[idx] = setInterval(function(){
           //log("Run interval function")
           if (directionUp[idx]) {
             dev[device.code]["position"] = dev[device.code]["position"] + 1;
           } else {
             dev[device.code]["position"] = dev[device.code]["position"] - 1;
           }
         }, device.timeToOpen/100);
       }, 200)
    }
});
defineRule({
    asSoonAs: function(){
      return shadeTestInterval[idx] && 
        ((directionUp[idx] && dev[device.code + "/position"] >= dev[device.code + "/target_position"]) ||
        (!directionUp[idx] && dev[device.code + "/position"] <= dev[device.code + "/target_position"]))
    },
    then: function (newValue, devName, cellName) {
         //log("Moving interval detected, stoping it asSoonAs")
         clearTimeout(shadeTestInterval[idx]);
         dev[device.realDeviceName]["ON" + device.chanelId] = false;
    }
});
})
