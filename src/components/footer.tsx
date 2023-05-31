import FooterLink from "./footer-link";

const Footer = () => (
  <footer>
    <ul className="py-10 text-4xl font-bold leading-[30px] text-gray-300">
      <li>
        <FooterLink href="https://github.com/kerbyferris" text="-&gt; github" />
      </li>
      <li>
        <FooterLink
          href="https://instagram.com/kerbyferris"
          text="-&gt; instagram"
        />
      </li>
      <li>
        <FooterLink
          href="https://kerbyferris.bandcamp.com"
          text="-&gt; bandcamp"
        />
      </li>
      <li>-&gt; email (kerbyferris[at]gmail[dot]com)</li>
    </ul>
  </footer>
);

export default Footer;
