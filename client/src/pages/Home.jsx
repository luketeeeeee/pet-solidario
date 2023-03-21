import { Header } from '../components/Header';

export function Home() {
	return (
		<>
			<Header />
			{/* essa seção main contém o fundo da página, estilos: bg-home-img bg-cover bg-no-repeat */}
			<main className="h-[92%]"></main>
		</>
	);
}
