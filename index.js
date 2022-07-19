// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function (fare) {
        return fare*x;
    }
}

function fareDoubler(fare){
    const y = createFareMultiplier(2)(fare);
    return y;
}

function fareTripler(fare) {
    const y = createFareMultiplier(3)(fare);
    return y;
}

function selectDifferentDrivers(drivers, driverFunction) {
    if (driverFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else if (driverFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}