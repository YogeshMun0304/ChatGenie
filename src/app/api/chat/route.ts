import { google } from "@ai-sdk/google";
import { StreamingTextResponse, streamText } from "ai";
import { generateText } from 'ai';
export async function POST(req: Request) {
  const { messages } = await req.json();
  
  // const geminiStream = await genAI
  // .getGenerativeModel({ model: 'gemini-pro' })
  // .generateContentStream(buildGoogleGenAIPrompt(messages));

  

const result = await streamText({
  model: google('models/gemini-pro'),
  messages
});
// for await (const textPart of result.textStream) {
//   console.log(textPart);
// }

return new StreamingTextResponse(result.toAIStream());

//   return text.toAIStreamResponse()
}