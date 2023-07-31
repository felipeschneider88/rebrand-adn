function HeaderComponent() {    
    return (  

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"      >
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2>
          <span>Home</span>
          </h2>
        </a>

        <a
          href="/clients"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2>
            <span>Success Stories</span>
          </h2>
        </a>

        <a
          href="/services"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2>
            <span>Services</span>
          </h2>
        </a>

        
        <a
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2>
            <span>About</span>
          </h2>
          <p>About us</p>
        </a>
      </div>    
    )
}
export default HeaderComponent