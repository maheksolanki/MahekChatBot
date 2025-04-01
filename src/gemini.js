 
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCJ7xrNGjb3pBsygLG--ddCQ1Qmgkiibyc";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: [],
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);

    // Ensure response is valid before accessing text
    const responseText = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (responseText) {
      console.log(responseText);
      return responseText;
    } else {
      console.log("No valid response received.");
      return null;
    }
  } catch (error) {
    console.error("Error in execution:", error);
    return null;
  }
}

export default run;