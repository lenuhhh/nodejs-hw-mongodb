import { contactsCollection } from "../db/contacts/contacts.js";
import mongoose from "mongoose";

export const getAllContacts = async () => await contactsCollection.find()

export const getContactById = async (contactId) => {
    if (!mongoose.Types.ObjectId.isValid(contactId)) return null
    
    return await contactsCollection.findById(contactId);
};
