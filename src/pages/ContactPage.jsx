import Navbar from "../components/Navbar";

const contacts = [
	{
		code: "1",
		label: "Email",
		value: "adhamibrahimali131@gmail.com",
		href: "#",
	},
	{
		code: "2",
		label: "LinkedIn",
		value: "www.linkedin.com/in/adham-ibrahim-49ba17421",
		href: "https://www.linkedin.com/in/adham-ibrahim-49ba17421/",
	},
	{
		code: "3",
		label: "GitHub",
		value: "github.com/IGiGZI",
		href: "https://github.com/IGiGZI",
	},
	{
		code: "4",
		label: "Phone",
		value: "+20 10-650-25-470",
		href: "#",
	},
];

function ContactPage() {
	return (
		<>
			<Navbar />
			<main className="bg-white text-black">
				<section className="mx-auto max-w-3xl px-6 py-24">
					<p className="font-mono text-xs tracking-widest text-[#00C39A]">
						GET IN TOUCH
					</p>
					<h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
						Contact
					</h1>
					<p className="mt-4 max-w-md text-[#454545]">
						Reach out through whichever works best — I check all of
						these.
					</p>

					<div className="mt-14 border-t border-[#70707033]">
						{contacts.map((c) => (
							<a
								key={c.code}
								href={c.href}
								className="group flex items-center justify-between border-b border-[#70707033] py-6 transition-colors hover:bg-black rounded p-4"
								onClick={c.code == 1 || c.code == 4 ? (e) => e.preventDefault() : null}
								target="_blank"
							>
								<div className="flex items-center gap-6">
									<span className="font-mono text-sm text-[#00C39A]">
										{c.code}
									</span>
									<span className="text-lg font-semibold group-hover:text-white">
										{c.label}
									</span>
								</div>
								<span className="font-mono text-sm text-[#454545] group-hover:text-[#00C39A]">
									{c.value}
								</span>
							</a>
						))}
					</div>
				</section>
			</main>
		</>
	);
}

export default ContactPage;
