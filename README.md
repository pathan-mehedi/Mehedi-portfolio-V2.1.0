# Mehedi Pathan's Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- ⚡️ Next.js 15 with App Router
- 🎨 Modern UI with Tailwind CSS and Radix UI
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 📊 Interactive charts with Recharts
- 📝 Contact form with Resend
- 💬 WhatsApp integration
- 🔝 Back to top button
- 📍 Smooth scroll with progress indicator
- 🍞 Toast notifications
- ⌨️ Full keyboard navigation support

## 🛠️ Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI
- Recharts
- Resend
- Lucide Icons
- Next Themes
- React Hook Form
- Zod
- Sonner

## 📁 Project Structure

```
.
├── app
│   ├── api
│   │   ├── hello
│   │   │   └── route.ts
│   │   └── resend
│   │       └── route.ts
│   ├── components
│   │   ├── ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── separator.tsx
│   │   │   └── toast.tsx
│   │   ├── charts
│   │   │   └── pie-chart.tsx
│   │   ├── email
│   │   │   └── email-signup.tsx
│   │   ├── footer
│   │   │   └── footer.tsx
│   │   ├── header
│   │   │   └── header.tsx
│   │   ├── landing
│   │   │   └── landing.tsx
│   │   ├── projects
│   │   │   └── projects.tsx
│   │   └── skills
│   │       └── skills.tsx
│   ├── hooks
│   │   ├── useDarkMode.ts
│   │   └── useScroll.ts
│   ├── lib
│   │   ├── resend.ts
│   │   └── themes.ts
│   ├── middleware.ts
│   ├── page.tsx
│   ├── projects
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── resume
│   │   └── page.tsx
│   └── styles
│       ├── globals.css
│       └── tailwind.css
├── public
│   ├── images
│   │   ├── logo.png
│   │   └── profile.jpg
│   └── favicon.ico
├── .env
├── .gitignore
├── README.md
├── next.config.js
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

To get started with this template, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/mehedipathan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to see your new portfolio in action.

4. **Build and deploy**

   When you're ready to deploy your portfolio, run the following command to create an optimized build:

   ```bash
   npm run build
   ```

   You can then deploy the `out` directory to your favorite hosting provider.

## 📝 Customization

To customize this template with your own content, follow these steps:

1. **Update the site metadata**

   Open the `app/layout.tsx` file and update the `<Metadata>` component with your own information, such as title, description, and social media links.

2. **Add your projects**

   Add your projects to the `app/projects` directory. Each project should have its own folder with a `page.tsx` file containing the project details.

3. **Update the resume**

   Replace the placeholder resume in the `app/resume` directory with your own resume. You can use the provided PDF file or create your own custom resume page.

4. **Customize the content**

   Update the content of the various components in the `app/components` directory to reflect your own skills, experience, and interests.

5. **Change the theme**

   To change the color theme of the portfolio, update the `app/lib/themes.ts` file with your preferred colors. You can also customize the dark and light mode settings here.

6. **Update the email subscription form**

   If you want to use the email subscription form, sign up for a Resend account and update the `app/lib/resend.ts` file with your API key. Customize the form settings in the `app/components/email/email-signup.tsx` file.

7. **Modify the contact method**

   To change the contact method (email or WhatsApp), update the `app/components/ui/toast.tsx` file with your preferred contact information.

8. **Add your own animations**

   Customize the animations used throughout the portfolio by modifying the Framer Motion settings in the various components. You can also add your own custom animations if desired.

9. **Update the charts data**

   If you want to display your skills or other data as charts, update the data in the `app/components/charts/pie-chart.tsx` file. You can also add more charts or modify the existing ones.

10. **Personalize the images**

    Replace the placeholder images in the `public/images` directory with your own images. Update the image references in the components as needed.

11. **Adjust the layout**

    Modify the layout of the portfolio by updating the various layout components in the `app/components` directory. You can change the structure, spacing, and other layout properties to your liking.

12. **Update the fonts**

    To change the fonts used in the portfolio, update the `app/styles/globals.css` file with your preferred font imports and settings.

13. **Customize the icons**

    If you want to use different icons, replace the Lucide Icons used throughout the portfolio with your preferred icon set. Update the icon references in the components as needed.

14. **Change the animations library**

    To use a different animations library, remove the Framer Motion integration and replace it with your preferred library. Update the component animations accordingly.

15. **Modify the SEO settings**

    To improve the SEO of your portfolio, update the `app/layout.tsx` file with relevant meta tags, Open Graph tags, and other SEO-related settings.

16. **Add analytics**

    To track the performance and usage of your portfolio, add your preferred analytics solution (e.g., Google Analytics, Plausible, etc.) to the portfolio. Follow the respective documentation for integration instructions.

17. **Deploy to a custom domain**

    If you want to use a custom domain for your portfolio, follow the instructions provided by your hosting provider to configure the domain settings. Update the portfolio's base URL in the appropriate configuration files.

18. **Enable HTTPS**

    To secure your portfolio with HTTPS, obtain an SSL certificate for your domain and configure your hosting provider to use HTTPS. This is especially important if you are handling sensitive data, such as email subscriptions.

19. **Set up a CMS (optional)**

    If you want to manage your portfolio content more easily, consider integrating a headless CMS (e.g., Contentful, Sanity, etc.) to manage your projects, blog posts, and other content. Follow the respective documentation for integration instructions.

20. **Add a blog (optional)**

    To share your thoughts and experiences, consider adding a blog to your portfolio. You can use a headless CMS or a static site generator (e.g., Markdown files) to manage your blog content. Update the navigation and layout to accommodate the blog section.

## 📫 Contact

If you have any questions or feedback, feel free to reach out to me via email at [mehedipathan@gmail.com](mailto:mehedipathan@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/mehedipathan/).

## 📄 License

This portfolio template is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it as you like.
