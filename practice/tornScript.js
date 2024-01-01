function clickIt(classItem) {
  let n = prompt("Enter the number of times to click");
  let startDate = new Date();
  const click = setInterval(() => {
    let endDate = new Date();
    if (document.getElementsByClassName(classItem).length > 0) {
      document.getElementsByClassName(classItem)[0].click();
      n--;
      startDate = new Date();
    }
    var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    if (n <= 0 || seconds > 5) {
      console.log("clear interval called");
      clearInterval(click);
    }
  }, 100);
}


// fetch slots request

async function getSlots(numOfCalls,stake){
 let response, count=0; 
async function _fetchItem(stake){
  try {
    response = await fetch(`https://www.torn.com/page.php?rfcv=65925f507573d&sid=slotsData&step=play&stake=${stake}`, {
       "headers": {
         "accept": "*/*",
         "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,ml;q=0.7",
         "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
         "sec-ch-ua-mobile": "?0",
         "sec-ch-ua-platform": "\"macOS\"",
         "sec-fetch-dest": "empty",
         "sec-fetch-mode": "cors",
         "sec-fetch-site": "same-origin",
         "x-requested-with": "XMLHttpRequest"
       },
       "referrer": "https://www.torn.com/page.php?sid=slots",
       "referrerPolicy": "strict-origin-when-cross-origin",
       "body": null,
       "method": "GET",
       "mode": "cors",
       "credentials": "include"
     })
     return response
    
  } catch (error) {
    console.log("error")
  }
}
await _fetchItem(stake)
  if(numOfCalls>0){
    numOfCalls-=1
    count+=1
    console.log("called count",count)
  }else{
    console.log("call completed")
  }
} 

clickIt("next-act");
