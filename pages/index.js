import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
	const { isConnected } = useAccount();
	return (
		<div className={styles.container}>
			<Head>
				<title>Valist - Next Example</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.heading}>Valist @ FIL Banglore</h1>
				<h2 className={styles.subheading}>Ship.Software.Seamlessly</h2>

				<ConnectButton className={styles.button}>
					Connect Wallet
				</ConnectButton>
				{isConnected && (
					<h1 className={styles.message}>This is an example. </h1>
				)}

				{/* Your Modifications Here!!*/}
			</main>
		</div>
	);
}
