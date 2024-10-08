# 🎃 Midwest Pumpkins 🎃

<img align="right" src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width="100"/>

[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2024-orange.svg)](https://hacktoberfest.digitalocean.com/)
[![GitHub last commit](https://img.shields.io/github/last-commit/OpenCodeChicago/Midwest-Pumpkins)](https://github.com/OpenCodeChicago/Midwest-Pumpkins/commits/main)
[![GitHub license](https://img.shields.io/github/license/OpenCodeChicago/Midwest-Pumpkins)](https://github.com/OpenCodeChicago/Midwest-Pumpkins/blob/main/LICENSE)
[![HTML](https://img.shields.io/badge/HTML-5.0-E34F26.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3.0-1572B6.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Latest-EAD319.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-6868F2)](https://vitejs.dev/)
[![Figma](https://img.shields.io/badge/Figma-2022.2-FF7262.svg)](https://www.figma.com/)
[![Git](https://img.shields.io/badge/Git-2.35.1-F05032.svg)](https://git-scm.com/)

Welcome to **Midwest Pumpkins**, a seasonal project perfect for October! This open-source project focuses on creating a vibrant, interactive, and fun website for showcasing everything related to pumpkins. Whether it's recipes, pumpkin farms, or Halloween decorations, this project brings the best of fall to the web.

This project is built with **Vite**, utilizing **HTML**, **CSS**, and **JavaScript**. We're proud to be participating in **Hacktoberfest 2024**, and we encourage the open-source community to contribute to our codebase and help us make this project great!

### Watch This Video to Learn How to Contribute

[![Welcome! HacktoberFest2024](/public/images/youtube.png)](https://www.youtube.com/watch?v=1BvBKGzrw4w)

---

## 🌾 Project Overview

The **Midwest Pumpkins** project is a fully responsive web application dedicated to celebrating the beauty and versatility of pumpkins during the fall season. This project is a collaborative effort by the **OpenCode Academy team**, along with contributions from other open-source enthusiasts who wanted to participate in **Hacktoberfest 2024**.

### Key Features:

- **Responsive Design**: Adapts seamlessly across devices for an optimal user experience.
- **Interactive Elements**: Includes modals for product purchases, user reviews, and a subscription pop-up to engage visitors.
- **Animated Features Section**: Hover effects reveal hidden descriptions, enhancing user interaction.
- **Scroll-to-Top Button**: A convenient feature allowing users to easily navigate back to the top of the page.
- **Theme Changer**: A built-in feature for users to switch between different visual themes.
- **Backend Integration**: Planned functionality for receiving and managing data from pop-ups and user submissions.

### Tech Stack:

- **Framework**: Vite
- **Languages**: HTML, CSS (with CSS Modules), JavaScript

### Design:

Explore our creative Figma design [here](https://www.figma.com/design/6keWgZp7kRbn3CLMt3rWqp/Midwest-Pumpkins?node-id=0-1&t=aWiNYQLtVJyRpLbG-1).

### Purpose:

Our goal is to create a fun, user-friendly pumpkin-themed website that fosters community interaction while celebrating Halloween and the fall season. We welcome contributors to suggest additional features and enhancements to enrich our project further!

---

## 🎃 Hacktoberfest Participation

We’re excited to participate in **Hacktoberfest 2024**, an annual event where developers worldwide contribute to open-source projects! You can contribute to **Midwest Pumpkins** and earn a Hacktoberfest badge by adding the `hacktoberfest2024` label to your pull requests.

If you’re interested in contributing, here’s how to get started:

### Hacktoberfest Guidelines:

1. **Sign Up** for Hacktoberfest at [hacktoberfest.com](https://hacktoberfest.com/).
2. Make sure your pull request is labeled with `hacktoberfest2024` to count towards Hacktoberfest contributions.
3. Contributions can range from code improvements to bug fixes, documentation, or even design changes!

---

## 👩‍💻 How to Contribute

We welcome contributions from both team members and the broader open-source community. Please follow the steps below to contribute to the **Midwest Pumpkins** project.

### Steps to Contribute:

1. **Fork the repository** to your own GitHub account by clicking the "Fork" button at the top-right of the repository page:

   _Note: For a detailed video walkthrough on how to fork and clone a repository, check out this [YouTube video](https://www.youtube.com/watch?v=UwgNvAiTrhc&t=12s):_

2. **Clone the forked repository** to your local machine:

   - Open a terminal and run the following command:

   ```bash
    git clone https://github.com/OpenCodeChicago/Midwest-Pumpkins.git
   ```

3. **Set up the project on your local machine**:
   - Navigate into the project directory
   ```bash
   cd Midwest-Pumpkins
   ```
   - Open the project in Visual Studio Code:
   ```bash
   code .
   ```
   - Install the necessary dependencies:
   ```bash
   npm install
   ```
   - Start the development server:
   ```bash
   npm run dev
   ```
4. **Create a new branch** for your feature or bugfix:

   ```bash
   git checkout -b feature/your-branch-name
   ```

   _Note: Please follow the branch naming convention: `feature/your-branch-name` or `bugfix/your-branch-name`._

5. **Work on your task** and commit your changes:

   ```bash
   git add .
   git commit -m "Your meaningful commit message"
   ```

6. **Push your branch** to your forked repository:

   ```bash
   git push -u origin feature/your-branch-name
   ```

7. **Create a pull request** to merge your changes into the main project:

   - Go to the original repository and click "Compare & pull request."
   - Assign the pull request to **Alexandrbig1** for review.
   - Use labels like `hacktoberfest2024` to ensure it's counted for Hacktoberfest!

8. **Wait for review**. Your PR will be reviewed by the team lead, and once approved, it will be merged.

### 📑 Additional Guidelines

For detailed contribution guidelines, please refer to our [CONTRIBUTING.md](./CONTRIBUTING.md).

To maintain a positive and inclusive community, we kindly ask that you review and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) when participating in the project.

---

## 🛠 Branching Guidelines

To maintain a clean and organized project, please adhere to the following branching guidelines:

1. **Use descriptive branch names** that indicate the purpose of the branch.
   - Example: `feature/add-pumpkin-gallery` or `bugfix/fix-header-alignment`.
2. **Create a new branch for each task** you work on. Avoid making changes directly on the `main` branch.
3. **Keep your branches up to date** with the `main` branch by merging the latest changes from `main` into your feature branch regularly.
   - To sync with the latest updates from the `main` branch, use the following command in your feature branch:
   ```bash
   git pull origin main
   ```
4. **Delete your branch after merging** to keep the repository clean and prevent clutter.
   Following these guidelines will help ensure a smooth collaboration process and make it easier for everyone to contribute effectively to the Midwest Pumpkins project. Thank you for your participation!

---

## 🧰 Languages and Tools:

<div align="center">

<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="36" height="36" alt="Vite" /></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer">
<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
<a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/></a>

</div>

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🐞 Issues

If you encounter any issues or bugs while working on the Midwest Pumpkins project, please report them using the [Issues](https://github.com/OpenCodeChicago/Midwest-Pumpkins/issues) section of the repository. Be sure to provide a clear description of the issue and any relevant information to help us address it promptly.

---

## 💬 Feedback

We value your input! If you have any feedback or suggestions for improving the project, please feel free to share your thoughts. You can submit feedback through the Issues section or contact us directly at opencodechicago@gmail.com

---

## 🤝 Connect With Us

Stay updated on project developments and engage with our open-source community! You can connect with us through the following platforms:

<div align="center">
<a href="https://www.linkedin.com/company/open-code-chicago" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
<a href="https://www.youtube.com/@AlexSmaginDev" target="_blank">
<img src="https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" style="margin-bottom: 5px;" />
</a>
<a href="https://discord.gg/t6MGsCqdFX" target="_blank">
    <img src="https://img.shields.io/badge/discord-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white" alt="Discord" style="margin-bottom: 5px;" />
</a>
<a href="https://www.meetup.com/open-code-chicago" target="_blank">
    <img src="https://img.shields.io/badge/Meetup-%23ED1C40.svg?&style=for-the-badge&logo=meetup&logoColor=white" alt="Meetup" style="margin-bottom: 5px;" />
</a>
<a href="https://github.com/Alexandrbig1" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=github&logoColor=white" alt="GitHub" style="margin-bottom: 5px;" />
</a>
</div>
<br />
Join us to participate in discussions, share ideas, and collaborate on exciting projects. Subscribe to our YouTube channel for upcoming video tutorials and insights into open-source development!
<br />
<br />
We’d love to have you as part of our community!

---

## 🙏 Acknowledgments

A big thank you to all contributors for your hard work and dedication to the **Midwest Pumpkins project**. We also want to acknowledge **Hacktoberfest** for providing a platform to promote open-source contributions and encourage community involvement.

---

## Project Contributors

- **Daniel Dunevant** - Contributions
  [GitHub](https://github.com/DanielDunevant)

- **Liz Park** - Contributions
  [GitHub](https://github.com/SEParkDEV)

- **Tanvi Patel** - Contributions
  [GitHub](https://github.com/tanvi4248)

- **Christal Spaeth** - Contributions
  [GitHub](https://github.com/christalchronicles)

- **Neel Mishra** - Contributions
  [GitHub](https://github.com/Neel-07)

- **Brian Kim** - Contributions
  [GitHub](https://github.com/bibimbop123)

- **Victor Manzanilla** - Contributions
  [GitHub](https://github.com/VictorManzanilla)

---

## 🧑‍💻 Author

This project is maintained by **Alex Smagin**, the Mentor and Organizer at [Open Code Chicago](https://github.com/OpenCodeChicago).

I designed and built the initial setup and configurations for this project.
Visit [My Portfolio](https://alexsmagin.dev) | [GitHub](https://github.com/Alexandrbig1).
