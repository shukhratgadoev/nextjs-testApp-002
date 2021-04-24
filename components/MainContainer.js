import Head from 'next/head';
import A from './A'

const MainContainer = ({ children, keywords }) => {
	return (
		<>
			<Head>
				<meta keywords={"coding" + keywords}></meta>
				<title>Main page</title>
			</Head>
			<div className='navbar'>
				<A href={'/'} text='Main' />
				<A href={'/users'} text='Users' />
			</div>
			<div>{children}</div>
			<style jsx>
				{`
				.navbar{
					background: orange;
					padding: 10px;
				}
				`}
			</style>
		</>
	)
}

export default MainContainer
