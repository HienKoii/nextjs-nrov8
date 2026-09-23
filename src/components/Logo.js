import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex-shrink-0">
      <img src="https://ngocrongonline.com/images/logo__Tet_280x90.png" alt="Ngọc Rồng Online" className="nro-logo" />
    </Link>
  );
}
