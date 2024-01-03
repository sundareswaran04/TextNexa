import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

window.Clear = async function() {
  document.getElementById("output").innerHTML = "";
  document.getElementById("out")
}

window.generateContent = async function() {
  const API_KEY = 'AIzaSyDMFkSWZgh3l_FP0o6nCt4HfkJI6hgPqi8'; // Replace with your actual API key
  const genAI = new GoogleGenerativeAI(API_KEY);

  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = document.getElementById("request").value;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    document.getElementById("input").value = "";

    const userInput = document.createElement("h4");
    userInput.textContent = prompt;
    const outputElement = document.getElementById("result");
    outputElement.innerHTML += `<h4 style='white-space: pre;'>${text}</h4>`;
    document.getElementById("output").style.display="block";
  }

  run();
}
