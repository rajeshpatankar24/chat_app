import User from "../model/user.model.js";
import Message from "../model/message.model.js";
import cloudinary from "../lib/cloudinary.js";
 export const getUserForSidebar = async (req, res) => {
    try {
        console.log("Inside getUserForSidebar controller");
        // console.log(req.user._id);

        const loggedInUserId = req.user._id;

        // WAIT for the database result
        const filterUsers = await User.find({ _id: { $ne: loggedInUserId } })
                                      .select("-password");

        res.status(200).json(filterUsers);
        console.log("getUserForSidebar executed successfully");
        // console.log(filterUsers);

    } catch (error) {
        console.log("Error in getUserForSidebar", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


 export const getMessages =async (req,res)=> {
    try {
        console.log(req.params)
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