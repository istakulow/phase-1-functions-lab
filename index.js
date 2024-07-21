// helpers.js

// Calculates distance in blocks from headquarters
function distanceFromHqInBlocks(location) {
    const headquarters = 42;
    return Math.abs(location - headquarters);
  }
  
  // Calculates distance in feet from headquarters
  function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
  }
  
  // Calculates distance travelled in feet between two locations
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination) * 264;
    return distance;
  }
  
  // Calculates fare price based on distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  