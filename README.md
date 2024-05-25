# GitHub Finder

GitHub Finder is a web application built with React, Next.js, Tailwind CSS, and Zustand for state management. It allows users to search for GitHub repositories and bookmark their favorites.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for GitHub repositories.
- Bookmark favorite repositories.
- Responsive design using Tailwind CSS.
- State management with Zustand.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (which includes `npm`).

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Abdullahghoneim/repo-finder-task

   ```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variable:

```sh
NEXT_PUBLIC_GITHUB_BASE_URL=https://api.github.com

```
