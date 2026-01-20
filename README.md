# AI to Penpot Plugin

> Transform AI-generated designs into Penpot shapes using natural language and intelligent design automation.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Penpot](https://img.shields.io/badge/Penpot-Plugin-purple.svg)](https://penpot.app/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Plugin Structure](#plugin-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

**AI to Penpot** is a plugin that bridges the gap between AI-powered design generation and Penpot's powerful design platform. It enables designers to leverage AI capabilities to create, modify, and enhance design elements directly within Penpot using natural language commands and intelligent automation.

### Why This Plugin?

- **AI-Powered Design**: Generate design elements using AI descriptions
- **Streamlined Workflow**: Skip manual creation of repetitive elements
- **Natural Language**: Describe what you want, let AI create it
- **Open Source**: Built for the Penpot community

## ✨ Features

### Core Capabilities

- 🤖 **AI Design Generation**: Create shapes and elements using natural language descriptions
- 🎨 **Smart Shape Creation**: Automatically generate complex vector shapes
- 🔄 **Design Variations**: Generate multiple variations of design elements
- 📐 **Intelligent Layout**: AI-assisted positioning and alignment
- 🎭 **Style Transfer**: Apply design styles across different elements
- 🧩 **Component Generation**: Create reusable component libraries

### Integration Features

- ⚡ **Real-time Preview**: See AI-generated designs before applying
- 🔌 **Plugin API Access**: Full access to Penpot's plugin capabilities
- 💾 **Export Options**: Save and reuse AI-generated templates
- 🎯 **Context-Aware**: Understands your current design context

## 🚀 Installation

### Prerequisites

- [Penpot](https://penpot.app/) (latest version recommended)
- Modern web browser (Chrome, Firefox, or Brave)
- Internet connection for AI features

### Install from Development Server

1. **Clone the repository**:
   ```bash
   git clone https://github.com/s1xte3n/ai-to-penpot-js.git
   cd ai-to-penpot-js
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Load the plugin in Penpot**:
   - Open Penpot
   - Press `Ctrl + Alt + P` (or `Cmd + Alt + P` on Mac) to open Plugin Manager
   - Enter the manifest URL: `http://localhost:4400/manifest.json`
   - Click "Install"

### Install from Remote URL

If the plugin is hosted remotely, you can install it directly:

1. Open Penpot and press `Ctrl + Alt + P`
2. Enter the plugin's manifest URL
3. Click "Install"

## 📖 Usage

### Basic Workflow

1. **Open the Plugin**:
   - In Penpot, go to Plugins menu
   - Select "AI to Penpot"

2. **Generate Designs**:
   - Enter a natural language description of what you want to create
   - Click "Generate"
   - Preview the AI-generated design
   - Apply to your canvas

### Example Commands

```
"Create a modern login form with email and password fields"
"Generate a mobile app navigation bar with 5 icons"
"Design a hero section with a gradient background"
"Create a card component with image, title, and description"
```

### Advanced Features

#### Style Transfer
Apply styles from one element to another:
```javascript
// Select source and target elements
// Click "Transfer Style"
```

#### Batch Generation
Generate multiple variations:
```javascript
// Enter your prompt
// Set variation count: 3-5 recommended
// Click "Generate Variations"
```

## 💻 Development

### Project Structure

```
ai-to-penpot-js/
├── plugin/                 # Plugin source code
│   ├── src/
│   │   ├── plugin.ts      # Main plugin logic
│   │   ├── ui.ts          # User interface
│   │   ├── api.ts         # AI API integration
│   │   └── utils.ts       # Helper functions
│   ├── styles/
│   │   └── main.css       # Plugin styles
│   └── public/
│       └── assets/        # Images and icons
├── manifest.json          # Plugin manifest
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── README.md             # This file
```

### Building the Plugin

```bash
# Development build with hot reload
npm run dev

# Production build
npm run build

# Run linter
npm run lint

# Format code
npm run format
```

### Technology Stack

- **Runtime**: JavaScript/TypeScript
- **Bundler**: Vite
- **UI Framework**: Vanilla JS (or your choice)
- **Penpot API**: `@penpot/plugin-types`
- **Styling**: CSS3

### Development Commands

```bash
# Install dependencies
npm install

# Start dev server (watches for changes)
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Lint and fix
npm run lint:fix
```

## 🏗️ Plugin Structure

### Manifest Configuration

The `manifest.json` defines plugin metadata:

```json
{
  "name": "AI to Penpot",
  "description": "AI-powered design generation for Penpot",
  "code": "plugin.js",
  "icon": "icon.png",
  "permissions": [
    "content:read",
    "content:write",
    "library:read",
    "library:write",
    "user:read"
  ]
}
```

### Plugin API Integration

```typescript
// Example: Creating shapes with Penpot API
penpot.ui.open('AI to Penpot', '', {
  width: 400,
  height: 600
});

// Listen for AI-generated data
penpot.ui.onMessage((message) => {
  if (message.type === 'create-shape') {
    const shape = penpot.createRectangle();
    shape.x = message.data.x;
    shape.y = message.data.y;
    // ... configure shape properties
  }
});
```

## 🔧 API Reference

### Core Functions

#### `generateDesign(prompt: string): Promise<Design>`
Generates a design based on natural language prompt.

**Parameters**:
- `prompt` (string): Natural language description of desired design

**Returns**: Promise resolving to design data

**Example**:
```javascript
const design = await generateDesign('Create a modern card component');
```

#### `applyDesign(design: Design): void`
Applies generated design to Penpot canvas.

**Parameters**:
- `design` (Design): Design object from `generateDesign()`

#### `transferStyle(source: Shape, target: Shape): void`
Transfers style properties from one shape to another.

**Parameters**:
- `source` (Shape): Source shape with desired style
- `target` (Shape): Target shape to apply style to

### Events

```typescript
// Listen for plugin ready
penpot.on('ready', () => {
  console.log('Plugin initialized');
});

// Listen for selection changes
penpot.on('selectionchange', (selection) => {
  console.log('Selected:', selection);
});
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with clear messages**:
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Keep commits focused and atomic
- Write clear commit messages

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for formatting
- Add JSDoc comments for public APIs

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Penpot](https://penpot.app/) - Amazing open-source design platform
- [Anthropic Claude](https://anthropic.com/) - AI capabilities (if using Claude)
- The Penpot community for inspiration and support

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/s1xte3n/ai-to-penpot-js/issues)
- **Discussions**: [GitHub Discussions](https://github.com/s1xte3n/ai-to-penpot-js/discussions)
- **Email**: [your-email@example.com]

## 🗺️ Roadmap

- [ ] Advanced AI model integration
- [ ] Template library
- [ ] Collaborative features
- [ ] Custom AI training
- [ ] Design system generation
- [ ] Export to code (React, Vue, etc.)

## 📊 Status

This plugin is currently in **active development**. Features and API may change.

---

**Built with ❤️ for the Penpot community**

*Star ⭐ this repo if you find it useful!*
