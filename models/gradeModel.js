import mongoose from "mongoose"

const gradeModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        lastModified: {
            type: Date,
            required: true
        }
    });

const grades = mongoose.model("grades", gradeModel);

export default { grades }