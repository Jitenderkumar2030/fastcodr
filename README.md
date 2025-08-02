

## 🌐 English | 中文

# ⚡ Fastcodr

### 🚀 What is Fastcodr?

Fastcodr is an **AI-powered web development platform** designed to accelerate your full-stack application workflow. Built with a modular architecture and developer-centric design, it offers intuitive tools for prototyping, designing, debugging, and deploying modern web applications — all in one place.

---

### 🎥 Intro Video

> *(Coming soon — Demo walkthrough of Fastcodr)*

---

### 💡 What Makes Fastcodr Different?

While tools like Cursor, v0, and Bolt.new are fast and capable, **Fastcodr** introduces powerful innovations:

✅ **Local + Web Container Debugging:** Whether you're on desktop or in-browser, Fastcodr supports full terminal-based debugging using WebContainer and Node.js environments.

✅ **High-Fidelity D2C (Design to Code):** Automatically turn your Figma or design files into high-quality React/Next.js code with up to **90% fidelity**.

✅ **Import & Continue Projects:** Unlike browser-only tools, Fastcodr lets you import and edit full-scale existing projects, enabling **ongoing development and refactoring**.

✅ **Cross-platform Native Support:** Native support for **Windows, macOS**, and browser-based editing environments.

✅ **AI Integration:** Easily hook into LLMs like OpenAI, DeepSeek, or locally hosted models for smart code generation, refactoring, and assistant support.

✅ **MCP & Module Support:** Out-of-the-box plugin architecture to support reusable code modules (MCP) and integrations.

---

### 🔍 Feature Comparison

| Feature                           | Fastcodr ✅ | Cursor | v0 | Bolt.new |
| --------------------------------- | ---------- | ------ | -- | -------- |
| Code generation and preview       | ✅          | ✅      | ✅  | ✅        |
| Design-to-code conversion         | ✅          | ✅      | ✅  | ✅        |
| Open-source                       | ✅          | ❌      | ❌  | ✅        |
| Existing project support          | ✅          | ❌      | ❌  | ❌        |
| Native desktop app support        | ✅          | ❌      | ✅  | ❌        |
| DeepSeek AI integration           | ✅          | ❌      | ❌  | ❌        |
| MCP modular plugin support        | ✅          | ❌      | ❌  | ❌        |
| Generate design UI (internal use) | ✅          | ❌      | ❌  | ❌        |

---

## ⚙️ Get Started

This project uses **pnpm** as the package manager. Ensure **Node.js version 18.20** is installed.

### ✅ Install pnpm

```bash
npm install -g pnpm
```

---

### 📁 Install Dependencies

#### 🖥️ Client (Frontend)

```bash
cd apps/fastcodr-client
pnpm install
```

#### 🧠 Server (Backend)

```bash
cd apps/fastcodr/fastcodr-next
pnpm install
```

---

### 🔐 Configure Environment Variables

#### `apps/fastcodr-client/.env`

```env
# [MUST] Backend API base URL (e.g., http://localhost:3000)
APP_BASE_URL=

# [Optional] JWT secret key for auth
JWT_SECRET=
```

#### `apps/fastcodr/fastcodr-next/.env`

```env
# [MUST] URL to your LLM / model endpoint
THIRD_API_URL=

# [MUST] API key for your model
THIRD_API_KEY=

# [Optional] Auth secret
JWT_SECRET=
```

---

### 🛠️ Build Fastcodr Web Editor

```bash
chmod +x scripts/fastcodr-build.sh
./scripts/fastcodr-build.sh
```

---

### ⚡ Quick Start from Root Directory

Add the following scripts to your `package.json`:

```json
"scripts": {
  "dev:next": "cd apps/fastcodr-next && pnpm install && pnpm dev",
  "dev:client": "cd apps/fastcodr-client && pnpm dev"
}
```

Run:

```bash
pnpm run dev:next
pnpm run dev:client
```

---

## 🧑‍💻 How to Use Fastcodr

1. Visit [https://fastcodr.ai/](https://fastcodr.ai/) *(coming soon)*.
2. Choose the platform: **Mac / Windows / Web**.
3. Install the app or launch the browser version.
4. Open the Fastcodr workspace and start building!

---

## 🛠️ Troubleshooting

* **Electron Errors:** If you face issues on the second run, clear the workspace folder and restart.
* **No preview in Electron:** Use:

```bash
pnpm run electron:dev
```

---

## 📬 Contact Us

📧 Email: [support@fastcodr.ai](mailto:support@fastcodr.ai)

📱 Join the Fastcodr WeChat Group or Discord *(links coming soon)*

---

## ⭐ Star History

> *(Track our GitHub star growth over time)*

---

## 📜 License

This project is open-source under the MIT License. See `LICENSE` file for more details.

---

Would you like me to convert this into a polished `README.md` file for your GitHub project?

