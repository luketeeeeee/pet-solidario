import { Header } from '../components/Header';

export function Home() {
	return (
		<>
			<Header />
			<main className="flex h-[85%] items-center justify-center bg-home-img bg-cover bg-no-repeat xl:h-[88%]">
				<div className="mx-auto flex h-[430px] w-[65%] flex-col items-center justify-center gap-7 text-center text-white md:h-[600px] lg:h-[450px] xl:mx-0 xl:w-3/5 xl:text-center 2xl:w-5/12">
					<div className="flex h-full w-[100%] flex-col justify-between bg-black bg-opacity-60 p-6">
						<h1 className="w-full px-5 text-[2rem] font-medium sm:text-[2.3rem]">
							Conheça o Pet Solidário!
						</h1>
						<p className="w-full text-xl font-medium md:text-2xl xl:w-3/3">
							A adoção é um ato de amor e responsabilidade.
						</p>
						<p className="w-full text-xl font-medium md:text-2xl">
						O Pet Solidário é um site que apresenta uma maneira simples de se adotar ou anunciar para adoção um animal que tenha sido encontrado ou que esteja em risco de abandono.
						Não somos uma associação nem temos instalações de canil ou gatil: através dos anúncios aqui colocados ajudamos animais que estejam para adoção a chegarem a quem os procure, criando assim oportunidades de integrar animais em risco. Juntos somos mais fortes!
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
