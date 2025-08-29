
const bcrypt=require('bcryptjs');
const StaffModel = require('../models/StaffModel');
const UserModel = require('../models/UserModel');

const createStaff=async(req,res)=>{
    try{
        const staffData=req.body;
        const staff=await StaffModel.findOne({email:staffData.email})
        if(staff){
            return res.status(403).json({success:false,message:'user already exsist '})
        }
        const profileIamge=req.file ? req.file.path : null;
        const hashPassword=await bcrypt.hash(String(staffData.password),10)

        // New user
        const newUser=new UserModel({
            name:staffData.name,
            email:staffData.email,
            password:hashPassword,
            profileIamge,
            
        })

        const savedUser=await newUser.save()
       

        // New staff
        const newStaff=new StaffModel({
            name:staffData.name,
            email:staffData.email,
            password:hashPassword,
            role:staffData.role,
            address:staffData.address,
            phone:staffData.phone,
            createdBy:req.user._id,
            profileImage:profileIamge
        })

        const savedStaff=await newStaff.save()
        res.status(201).json({success:true,message:'Staff created successfully',data:savedStaff})


    }catch(error){
        res.status(500).json({success:false,message:'Staff creation failed',error:error.message})
    }
}

const gettAllStaff=async(req,res)=>{
    try{
        let {page,limit,search}=req.query;
        page=parseInt(page) || 1;
        limit=parseInt(limit) || 10;
        const skip=(page-1)*limit;
        let searchCriteria={}
        if(search){
            searchCriteria={
                $or:[
                    {name:{$regex:search,$options:'i'}},
                    {phone:{$regex:search,$options:'i'}},

                ]
            }
        }
        const totalStaffs=await StaffModel.countDocuments(searchCriteria);
        const staffs=await StaffModel.find(searchCriteria)
        .skip(skip)
        .limit(limit)
        .sort({createdAt:-1})
        .populate('createdBy','name email profileImage')
        const totalPages=Math.ceil(totalStaffs/limit)
        res.status(200).json({
            success:true,
            message:'Staffs fetched successfully',
            data:{
                totalStaffs,
                staffs,
                totalPages,
                currentPage:page
            }
        })
    }catch(error){
        res.status(500).json({success:false,message:'Fetching staffs failed',error:error.message})
    }
}

const getStaffById=async(req,res)=>{
    try{
        const {id}=req.params;
        const staff=await StaffModel.findById(id).populate('createdBy','name email profileImage')
        res.status(200).json({success:true,message:'Staff fetched successfully',data:staff})
    }catch(error){
        res.status(500).json({success:false,message:'Fetching staff failed',error:error.message})
    }
}

const updateStaff=async(req,res)=>{
    try{
        const {id}=req.params;
        const staffData=req.body;
        const profileIamge=req.file ? req.file.path : null;
        const updateData={
            name:staffData.name,
            email:staffData.email,
            role:staffData.role,
            address:staffData.address,
            phone:staffData.phone,
        }
        if(profileIamge){
            updateData.profileIamge=profileIamge
        }
        const updatedStaff=await StaffModel.findByIdAndUpdate(
            id,
            {$set:updateData},
            {new:true}
        )
        res.status(200).json({success:true,message:'Staff updated successfully',data:updatedStaff})
    }catch(error){
        res.status(500).json({success:false,message:'Updating staff failed',error:error.message})
    }
}

module.exports={createStaff,gettAllStaff,getStaffById,updateStaff}