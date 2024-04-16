import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import scrollgif from '../assets/scroll.gif'
import Link from "next/link";
import hexapod from '../assets/hexapod.jpg'
import ender from '../assets/v3ke.jpg'
import tmmc from '../assets/TMMC.jpg'
import ProjectCard from "@/components/ProjectCard";


export default function Home() {
  return (
    <>
      <Head>
        <title>Junwoo&#39;s Website</title>
        <meta name="description" content="Junwoo's webspace, feel free to explore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className = {styles.hero}>
          <p id = "herop">showcase of my projects and work, where engineering meets design and creativity</p>
          <div className = {styles.heroContainer}>
                <Link href = '#contact'>
                  <button id = "herobutton">CONTACT</button>
                </Link>
                <Image className = {styles.image} priority src = {scrollgif} alt = 'scroll'/>
                <Link href = '/about'>
                  <button id = "herobutton">ABOUT</button>
                </Link>
          </div>
        </div>
        <div className = {styles.work}>
          <div className = {styles.workTitle}>
          <h1>PROJECTS</h1>
          <Link href = '/projects'>
            <button id = "herobutton">ALL</button>
          </Link>
          </div>
          <div className = {styles.workSection}>
            <ProjectCard
                bgi = {hexapod.src}
                Title = "Hexapod"
                description = "ESP32 powered Hexapod with MG996R servos, with Inverse Kinematics firmware written in C++ through PlatformIO"
                whereto = '/hexapod'
                skill1 = "CAD"
                skill2 = "C++"
                skill3 = "Kinematics"
                skill4 = "FEA"
            />
            <ProjectCard
                bgi = {ender.src}
                Title = "ENDER 3 RCA"
                description = "Structural and mechanical improvement on the Ender 3 v3 ke through independant Root-Cause Analysis, significantly improving print quality"
                whereto = '/ender'
                skill1 = "CAD"
                skill2 = "Root-Cause"
                skill3 = "Material Testing"
                skill4 = "FEA"
            />
          </div>
          <div className = {styles.workSection}>
            <ProjectCard
                bgi = {tmmc.src}
                Title = "TMMC Hackathon OpenCV ML development"
                description = "Developed a YoloV8 based OpenCV TensorFlow model to detect body hole states in a close to real life Toyota assembly line scenario"
                whereto = '/tmmc'
                skill1 = "OpenCV"
                skill2 = "Python"
                skill3 = "Data Collection"
                skill4 = "PM"
            />
            <ProjectCard
                bgi = {hexapod.src}
                Title = "Hexapod"
                whereto = '/hexapod'
                skill1 = "CAD"
                skill2 = "Root-Cause"
                skill3 = "Material Testing"
                skill4 = "FEA"
            />
          </div>
          <div className = {styles.skillfull}>
            <h2>Basically, I excel in</h2>
            <div className = {styles.good}>
            <div className = {styles.third}>
              <div className = {styles.skillCard}>
              <h3>Analysis</h3>
              <p>Logical analysis of data to find out potential solutions, and the ability to consider multiple variables in decision making</p>
              </div>
            </div>
            <div className = {styles.third}>
              <div className = {styles.skillCard}>
              <h3>Design</h3>
              <p>From imagination to reality, versed in Solidworks, Fusion, Onshape. Designing to fit various manufacturing constraints</p>
              </div>
            </div>
            <div className = {styles.third}>
              <div className = {styles.skillCard}>
              <h3>Integration</h3>
              <p>Identifying how each part of the system work with the other, and understanding the overall purpose of the system.</p>
              </div>
            </div>
            </div>
          </div>
      </div>
      <div className = {styles.work}>
      <div className = {styles.workTitle}>
          <h1>MEDIA</h1>
          <Link href = "https://jwdcreativehouse.ca" target = "_blank" rel="noreferrer" >
            <button id = "herobutton">MORE</button>
          </Link>
      </div>
      <div className = {styles.workSection}>
        <div className = {styles.left}>
            <div className = {styles.bg} id = {styles.jwd}>
              <div className = {styles.overlay}>
              <h3>JWD Creative House</h3>
              <p>Media business founded by me, providing quality digital media and marketing services to businesses and events across GTA</p>
              <Link href = "https://jwdcreativehouse.ca" target = "_blank" rel="noreferrer" >
                <button id = "herobutton">VISIT</button>
              </Link>
              </div>
            </div>
        </div>
        <div className = {styles.right}>
            <div className = {styles.bg} id = {styles.vision}>
              <div className = {styles.overlay}>
              <h3>VisionJWD</h3>
              <p>Personal Photo/Video showcase, capturing adventures in my life. Also a lot of cars ^^</p>
              <Link href = "https://instagram.com/visionjwd" target = "_blank" rel="noreferrer" >
                <button id = "herobutton">VISIT</button>
              </Link>
              </div>
            </div>    
        </div>
      </div>
      </div>
      </main>
      
    </>
  );
}
