import userModel from "../schema/userSchema.js"

export default async function suggestcardDB(count = 4) {
    const userData = await userModel.aggregate([
        { $sample: { size: count } },
        { $project: { password: 0 } },
        {$project:{email:0}} // exclude password field
    ]).limit(4)
    return userData
}
