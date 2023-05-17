import Link from 'next/link';
function FooterComponent() {    
	return (          
    <div className='header'>
    <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/about">About Us</Link>
    </li>
    <li>
      <Link href="/services">Services</Link>
    </li>
    <li>
      <Link href="/clients">Clients</Link>
    </li>
  </ul>
    </div>   
	)
}
export default FooterComponent