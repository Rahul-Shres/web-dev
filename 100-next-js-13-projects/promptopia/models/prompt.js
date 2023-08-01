import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({ 
    create: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompr is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required'],
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);
export default PromptSchema;