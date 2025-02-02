import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const useGenerativeAI = async (chatHistory, userMessage) => {
  const chat = model.startChat({
    history: chatHistory,
  });

  let result = await chat.sendMessage(userMessage);
  console.log(result.response.text());
};
