import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";


const NoSSR_RTK_Query_Comp = dynamic(() =>
    import('@/app/root_comp/cart/rtk_query/RTK_Query_Comp'), {ssr: false});

const Header_Comp = dynamic(() => import('@/app/root_comp/header/Header_Comp'), {ssr: false});
const Cart_Comp_Root = dynamic(() => import('@/app/root_comp/cart/Cart_Comp_Root'), {ssr: false});
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>



        <NoSSR_RTK_Query_Comp/>
        <Header_Comp/>



        <Cart_Comp_Root/>

      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
