'use strict'

const dateToJD = function(date){
  return +date/86400000+2440587.5
}
const calc = function(date){
  const d = dateToJD(date) - 2451545
  const g =( 357.529 + 0.98560028* d ) %360;
  const q = (280.459 + 0.98564736* d)%360 ;
  const L = q + 1.915* Math.sin(g * Math.PI/180) + 0.020* Math.sin(2*g * Math.PI/180);

  const R = 1.00014 - 0.01671* Math.cos(g * Math.PI/180) - 0.00014* Math.cos(2*g * Math.PI/180);
  const e = 23.439 - 0.00000036* d ;
  const RA = Math.atan2(Math.cos(e * Math.PI/180)* Math.sin(L * Math.PI/180), Math.cos(L * Math.PI/180))/( Math.PI/180)/ 15;

  const D = Math.asin(Math.sin(e* Math.PI/180)* Math.sin(L* Math.PI/180))/( Math.PI/180);  // declination of the Sun
  const EqT = q/15 - RA;  // equation of time
  return {
    d:d,g:g,q:q,L:L,R:R,e:e,RA:RA,D:D,EqT:EqT
  }
}
// place has lat lng
const dhuhr = function(date,place,onlyCalc=false){
  if(onlyCalc===false)date.setHours(12,0,0)
  const res = calc(date)
  return 12 - place.lng/15 - date.getTimezoneOffset()/60 + res.EqT
}

const angleTime = function(angle,L,D){
  console.log((-Math.sin(angle* Math.PI/180)-Math.sin(L* Math.PI/180)*Math.sin(D* Math.PI/180))/(Math.cos(L* Math.PI/180)*Math.cos(D* Math.PI/180)))
  return Math.acos((-Math.sin(angle* Math.PI/180)-Math.sin(L* Math.PI/180)*Math.sin(D* Math.PI/180))/(Math.cos(L* Math.PI/180)*Math.cos(D* Math.PI/180)))/15/( Math.PI/180)
}
const sunrise = function(date,place){
  date.setHours(6,0,0)
  const dhuhrTime = dhuhr(date,place,true)
  return
}
console.log(dateToJD(new Date()))
const a = calc(new Date())
console.log(0.833,a.L,a.D)
console.log(angleTime(0.833,a.L,a.D)+12)