import Link from 'next/link'

function HomePage() {
	return (
		<div>
			<h1>the home page </h1>
         <ul>
            <li>
               <Link href="/portfolio">
            </li>
         </ul>
		</div>
	);
}

export default HomePage;
