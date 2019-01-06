function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const json = JSON.parse(xhr.response);
        resolve(json);
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.onerror = error => reject(new Error(error));
    xhr.send();
  });
}

const superman = getData('/mock/sample02.json');
const batman = getData('/mock/sample01.json');

/*
batman.then((data) => {
  data.forEach(element => console.log(`Batman Row ${element.id}`));
});
superman.then((data) => {
  data.forEach(element => console.log(`Superman Row ${element.id}`));
});

Promise.race([batman, superman])
  .then((data) => {
    data.forEach(element => console.log(`ANY Row ${element.id}`));
  });
*/

Promise.all([batman, superman]).then((data) => {
  console.log(data);
  data[0].forEach(element => console.log(`Batman Row ${element.id}`));
  data[1].forEach(element => console.log(`Superman Row ${element.id}`));
});
