import { ChatAlibabaTongyi } from "@langchain/community/chat_models/alibaba_tongyi";
import { ChatDeepSeek } from "@langchain/deepseek";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const llmGoogle = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  maxOutputTokens: 2048,
});

export const llmQwen = new ChatAlibabaTongyi({
  model: "qwen-plus", // Available models: qwen-turbo, qwen-plus, qwen-max
  temperature: 1,
});

export const llmDeepseek = new ChatDeepSeek({
  model: "deepseek-reasoner", // deepseek-reasoner
  temperature: 0,
});

// const messages = [
//   new SystemMessage("You are a helpful assistant."),
//   new HumanMessage("Hello"),
// ];

// // const aiMsg = await llmQwen.invoke(messages);
// // console.log(aiMsg);

// const aiMsg = await llmDeepseek.invoke(messages);
// console.log(aiMsg);
