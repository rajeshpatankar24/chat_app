import User from "../model/user.model.js";
import Message from "../model/message.model.js";
import cloudinary from "../lib/cloudinary.js";
 export const getUserForSidebar = (req,res)=>{
    try {
        const loggedInUserId = req.user._id;
        const filterUsers = User.find({_id:{$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filterUsers)

    } catch (error) {
        console.log("Error in getUserForSidebar",error.message)
        res.status(500).json({error:"Interval server error"});
    }

 }

 export const getMessages =async (req,res)=> {
    try {
        
        const {id = userToChatId}= req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or:[
               { senderId:myId,recieverId:userToChatId},
               { senderId:userToChatId,recieverId:myId},
            
        ]
        })
        res.status(200).json(messages)



    } catch (error) {
        console.log("Error in getMessage controller",error.message);
        res.status(500).json({error:"Interval server error"});

    }
 }

 export const  sendMessage = async (req,res)=>{

    try {
        const {text,message} = req.body;
        const {id : recieverId } = req.params;
        const senderId = req.user_id;

        let ImageUrl ;
        if(image){
            // upload image to cloudinary 
            const uploadResponse = await cloudinary.uploader.upload(image);
            ImageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            text,
            image:ImageUrl
        })
        await newMessage.save();

        //  todo: socket.io functionality here

        res.status(200).json(newMessage);

    } catch (error) {
         console.log("Error in sendMessage controller",error.message);
        res.status(500).json({error:"Interval server error"});

    }

 }