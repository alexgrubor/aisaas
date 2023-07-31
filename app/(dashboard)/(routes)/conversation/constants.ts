import * as zod from 'zod'

export const ConversationSchema = zod.object({
    prompt: zod.string().min(1, {
        message: 'Prompt must be at least 1 character long'
    })
})