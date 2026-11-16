import { reservationSchema } from "@/lib/schemas";
import { handleSubmission } from "@/lib/handle-submission";

export const POST = (req: Request) => handleSubmission(req, "reservation", reservationSchema);
