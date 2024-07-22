const { Router } = require("express");
const { User, Course } = required("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

   User.Create({
        username,
        password
    })
    res.json({
        msg:"user create successfully"
    })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic\
    const response = await Course.find({})

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.params.username;
    
     await User.updateOne({
        username:username
    }, {
            "$push": {
                purchasedCourses: courseId
            }
        })
        res.json({
            msg: "purchase complete!"
        });
    })
   

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
            _Id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
       courses: courses
    })
    
});

module.exports = router