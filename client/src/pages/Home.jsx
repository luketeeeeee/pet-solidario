import { Header } from '../components/Header';

export function Home() {
	return (
		<>
			<Header />
			{/* essa seção main contém o fundo da página, estilos: bg-home-img bg-cover bg-no-repeat */}
			<main className="flex h-[89vh] items-center justify-end">
				<div className="flex h-[40%] w-1/3 flex-col items-start gap-7">
					<h1 className="px-5 text-[3rem] font-bold">Adote um amor</h1>
					<p className="w-3/5 text-2xl font-medium">
						A adoção é um ato de amor e responsabilidade.
					</p>
					<p className="w-5/6 text-2xl font-medium">
						Para adotar basta se comprometer com um bichinho que dependerá
						sempre de você, cuidar dele, dar afeto e um lar seguro. O amor é uma
						obrigação para adotar um coração.
					</p>
				</div>
			</main>
		</>
	);
}
