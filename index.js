const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.agoda.com/pages/agoda/default/DestinationSearchResult.aspx?city=9395&checkIn=2017-12-28&los=1&rooms=1&adults=1&children=0&cid=-1&pagetypeid=1&origin=TH&tag=&gclid=&aid=130243&userId=9cd2ea20-775b-4692-94d6-f647642c664d&languageId=1&storefrontId=3&currencyCode=THB&htmlLanguage=en-us&trafficType=User&cultureInfoName=en-US&checkOut=2017-12-29&childages=&priceCur=THB&hotelReviewScore=5&tabId=1&issearchfromhomepage=true&ckuid=9cd2ea20-775b-4692-94d6-f647642c664d');    

    const result = await page.evaluate(() => {
        let data = []; // Create an empty array that will store our data
        let elements = document.querySelectorAll('.price.dark-gray1'); // Select all Products
        let names = document.querySelectorAll('h3.hotel-name span');
        // for (var element of elements){ // Loop through each proudct
        //     let title = element.innerText; // Select the title
        //     let price = element.innerText; // Select the price

        //     data.push({title, price}); // Push an object with the data onto our array
        // }


        // let a = elements[0].innerText;
        // let b = names[0].innerText;

        // data.push({a,b});
        for (var i = 0; i <= 1; i++) {
            let name = names[i].innerText;
            let price = elements[i].innerText;

            data.push({name,price});
        }
        return data; // Return our data array
    });

    browser.close();
    return result; // Return the data
};

scrape().then((value) => {
    console.log(value); // Success!
});