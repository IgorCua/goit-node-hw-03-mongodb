const express = require('express');
const { 
  getListContacts,
  getContactById,
  postContact,
  deleteContactByid,
  putContactById
} = require('../../controllers/contacts-controller.js');
const { isValidId } = require('../../middlewares')
const validateBody = require('../../utils/validateBody.js');
const { contactsSchema } = require('../../schemas')

const router = express.Router()

router.get('/', getListContacts)

router.get('/:contactId', isValidId, getContactById)

router.post('/', validateBody(contactsSchema), postContact)

router.delete('/:contactId', isValidId, deleteContactByid)

router.put('/:contactId', isValidId, validateBody(contactsSchema), putContactById)

module.exports = router