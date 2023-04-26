import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

export function AddPets() {
	const [petData, setPetData] = useState({
		name: '',
		breed: '',
		species: '',
	});

	const handleChange = (e) => {
		setPetData({ ...petData, [e.target.name]: e.target.value });
	};

	const [foto, setFoto] = useState('');

	const handleFotoChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function (event) {
				console.log('Imagem lida com sucesso!');
				setFoto(event.target.result);
			};

			reader.readAsDataURL(file);
		} else {
			setFoto('');
		}
	};

	return (
		<main className="flex min-h-screen items-center justify-center bg-addpet-img bg-cover bg-no-repeat text-white">
			<div className="flex h-[700px] w-[800px] items-center justify-center">
				<form
					action=""
					method="post"
					className="flex h-auto w-full flex-col justify-between rounded-3xl bg-black bg-opacity-60 p-6 text-center"
					autoComplete="off"
				>
					<Link to="/" className="h-14 w-14" title="Voltar à página inicial">
						<ArrowLeftCircleIcon className="h-14 w-14" />
					</Link>
					<div className="flex">
						<h1 className="m-auto text-3xl">Cadastre seu pet</h1>
					</div>
					<div className="mt-6 flex justify-between">
						<div className="w-[320px]">
							<label
								htmlFor="foto"
								id="fotoLabel"
								tabIndex={0}
								style={{
									width: '320px',
									aspectRatio: '16/12',
									background: '#ddd',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: '#aaa',
									border: '3px dashed',
									cursor: 'pointer',
									backgroundImage: `url(${foto})`,
									backgroundSize: 'cover',
									borderRadius: '20px',
								}}
							>
								<input
									type="file"
									name="foto"
									id="foto"
									className="hidden"
									onChange={handleFotoChange}
								/>
								<span>Escolher foto do pet</span>
							</label>
						</div>
						<div className="flex w-[370px] flex-col">
							<div className="mb-3">
								<input
									type="text"
									name="name"
									id="name"
									onChange={handleChange}
									value={petData.name}
									placeholder="Nome do pet"
									className="h-14 w-full rounded-2xl px-5 text-black"
								/>
							</div>
							<div className="mb-3">
								<input
									type="text"
									name="species"
									id="species"
									onChange={handleChange}
									value={petData.species}
									placeholder="Espécie: cachorro, gato, passáro..."
									className="h-14 w-full rounded-2xl px-5 text-black"
								/>
							</div>
							<div className="mb-3">
								<input
									type="text"
									name="breed"
									id="breed"
									onChange={handleChange}
									value={petData.breed}
									placeholder="Raça: buldogue, siamês, arara, ..."
									className="h-14 w-full rounded-2xl px-5 text-black"
								/>
							</div>
							<div className="mb-3">
								<p>Sexo</p>
								<div className="flex">
									<input
										type="radio"
										name="sexo"
										id="macho"
										value="Macho"
										className="w-9"
									/>
									<label htmlFor="macho" className="my-o mx-auto">
										Macho
									</label>
									<input
										type="radio"
										name="sexo"
										id="femea"
										value="Fêmea"
										className="w-9"
									/>
									<label htmlFor="femea" className="my-o mx-auto">
										Fêmea
									</label>
									<input
										type="radio"
										name="sexo"
										id="none"
										value="None"
										className="w-9"
									/>
									<label htmlFor="none" className="my-o mr-0 ml-auto">
										Não informar
									</label>
								</div>
							</div>
							<div>
								<p>Descreva as caracteríticas do seu pet</p>
								<textarea
									name="desc"
									id="desc"
									cols="30"
									rows="10"
									className="h-32 w-full   resize-none rounded-2xl p-3 text-base text-black scrollbar-none"
								/>
							</div>
						</div>
					</div>
					<button
						type="submit"
						className="bottom-0 mt-3 h-16 w-80 self-center rounded-2xl bg-button-yellow text-xl font-bold text-slate-50 transition duration-500 ease-in-out hover:bg-yellow-600"
					>
						Adicionar pet para adoção
					</button>
				</form>
			</div>
		</main>
	);
}
