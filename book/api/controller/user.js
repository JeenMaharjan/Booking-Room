import Users from "../models/Users.js"
import { createError } from "../utils/error.js";

export const createUsers = async(req, res, next) => {
    const newUsers = new Users(req.body)

    try {
        const savedUsers = await newUsers.save()
        res.status(200).json(savedUsers)
    } catch (err) {
        next(err)
    }
}

export const updateUsers = async(req, res, next) => {
    try {
        const updateUsers = await Users.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updateUsers)
    } catch (err) {
        next(err)
    }
}

export const deleteUsers = async(req, res, next) => {
    try {
        await Users.findByIdAndDelete(req.params.id)
        res.status(200).json('id has been deleted')
    } catch (err) {
        next(err)
    }
}

export const getUsers = async(req, res, next) => {
    try {
        const users = await Users.findById(req.params.id)
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

export const getAllUsers = async(req, res, next) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}