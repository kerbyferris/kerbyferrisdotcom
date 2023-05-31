import Link from "next/link";

type FooterLinkProps = {
  href: string;
  text: string;
};

const FooterLink = ({ href, text }: FooterLinkProps) => (
  <Link className="hover:text-yellow-300" href={href} target="_blank">
    {text}
  </Link>
);

export default FooterLink;
