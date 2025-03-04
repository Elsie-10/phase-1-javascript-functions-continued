// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun(activity='bathe my dog')
function mondayWork (place='go to the office.'){
    return `This Monday, I will ${place}`;
}
mondayWork();
mondayWork(place='work from home')

function wrapAdjective(wrapper) {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }