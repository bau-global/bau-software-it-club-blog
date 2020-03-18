<h1 align="center">
  Bahçeşehir University Software and IT Club Blog Page
</h1>

## 🚀 Quick start to adding a new Event

1.  **Fork this project**

2.  **Clone to your local**

    You may use `GitHub Desktop` Application

3.  **Open the code and start customizing!**

    You may use `Visual Studio Code`

4. **Instal dependencies first**

    ```shell
    yarn install
    ```

5. **Run blog**

    ```shell
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!

    `CTRL + Click` to see it on a browser.

6. **Add a new Event**
  Create a file with `seo-friendly name` and `.mdx` extension to this path `content > posts`.

7. **If you cannot see the latest added mdx on localhost**

  Run these commands

    ```shell
    gatsby clean
    ```

    then

    ```shell
    gatsby build
    ```

    then

    ```shell
    gatsby develop
    ```

8. **How to publish?**
Commit and push the changes to your repository. Then Create a Pull Request to Original Repository. When the Contributers Accepts your PR then it will publish on the website.

<br/>

<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="30" />
  </a>
</p>

<br/>

## 🧐 What's inside?

Here are the top-level files and directories you'll see in a site created using the blog theme starter:

```text
gatsby-starter-blog-theme
├── content
│   ├── assets
│   │   └── avatar.png
│   └── posts
│       ├── hello-world.mdx
│       └── other-event-names.mdx
├── src
│   └── gatsby-theme-blog
│       ├── components
│       │   └── bio-content.js
│       └── gatsby-theme-ui
│           └── colors.js
├── .gitignore
├── .prettierrc
├── gatsby-config.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

1.  **`/content`**: A content folder holding assets that the theme expects to exist. This will vary from theme to theme -- this starter is set up to get you started with the blog theme, which expects an image asset for your avatar, and blog post content. Replace the avatar image file, delete the demo posts, and add your own!

2.  **`/src`**: You will probably want to customize your site to personalize it. The files under `/src/gatsby-theme-blog` _shadow_, or override, the files of the same name in the `gatsby-theme-blog` package. To learn more about this, check out the [guide to getting started with using the blog theme starter](https://gatsbyjs.org/docs/themes/using-a-gatsby-theme).

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This file tells [Prettier](https://prettier.io/) which configuration it should use to lint files.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. When using themes, it's where you'll include the theme plugin, and any customization options the theme provides.

6.  **`LICENSE`**: Gatsby is licensed under the MIT license.

7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9.  **`README.md`**: A text file containing useful reference information about your project.

## License

[MIT](LICENSE.md)