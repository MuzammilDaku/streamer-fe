import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Home () {
  const router = useRouter()
  const handleRoute = () => {
    router.push("/home")
  }
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh",width:"100vw",fontFamily:"geistSans2"}}>
          <div className="text-center">
            <div className="header">
              <Image src={'/logo_stream.png'} alt='Logo Streamer' loading='lazy' width={32} height={32}></Image>
              <span className='px-2' style={{fontSize:"18px",fontWeight:"500",position:"relative",top:"2px"}}>WATCH</span>
              <p>Enjoy streaming for free</p>
            </div>
            <div className="grid">
              <button className={`${styles['btn-default']}`} onClick={handleRoute}>Log in</button>
            </div>
            <div className="footer py-2">
              No Account?
              <Link href={"#"} className='px-1'>Sign up</Link>
            </div>
          </div>
        </div>
            
    )
}