const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sendEmail } = require("./mailer");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/contact", async (req, res) => {
  const { message, email, name } = req.body;

  // try {
  const response = await sendEmail(
    "fattoperwowgmail.com",
    "Messaggio per te da " + name,
    message
  );
  res.status(200).send({ success: true, response });
  // } catch (error) {
  //   res
  //     .status(500)
  //     .send({ success: false, message: "Errore durante l'invio dell'email" });
  // }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
