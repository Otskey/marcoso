# Marcoso Website

This project is built using Node.js, Firebase, Tailwind CSS, and several other tools. Below are instructions for setting up the development environment, running the Firebase emulator, and deploying the project.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (LTS version recommended)
- **Firebase CLI** (version 13.14.2)
- **Git** (for version control)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Otskey/marcoso.git
cd marcoso
```

Ensure you're using the correct Node.js version by using nvm:

```bash
nvm install 18.20.4
nvm use 18.20.4
```

After cloning the repository & changing to the correct version of node, install the required dependencies:

```bash
npm install
```

You need the Firebase CLI globally to run emulators and deploy the app:

```bash
npm install -g firebase-tools
```

## Development

You can start the development environment, which uses a lightweight dev server, by running:

```bash
npm run start
```

To run the Firebase emulator for hosting, which closely mimics the production environment, use:

```bash
firebase emulators:start --only hosting
```

## Build

Before deploying, you need to build the project. This will compile all assets into the dist directory:

```bash
npm run build
```

Deploying:

The project is automatically deployed via GitHub Actions when you push to the master branch. However, if you want to preview changes before deploying to production, use the following command:

```bash
firebase hosting:channel:deploy preview
```
HAPPY CODING! 
