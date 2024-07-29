fetch('./data/works.json')
    .then((response) => response.json())
    .then((json) => console.log(json));