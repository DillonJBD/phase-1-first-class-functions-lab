const returnFirstTwoDrivers = function(names){
    return names.slice(0,2);
}

const returnLastTwoDrivers = function(names){
    return names.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num1){
    const createFare = function(num2){
        return num1 * num2;
    }
    return createFare;
}
//comment
const fareDoubler =  createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driverNames, selectingFunction){
    return selectingFunction(driverNames);
}
