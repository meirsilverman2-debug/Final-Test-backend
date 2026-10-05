import {z} from "zod";


// zod alert fields type validation:
const alertSchema = z.object({
    displayName: z.string(),
    description: z.string(),
    priority: z.string(),
    arena: z.string(),
    status: z.string(),
    lon: z.number(),
    lat: z.number()
})

export default alertSchema;