import { contactSchema } from "@/lib/schemas";
import { handleSubmission } from "@/lib/handle-submission";

export const POST = (req: Request) => handleSubmission(req, "contact", contactSchema);
