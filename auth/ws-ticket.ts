import { z } from "zod";

// Short-lived token for opening the chat WebSocket. The session cookie lives on
// the web app's domain (the API is reached through a proxy there), so the
// browser cannot send it to the API's own domain during the WS handshake.
export const WsTicketResponseSchema = z.object({
    ticket: z.string()
})

export type WsTicketResponse = z.infer<typeof WsTicketResponseSchema>;
