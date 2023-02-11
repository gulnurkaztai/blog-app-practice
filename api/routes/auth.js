const router = require("express").Router();
const bcrypt = require('bcrypt')

const User  = require("../models/User")

//Register
router.post("/register", async(req,res)=>{

    const {username, email, password} = req.body;
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new User({
            username, 
            email, 
            password: hashedPassword
        })

        const user = await newUser.save();
        res.status(201).json(user)
    } catch (err){
        res.status(500).json(err)
    }

})

//Login

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(400).json("Wrong credentials!");
  
      const validated = await bcrypt.compare(req.body.password, user.password);
      !validated && res.status(400).json("Wrong credentials!");
  
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;