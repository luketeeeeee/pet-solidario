import { Header } from '../components/Header';

export function Home() {
	return (
		<>
			<Header />
			<main className="flex h-[87%] items-center justify-end bg-home-img bg-cover bg-no-repeat lg:h-[90%]">
				<div className="mx-auto flex h-[45%] w-[60%] flex-col items-start gap-7 bg-black bg-opacity-70 p-6 text-center text-white xl:mx-0 xl:w-5/12 xl:text-left">
					<h1 className="w-full px-5 text-[3rem] font-bold">Adote um amor</h1>
					<p className="w-full text-2xl font-medium xl:w-2/3">
						A adoção é um ato de amor e responsabilidade.
					</p>
					<p className="w-full text-2xl font-medium xl:w-3/4">
						Para adotar basta se comprometer com um bichinho que dependerá
						sempre de você, cuidar dele, dar afeto e um lar seguro. O amor é uma
						obrigação para adotar um coração.
					</p>
				</div>
			</main>
		</>
	);
}
