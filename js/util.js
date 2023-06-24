// function load(url){
//   console.log("loading function start");
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(this.responseText);
//       }
//     };
//     xhr.open("GET", url);
//     xhr.send();
//   });
// }

async function load(url){
  console.log("loading function start");
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export{
  load
}