const express=require('express');
const cookieParser=require('cookie-parser')
const app = express();
const cors=require('cors')
app.use(cors({origin: 'http://localhost:4009', credentials:true}))
app.use(express.json())
app.use(cookieParser())
app.get('/',(req,res)=>{
   res.status(202).cookie('TokenLogin1' , "data.token" ,{
    expires: 0.10/24,
secure: true,
sameSite:'strict',
path:'/',
httpOnly: true
  }).send("cookie")
})
app.listen(4009)