import { Header } from '../components/Header';

export function Home() {
	return (
		<>
			<Header />
			<main className="flex h-[85%] items-center justify-end bg-home-img bg-cover bg-no-repeat xl:h-[88%]">
				<div className="mx-auto flex h-[430px] w-[65%] flex-col items-center justify-center gap-7 text-center text-white md:h-[450px] lg:h-[370px] xl:mx-0 xl:w-3/5 xl:text-left 2xl:w-5/12">
					<div className="flex h-full w-[80%] flex-col justify-between bg-black bg-opacity-60 p-6">
						<h1 className="w-full px-5 text-[2rem] font-medium sm:text-[2.3rem]">
							Adote um amor!
						</h1>
						<p className="w-full text-xl font-medium md:text-2xl xl:w-2/3">
							A adoção é um ato de amor e responsabilidade.
						</p>
						<p className="w-full text-xl font-medium md:text-2xl">
							Para adotar basta se comprometer com um bichinho que dependerá
							sempre de você, cuidar dele, dar afeto e um lar seguro. O amor é
							uma obrigação para adotar um coração.
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
