import {z} from "zod";


// zod user fields validation:
const userSchema = z.object({
    userName: z.string(),
    password: z.string().min(8),
    email: z.string().email("Please enter a valid email"),
    role: z.string(),
    assignedArea: z.string()
});

export default userSchema;

