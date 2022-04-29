const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api-messages', (req, res) => {
  res.json({
    messages: [
      {
        author: {
          id: 1,
          icon: "https://batelle.com/wp-content/uploads/2021/07/cropped-batelle-fav-1-270x270.png",
          name: "Ricky"
        },
        id: 1,
        message: 'Weee this is a message',
        created: Date.now()
      },
      {
        author: {
          id: 2,
          icon: "https://batelle.com/wp-content/uploads/2021/07/cropped-batelle-fav-1-270x270.png",
          name: "Wasea"
        },
        id: 2,
        message: 'Weee this is another message',
        created: Date.now()
      },
      {
        author: {
          id: 3,
          icon: "https://batelle.com/wp-content/uploads/2021/07/cropped-batelle-fav-1-270x270.png",
          name: "Joe"
        },
        id: 3,
        message: 'Another message',
        created: Date.now()
      },
    ]
  });
});

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log(`listening at port ${port}`)
});