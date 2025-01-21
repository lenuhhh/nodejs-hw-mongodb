import { controllerWrapper } from "../decorators/controllerWrapper.js"
import { getAllContacts, getContactById } from "../services/contactsServices.js"
import createHttpError from "http-errors"



const getAllController = async (req, res) => {
        const contacts = await getAllContacts()

        if (!contacts) {
            res.status(404).json({ status: 404, message: 'No contacts found'
            })
        }

        res.status(200).json({
            status: 200, message: 'Successfully found contacts', data: contacts
        })
}

export const getByIdController = async (req, res, next) => {
        const { contactId } = req.params
        const contact = await getContactById(contactId)

        if (!contact) {
            throw createHttpError(404, `Contact with id ${contactId} not found` )
        }

        res.status(200).json({ status: 200, message: `Successfully found contact with id ${contactId}`, data: contact
        })
}

export default {
    getAllController: controllerWrapper(getAllController),
    getByIdController: controllerWrapper(getByIdController)
}