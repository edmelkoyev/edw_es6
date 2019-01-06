function getData(url, done) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const json = JSON.parse(xhr.response);
      done(json);
    } else {
      console.error(xhr.statusText);
    }
  };
  xhr.onerror = error => console.error(error);
  xhr.send();
}

getData('/mock/sample01.json', (data) => {
  data.forEach(element => console.log(`Row ${element.id}`));
});
