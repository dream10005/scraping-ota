// const puppeteer = require('puppeteer');

// let scrape = async () => {
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();

//     await page.goto('https://www.traveloka.com/th-th/hotel/search?spec=22-12-2017.23-12-2017.1.1.HOTEL_GEO.10000045.Bangkok.1');


//     const result = await page.evaluate(() => {
//         let data = []; // Create an empty array that will store our data
//         let elements = document.querySelectorAll('.tvat-hotelName'); // Select all Products

//         for (var element of elements){ // Loop through each proudct
//             let title = element.innerText; // Select the title
//             let price = element.innerText; // Select the price

//             data.push({title, price}); // Push an object with the data onto our array
//         }

//         return data; // Return our data array
//     });

//     browser.close();
//     return result; // Return the data
// };

// scrape().then((value) => {
//     console.log(value); // Success!
// });

console.log('wtf');