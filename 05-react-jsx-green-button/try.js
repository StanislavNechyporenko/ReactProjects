async function fetchData(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

const url = 'https://api.ipify.org?format=jsonp&callback=?';


fetchData(url).then((data) => {
  console.log(data);
});