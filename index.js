// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
    const returnArray = [arrayOfDrivers[0], arrayOfDrivers[1]];
    return returnArray; 
}

const returnLastTwoDrivers = function (arrayOfDrivers) {
    const arrayLength = arrayOfDrivers.length
    const returnInfo = [arrayOfDrivers[arrayLength - 2], arrayOfDrivers[arrayLength - 1]];
    return returnInfo; 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(enteredNumber) {
    const multiplierFunction = function(fare) {
        return fare * enteredNumber;
    }
    return multiplierFunction;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


selectDifferentDrivers = function(drivers, functionToInvoke) {
    return functionToInvoke(drivers);
}
