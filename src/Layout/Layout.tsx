import React, { ReactElement, useState, ReactNode } from 'react';
import Link from 'next/link';
interface IProps {
	children: ReactNode;
}

export default function Layout({ children }: IProps): ReactElement {
	const [navState, setNavState] = useState(true);
	return (
		<>
			<nav className="md:px-16 md:flex md:items-center md:justify-between p-3 border-b-2 pb-0 shadow-sm md:pb-4">
				{/* Logo text or image */}
				<div className="flex items-center justify-between mb-4 md:mb-0 md:w-3/12">
					<h1 className="leading-none text-2xl text-grey-darkest">
						<a
							className="no-underline text-grey-darkest hover:text-black"
							href="#"
						>
							<img
								src="/images/logo.png"
								alt="media mall logo"
								className="w-32"
							/>
						</a>
					</h1>

					<a
						className="text-white hover:text-orange md:hidden hover:bg-gray-500  bg-gray-700 p-2 rounded"
						onClick={() => setNavState(!navState)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="currentFill"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</a>
				</div>
				<div className="hidden md:block md:w-9/12 md:flex md:justify-between">
					<ul className="list-reset md:flex md:items-center">
						<li className="md:ml-4">
							<Link href="/">
								<a
									className="block no-underline  py-2 text-grey-darkest hover:text-blue-600 md:border-none md:p-0"
								>
									Home
								</a>
							</Link>
						</li>
						<li className="md:ml-4">
							<Link href="/about">
								<a
									className="border-t block no-underline hover:text-blue-600 py-2 text-grey-darkest md:border-none md:p-0"
								>
									About
								</a>
							</Link>
						</li>
						<li className="md:ml-4">
							<Link href="/academy">
								<a
									className="border-t block no-underline  hover:text-blue-600 py-2 text-grey-darkest  md:border-none md:p-0"
								>
									Academy
								</a>
							</Link>
						</li>
						<li className="md:ml-4">
							<Link href="/client">
								<a
									className="border-t block no-underline hover:text-blue-600 py-2 text-grey-darkest md:border-none md:p-0"
								>
									Client
								</a>
							</Link>
						</li>
						<li className="md:ml-4">
							<Link href="/face-of-eket">
								<a
									className="border-t block no-underline py-2 text-grey-darkest hover:text-blue-600 md:border-none md:p-0"
								>
									Face Of Eket
								</a>
							</Link>
						</li>
					</ul>
					<div>
						<ul>
							<li>
								<a href="tel:+234 815 5448 000">+234 815 5448 000</a>
							</li>
						</ul>
					</div>
				</div>
				{/* end logo text or image */}
				<div className={navState ? "hidden" : "md:block md:flex md:justify-between"}>
					<ul className="list-reset md:flex md:items-center">
						<li className="md:ml-4">
							<Link href="/">
								<a
									className="block no-underline  py-2 text-grey-darkest hover:text-blue-600 md:border-none md:p-0"
								>
									Home
								</a>
							</Link>
						</li>
						<li className="md:ml-4">
							<Link href="/about">
								<a
									className="border-t block no-underline hover:text-blue-600 py-2 text-grey-darkest md:border-none md:p-0"
								>
									About
								</a>
							</Link>
						</li>
						<li className="md:ml-4">
							<Link href="/academy">
							<a
								className="border-t block no-underline  hover:text-blue-600 py-2 text-grey-darkest  md:border-none md:p-0"
							>
								Academy
							</a>
							</Link>
						</li>
						<li className="md:ml-4">
							<Link href="/client">
								<a
									className="border-t block no-underline hover:text-blue-600 py-2 text-grey-darkest md:border-none md:p-0"
								>
									Client
								</a>
							</Link>
						</li>
						<li className="md:ml-4">
							<Link href="/face-of-eket">
								<a
									className="border-t block no-underline py-2 text-grey-darkest hover:text-blue-600 md:border-none md:p-0"
								>
									Face Of Eket
								</a>
							</Link>
						</li>
					</ul>
					<div>
						<ul>
							<li>
								<a href="tel:+234 815 5448 000">+234 815 5448 000</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{children}
			<footer className="p-4 lg:p-16 md:p-16 md:grid lg:grid md:grid-cols-6 gap-6 bg-black text-white mt-9">
				<div className="col-span-2">
					<img src="/logo/logo-footer.png" alt="footer_logo" className="mb-3" />
						<p className="mt-2">The Primary goal of MediaMall is to provide a one-stop media solution outfit to proffer
							top-notched media services as well as developing skills and building capacity to meet the 21st century
							standard in media proficiency. </p>
				</div>
				<div className="col-span-1 text-left"></div>
				<div className="col-span-1 text-left">
					<h4 className="font-black mt-4 mb-2 text-1xl">Links</h4>
					<ul>
						<li>MediaMall</li>
						<li>MediaShop</li>
						<li>MediaAcademy</li>
						<li>MediaAffiliate</li>
					</ul>
				</div>
				<div className="col-span-1">
					<h4 className="font-black mt-4 mb-2 text-1xl">Contacts</h4>
					<p>30c Park Road Eket</p>
					<p>Phone</p>
					<p>08065167449<br />08068838611</p>
					<p>Email info@mediamall.ng</p>
				</div>
				<div className="flex justify-around col-span-1 mt-5">
					<div>
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="16" cy="16" r="14" fill="url(#paint0_linear)"/>
							<path
								d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
								fill="white"/>
							<defs>
								<linearGradient id="paint0_linear" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse">
									<stop stopColor="#18ACFE"/>
									<stop offset="1" stopColor="#0163E0"/>
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div>
						<svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8.78874 23C5.55374 23 2.53817 22.0591 0 20.4356C2.15499 20.5751 5.95807 20.2411 8.32358 17.9848C4.76508 17.8215 3.16026 15.0923 2.95094 13.926C3.25329 14.0426 4.6953 14.1826 5.50934 13.856C1.4159 12.8296 0.787928 9.23732 0.927477 8.14097C1.695 8.67749 2.99745 8.8641 3.50913 8.81744C-0.305207 6.08823 1.06703 1.98276 1.74151 1.09635C4.47882 4.88867 8.5812 7.01857 13.6564 7.13704C13.5607 6.71736 13.5102 6.28042 13.5102 5.83164C13.5102 2.61092 16.1134 0 19.3247 0C21.0025 0 22.5144 0.712754 23.5757 1.85284C24.6969 1.59011 26.3843 0.975068 27.2092 0.443205C26.7934 1.93611 25.4989 3.18149 24.7159 3.64308C24.7224 3.65878 24.7095 3.62731 24.7159 3.64308C25.4037 3.53904 27.2648 3.18137 28 2.68256C27.6364 3.52125 26.264 4.91573 25.1377 5.69642C25.3473 14.9381 18.2765 23 8.78874 23Z"
								fill="#47ACDF"/>
						</svg>
					</div>
					<div>
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial)"/>
							<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial)"/>
							<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial)"/>
							<path
								d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
								fill="white"/>
							<path fillRule="evenodd" clipRule="evenodd"
										d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
										fill="white"/>
							<path fillRule="evenodd" clipRule="evenodd"
										d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
										fill="white"/>
							<defs>
								<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
																gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
									<stop stopColor="#B13589"/>
									<stop offset="0.79309" stopColor="#C62F94"/>
									<stop offset="1" stopColor="#8A3AC8"/>
								</radialGradient>
								<radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
																gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
									<stop stopColor="#E0E8B7"/>
									<stop offset="0.444662" stopColor="#FB8A2E"/>
									<stop offset="0.71474" stopColor="#E2425C"/>
									<stop offset="1" stopColor="#E2425C" stopOpacity="0"/>
								</radialGradient>
								<radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
																gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
									<stop offset="0.156701" stopColor="#406ADC"/>
									<stop offset="0.467799" stopColor="#6A45BE"/>
									<stop offset="1" stopColor="#6A45BE" stopOpacity="0"/>
								</radialGradient>
							</defs>
						</svg>
					</div>
				</div>
			</footer>
		</>
	);
}
