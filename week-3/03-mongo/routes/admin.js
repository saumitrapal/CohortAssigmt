const { Admin } = require("../db");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: "admin created succesfully"
    })

    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const imagelink = req.body.imagelink
    const price = req.body.price

   const newCourse = await Course.create({
        title,
        description,
        imagelink,
        price
    })
    res.json({
        msg:"course created successfully",
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
   const response = await Course.find({});

   res.json({
    courses: response
   })


});

module.exports = router;