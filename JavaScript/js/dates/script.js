// date and time
const now = new Date();

console.log(now);
console.log(typeof now); 

// year, month, date, time
console.log('year', now.getFullYear());
console.log('month', now.getMonth());
console.log('day', now.getDay());
console.log('hour', now.getHours());
console.log('minutes', now.getMinutes());
console.log('seconds', now.getSeconds());
console.log('milliseconds', now.getMilliseconds());

console.log('timestamp', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toUTCString());
console.log(now.toLocaleString());
console.log(now.toLocaleTimeString());


// timestamps

const before = new Date('February 15 2022 7:40:59');
console.log('before : ', before);
console.log('now : ', now);

const difference = now.getTime() - before.getTime();
console.log('now - before = ', difference);

const minutes = Math.round(difference / 1000 / 60);
const hours =  Math.round(minutes / 60);
const days =  Math.round(hours / 24);

console.log(`minutes = ${minutes} \nhours = ${hours} \ndays = ${days}`);

console.log(`this blog posted on ${days} days ago`);

//converting timestamp to actual date and time
const timestamp = 1646465663940;
console.log(new Date(timestamp));