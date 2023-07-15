import React from 'react';
import { Header } from '../components/Header';

export function AboutUs() {
	return (
		<>
			<Header />
			<main className="flex h-[90%] items-center bg-home-img bg-cover bg-no-repeat xl:h-[88%] xl:justify-center">
				<div className="mx-auto flex h-full w-full flex-col justify-center gap-7 text-center text-white md:h-[500px] lg:h-[500px] lg:w-3/5 xl:mx-0 xl:text-center 2xl:w-5/12">
					<div className="flex h-[60%] w-full flex-col justify-between bg-black bg-opacity-60 p-6 xs:h-[55%] sm:h-[40%] md:h-[80%] md:py-14 lg:h-[90%] lg:items-center">
						<h1 className="w-full text-[2rem] font-medium text-button-yellow sm:text-[2.3rem] md:text-3xl">
							Sobre nós
						</h1>
						<p className="w-full text-xl font-medium md:text-2xl lg:w-[90%]">
							Não somos uma associação nem temos instalações de canil ou gatil:
							através dos anúncios do site ajudamos animais que estejam para
							adoção a chegarem a quem os procure, criando assim oportunidades
							de integrar animais em risco.
						</p>
						<p className="w-full text-xl font-medium md:text-2xl lg:w-[90%]">
							Juntos somos mais fortes!
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
