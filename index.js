// Write your solution in this file!
let driver = {}; 

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriverObject = {...driver}; 
  newDriverObject[key] = value;
  return newDriverObject;
}
