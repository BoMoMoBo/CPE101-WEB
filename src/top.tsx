export function Top() {
  return (

    <div id="top" className="bg-cover bg-center bg-[url('src/pic/996774.jpg')] h-screen p-64">
      <h1 className="text-5xl text-purple-400 font-bold text-center pb-3">Welcome to my Portfolio</h1>
      <div className="flex flex-row justify-center items-center gap-4">
        <a
          className="github-button text-purple-500 font-bold"
          href="https://www.facebook.com/boom.kanteng.9"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Facebook andrejjurkin/create-tailwind-app on GitHub"
        >
          Facebook
        </a>
        <a
          className="github-button text-purple-500 font-bold"
          href="https://www.instagram.com/bomo_mobo/"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-icon="octicon-comment-discussion"
          data-size="large"
          aria-label="Discuss andrejjurkin/create-tailwind-app on GitHub"
        >
          instragram
        </a>

      </div>
    </div>
  );
}