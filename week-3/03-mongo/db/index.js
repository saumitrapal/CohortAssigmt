const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://saumitrapal:CsCcrDBBh8djBe1m@cluster0.jc8r99i.mongodb.net/user-data?retryWrites=true&w=majority&appName=Cluster0');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : string
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : string,
    purchasedCourses :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : string,
    description: string,
    imageLink: string,
    price: Number

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}