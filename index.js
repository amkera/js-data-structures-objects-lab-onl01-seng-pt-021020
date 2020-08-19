// Write your solution in this file!
let driver = {}; 

function updateDriverWithKeyAndValue(driverObject, key, value) {
  return 
}

function nondestructivelyUpdateObject(obj, key, value) {
  const newObj = { ...obj };
 
  newObj[key] = value;
 
  return newObj;
}