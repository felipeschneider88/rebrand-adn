import Link from 'next/link';
function FooterComponent() {    
	return (          
    <div className="bg-white-300 pt-44 pb-24">
    <p className="mb-4">
            <strong className="font-medium">ADN UY</strong> is located in Montevideo, Uruguay.
          </p>
    <p className="text-gray-400">©{new Date().getFullYear()} - ADN UY</p>
    </div>   
	)
}
export default FooterComponent