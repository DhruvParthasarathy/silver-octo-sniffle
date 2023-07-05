

const express = require("express");
const bodyParser = require("body-parser");
const pdf = require('html-pdf');
const cors = require("cors");
const fs = require("fs");
const {hb} = require('./Handlebar.ts')
// const jsPDF = require('jspdf/dist/jspdf.node.js').jsPDF;


const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// POST - PDF generation and fetching of the data
app.post("/create-pdf", (req, res) => {


  fs.readFile("./templates/test2.html", "utf8", (err, template) => {
    if (err) {
      console.error(err);
      return;
    }
    // Compile the Handlebars template
    const compiledTemplate = hb.compile(template);

    let data = req.body;
    data.today = new Date();

    console.log(data);

    // const renderedTemplate = compiledTemplate(data);

    pdf.create(compiledTemplate(data), {}).toFile('result.pdf', (err) => {
      if (err) {
          res.send(Promise.reject());
      }

      res.send(Promise.resolve());
  });

  });
});

// GET - Send the generated PDF to the client
app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
