# 🧠 BrandToneCraft: Web-Based Brand-to-Copy LLM Tester

**BrandToneCraft** is a web-based tool that allows you to upload a client’s brand assets, analyze them using an LLM, generate a custom tone of voice, and produce high-quality marketing copy from that tone. You can test and compare multiple LLMs to determine the best prompt and output quality.

## 🚀 Features

- ✍️ **Brand Input & Analysis**: Upload or input brand materials.
- 🎤 **Tone of Voice Generator**: Use LLMs to extract a structured tone of voice.
- 🧱 **Prompt Builder**: Auto-generate a copywriting prompt based on the tone.
- 🧾 **Copy Output**: Produce copywriting results using your prompt.
- 🔁 **LLM Comparison**: Test outputs from OpenAI, Anthropic, Mistral, and more.
- 🔐 **API Key UI Storage**: Enter and store LLM keys via UI (stored locally).

## 🧩 Architecture

**Frontend**: React + Tailwind  
**State Management**: Zustand  
**Storage**: LocalStorage for session-scoped API keys  
**LLM Integration**: Modular adapter-based design  
**Hosting**: Vercel / Netlify

## 📂 Project Structure

```
src/
├── components/
│   ├── BrandUploader.tsx
│   ├── ToneGenerator.tsx
│   ├── PromptBuilder.tsx
│   ├── CopyOutput.tsx
│   └── LLMSelector.tsx
├── lib/
│   ├── llmAdapters/
│   │   ├── openai.ts
│   │   ├── anthropic.ts
│   │   └── mistral.ts
│   └── promptTemplates.ts
├── pages/
│   ├── index.tsx
│   └── compare.tsx
└── utils/
└── storage.ts
```

## 🛠️ Usage

1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/BrandToneCraft.git
   cd BrandToneCraft
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run locally**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## 🔑 API Keys

* Use the **API Key Manager** section in the app to enter your keys for OpenAI,
  Anthropic, or Mistral.
* Keys are stored **locally** in your browser for the current session only.
* Ensure you have access to the respective provider APIs.

## 🧪 Testing

* Unit Tests: `npm run test`
* UI Flow: `npx playwright test`

## 📋 Roadmap

* [ ] Save test history locally
* [ ] Export tone + prompt + outputs
* [ ] Collaborative link sharing
* [ ] Integrated feedback loop for fine-tuning

## 📄 License

MIT License. See `LICENSE.md`.

---

Built with love for brand strategists and AI tinkerers ❤️
