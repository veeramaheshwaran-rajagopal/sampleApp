const { model, Schema } = require('mongoose');
const constants = require('../../utils/constants');
const bookSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        isPrivate: { type: Boolean, required: true, default: true },
        postedOn: { type: Date, required: true },
        isActive: { type: Boolean, required: true, default: true },
        userId: {
            type: Schema.Types.ObjectId,
            ref: constants.USER,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);
module.exports = model(constants.POST, bookSchema);
