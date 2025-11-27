import { getModel, systemPrompt } from "~~/server/utils/model";

export default defineEventHandler(async (event) => {
  const { message, chat_history = [] } = await readBody<{
    message: string;
    chat_history?: { role: 'user' | 'assistant'; content: string }[];
  }>(event);

  const recentHistory = chat_history.slice(-4);

  const messages = [
    { role: "system", content: systemPrompt },
    ...recentHistory,
    { role: "user", content: message }
  ];

  const model = await getModel();
  const response = await model.invoke(messages);

  return { content: response.content };
});