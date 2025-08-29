const ServiceModel = require("../models/ServiceModel");

const createService = async (req, res) => {
    try {
        const serviceData = req.body;
        console.log('service data', serviceData)
        const profileImage = req.file ? req.file.path : null;
        const newService = new ServiceModel({
            ...serviceData,
            profileImage,
            createdBy: req.user.id
        })
        await newService.save();
        res.status(201).json({ success: true, message: 'Service created successfully', data: newService })
    } catch (error) {
        console.log('services creation error', error)
        res.status(500).json({ success: false, message: 'Service creation failed', error: error.message })
    }
}

const getAllServices = async (req, res) => {

    try {
        let { page, limit, search } = req.query;
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 10;
        const skip = (page - 1) * limit;

        let searchCriteria = {}
        if (search) {
            searchCriteria = {
                $or: [
                    { name: { $regex: search, $options: 'i' } },
                    { category: { $regex: search, $options: 'i' } },
                ]
            }
        }

        const totalServices = await ServiceModel.countDocuments(searchCriteria);
        const services = await ServiceModel.find(searchCriteria)
            .populate('createdBy', 'name email profileImage')
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })
        const totalPages = Math.ceil(totalServices / limit)
        res.status(200).json({
            success: true,
            message: 'Services fetched successfully',
            data: {
                totalServices,
                totalPages,
                currentPage: page,
                services
            }
        })
    } catch (error) {
        console.log('fetch services error', error)
        res.status(500).json({ success: false, message: 'Fetching services failed', error: error.message })
    }
}
const getServiceById = async (req, res) => {
    try {
        const serviceId = req.params.serviceId;
        const service = await ServiceModel.findById(serviceId).populate('createdBy', 'name email profileImage');
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' })
        }
        res.status(200).json({ success: true, message: 'Service fetched successfully', data: service })
    } catch (error) {
        console.log('fetch service by id error', error)
        res.status(500).json({ success: false, message: 'Fetching service failed', error: error.message })
    }
}
const updateService = async (req, res) => {
    try {
        const serviceId = req.params.serviceId; // ✅ match route
        const serviceData = req.body;
        const profileImage = req.file ? req.file.path : null;

        const updatedService = await ServiceModel.findByIdAndUpdate(
            serviceId,
            {
                ...serviceData,
                ...(profileImage && { profileImage }) // ✅ only update if new file uploaded
            },
            { new: true }
        );

        if (!updatedService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Service updated successfully',
            data: updatedService
        });
    } catch (error) {
        console.log('update service error', error);
        res.status(500).json({ success: false, message: 'Updating service failed', error: error.message });
    }
};
const deleteService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const deletedService = await ServiceModel.findByIdAndDelete(serviceId);
        if (!deletedService) {
            return res.status(404).json({ success: false, message: 'Service not found' })
        }
        res.status(200).json({ success: true, message: 'Service deleted successfully', data: deletedService })
    } catch (error) {
        console.log('delete service error', error)
        res.status(500).json({ success: false, message: 'Deleting service failed', error: error.message })
    }
}
module.exports = { createService, getAllServices, getServiceById, updateService, deleteService }