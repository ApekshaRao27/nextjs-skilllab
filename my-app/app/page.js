import Image from "next/image"
import img from "../public/image.png"
import Link from "next/link"

export function UserData({name,role}){
  return(
    <div>
    <h2>Name: {name}</h2>
    <p>Role: {role}</p>
    </div>
  )
}

export default function page(){
  let name="apeksha rao"
  return(
    <div style={{backgroundColor:"violet",height:"100vh"}}>
    <div style={{display:"flex-grid",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}>
    <Image src={img} alt="image" width={100} height={100} style={{borderRadius:"50%"}}/>
    <br />
    <div style={{color:"blue"}}>{`${name}`}</div>
    <p style={{color:"blue"}}>{`Age: 21`}</p>
    <p style={{color:"blue"}}>{`Skills: JavaScript, React, Next.js,c++,python`}</p>
   <div>

    <Image src={img} alt="image" width={100} height={100} style={{borderRadius:"50%"}}/>
    <br />
    <div style={{color:"blue"}}>{`${name}`}</div>
    <p style={{color:"blue"}}>{`Age: 21`}</p>
    <p style={{color:"blue"}}>{`Skills: JavaScript, React, Next.js,c++,python`}</p>
  
    
    <Link href='/about'>About Us</Link>
    </div>
    <div style={{marginTop:"20px", color:"white", fontSize:"30px"}} >
    <UserData name="Apeksha Rao" role="Full Stack Developer"/>
    <UserData name="K" role="Developer"/>
    </div>
    </div>
 </div>
  )
}