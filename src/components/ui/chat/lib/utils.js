import { GoogleGenerativeAI } from "@google/generative-ai";

import { chatbotTrainingData } from "../data/chatbot-training-data";
import { getApiKey } from "./action";

let modelPromise = null;

async function getModel() {
  if (!modelPromise) {
    const apiKey = await getApiKey();
    const genAI = new GoogleGenerativeAI(apiKey);
    modelPromise = Promise.resolve(
      genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: chatbotTrainingData,
      })
    );
  }

  return modelPromise;
}

// const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
//   systemInstruction: chatbotTrainingData,
// });

export const generativeAI = async (chatHistory, userInput) => {
  const model = await getModel();

  const chat = model.startChat({
    history: chatHistory,
  });

  // let result = await chat.sendMessage(userInput);

  // return result.response.text();

  let result = await chat.sendMessageStream(userInput);

  return result;
};

// export const printWordsOneByOne = async (words, callback) => {
//   let index = 0;

//   const interval = await setInterval(async () => {
//     if (index < words.length) {
//       await callback(words[index]);
//       index++;
//     } else {
//       clearInterval(interval);
//     }
//   }, 20);
// };

export const printWordsOneByOne = (words, callback) => {
  return new Promise((resolve) => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < words.length) {
        callback(words[index]);
        index++;
      } else {
        clearInterval(intervalId);
        resolve();
      }
    }, 10); // Adjust the delay here
  });
};
