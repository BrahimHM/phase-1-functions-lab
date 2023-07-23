// Code your solution in this file!
function distanceFromHqInBlocks( value){
    return Math.abs(value-42);
}
function distanceFromHqInFeet(value){
   return distanceFromHqInBlocks(value)*264;
}
function distanceTravelledInFeet(start,destination){
    return Math.abs(destination-start)*264;

}
function calculatesFarePrice(start, destination){
     let distance =distanceTravelledInFeet(start,destination);
     switch(true){
       case(distance <= 400):
        return 0;
       case (distance>400 && distance<=2000):
        return(distance-400)*0.02;
       case (distance> 2000 && distance<=2500):
        return 25;
       case (distance>2500):
        return 'cannot travel that far';
     }
}