fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.blog);
        for (let i = 0; i < data.blog.length; i++){
            console.table(data.blog[i]);
            
        }
        // data.forEach(datum => {
        //     console.table(datum);
        // });
    });