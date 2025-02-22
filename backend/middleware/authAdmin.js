import jwt from 'jsonwebtoken';

const authAdmin=async(req,res,next)=>{
    try {
        const {adminToken}=req.headers;
        if(!adminToken){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }

        const token_decode=jwt.verify(adminToken,process.env.JWT_SECRET);
        if(token_decode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:error.message
        })
        
    }

}



export default authAdmin;