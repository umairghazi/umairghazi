const YEAR = new Date().getFullYear();

const themeConfig = {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Umair Ghazi.
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};


export default themeConfig;