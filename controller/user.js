import users from "../model/userdata.js";
const getuser=(req,res)=>{
  res.status(200).json({
    message:"Employees data fetched successfully",
    users
  });
};
const getuserbyid=(req,res)=>{
  let id=Number(req.params.id);
  let user=users.find((e)=>e.id===id);
  if (!user){
    return res.status(404).json({
      message:"employee not found",
      success:false,
    });
  }
  res.status(200).json({
    message:"employee data fetched successfully",
    user
  });
};

const createuser=(req,res)=>{
  let {name,id}=req.body;
  if (!name || !id){
    return res.status(400).json({
      message:"data required",
      success:false,
    });
  }
  users.push({ name,id:Number(id)});
  
  res.status(201).json({
    message:"Employee added successfully",
    users
  });
};
const updateuser=(req,res)=>{
  let {name}=req.body;
  let id=Number(req.params.id);
  let user=users.find((e)=>e.id===id);
  if (name){
    user.name=name;
  }
  res.status(200).json({
    message:"Employee updated successfully",
    user
  });
};
const deleteuser=(req,res)=>{
  let id=Number(req.params.id);
  let index=users.findIndex((e)=>e.id===id);
  users.splice(index, 1);
  res.status(200).json({
    message: "Employee deleted successfully",
    users,
    success: true,
  });
};
export {getuser,getuserbyid,updateuser,createuser,deleteuser};


