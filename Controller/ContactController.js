// get all contacts
// @route get/api/contacts
// @access public

const getContacts = (req, res) => {
  res.status(200).json({ content: "getting all contacts" });
};
const createContact = (req, res) => {
  console.log("====================================");
  console.log(req.body);
  console.log("====================================");

  const { name, email, number } = req.body;
  if (!name || !email || !number) {
    res.status(400)
    throw new Error ("All fields are mandatory ")
  }
  res.status(200).json({ content: "create contact" });
};
const getContact = (req, res) => {
  res.status(200).json({ content: ` get contact for ${req.params.id}` });
};
const updateContact = (req, res) => {
  res.status(200).json({ content: ` updated contact for ${req.params.id}` });
};
const deleteContact = (req, res) => {
  res.status(200).json({ content: ` deleted contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
};
