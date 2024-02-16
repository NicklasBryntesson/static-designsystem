import { getHighlighter } from "shiki";

console.log("examples/js/Shiki - loaded");

async function highlightCode() {
  try {
    const highlighter = await getHighlighter({
      theme: "tokyo-night", // Ensure this theme is correctly supported
    });
    console.log("Highlighter loaded with theme:", highlighter.getTheme()); // Debugging
    document.querySelectorAll("pre code").forEach((block) => {
      const code = block.textContent;
      const language = block.className.replace("language-", "");
      console.log(`Processing language: ${language}`); // Debugging
      if (highlighter.getLoadedLanguages().includes(language)) {
        const html = highlighter.codeToHtml(code, { lang: language });
        block.innerHTML = html;
        console.log(`Highlighted: ${language}`, html); // Debugging
      } else {
        console.warn(`Language not loaded: ${language}`);
      }
    });
  } catch (error) {
    console.error("Error highlighting code with Shiki:", error);
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  highlightCode();
});
