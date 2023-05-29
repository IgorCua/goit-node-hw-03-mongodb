// const contactsService = require("../models/index");
const { HttpError } = require("../helpers/index.js");
const { ctrlWrapper } = require("../utils/");
const Contacts = require('../models/contacts.js')

const getListContacts = async (req, res, next) => {
  const contacts = await Contacts.find();
  res.json(contacts);
};

const getContactById = async (req, res, next) => {
  const contact = await Contacts.findById(req.params.contactId);
  if (!contact) throw HttpError(404);

  res.status(200).json(contact);
};

const postContact = async (req, res, next) => {
  const contact = await Contacts.create(req.body);

  res.status(201).json(contact);
};

const deleteContactByid = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contacts.findByIdAndDelete(contactId);
  
  if (!contact) throw HttpError(404, `contact with id ${contactId} not found`);
  
  res.json({
    message: "Contact deleted",
  });
};

const putContactById = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await Contacts.findByIdAndUpdate(contactId, req.body, {new: true})
  if (!contact) {
    throw HttpError(404);
  }

  res.json(contact);
};

module.exports = {
  getListContacts: ctrlWrapper(getListContacts),
  getContactById: ctrlWrapper(getContactById),
  postContact: ctrlWrapper(postContact),
  deleteContactByid: ctrlWrapper(deleteContactByid),
  putContactById: ctrlWrapper(putContactById),
};
