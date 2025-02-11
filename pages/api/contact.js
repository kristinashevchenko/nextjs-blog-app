import { saveContact } from "../../lib/contacts-db";

function handler(req, res) {
  if (req.method == "POST") {
    const { email, name, message } = req.body;

    if (
      !name ||
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = { name, email, message };

    try {
      saveContact(newMessage);
    } catch {
      res.status(422).json({ message: "Could not store the message" });
      return;
    }

    console.log(newMessage);

    res.status(200).json({ message: "Successfully stored message" });
  }
}

export default handler;
