import Link from "next/link";
import Image from "next/image";


export const Header = () => {
    return (
        <header>
        <div>
          <div className="topNav">
            <Image alt="logo" src={'/images/explore.png'} width={80} height={80} />
          <nav>
            <ul>
              <li><Link legacyBehavior href='/' passHref>
              <a> Home </a>
            </Link>
            </li>
            <li>
            <Link legacyBehavior href='/events' passHref>
              <a> Events </a>
            </Link>
            </li>
            <li>
            <Link legacyBehavior href='/about-us' passHref>
              <a> About US </a>
            </Link>
            </li>
            </ul>         
          </nav>
          </div>
        <h1 className="title"> Exploring The Middle East With Special Events </h1>
        </div>
      </header>
    )
}