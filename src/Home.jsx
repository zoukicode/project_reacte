import {motion, transform} from 'framer-motion'
import { Demarche } from './Demarche';
import { Compte } from './Compte';
import { Actualite } from './Actualite';
import { CommentNousAider } from './Aide';
import { Footer } from './Footer';
import { lazy, Suspense, useState } from 'react';

const Actualit = lazy(() => import("./Home"));
function charge_page_dom(){
 return(
  <>
   <Suspense fallback={<div>Chargement en cours</div>}>
    <Actualit/>
  </Suspense>
  </>
 )
}

export function Home() {
  const [chargement , setchargement] = useState(false)
    return (
      <>
        <header style={{display:"flex",justifyContent:"space-around",alignItems:"center",alignContent:"center"}}>
          <div style={{ display:"flex",gap:"10px",justifyContent:"space-around",alignItems:"center",alignContent:"center"}}>
          <div style={{ width: "50px", height: "auto"}}>
          <svg 
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37 32"
      fill="#ff05de"
      stroke="#ff05de"
      width="40"
      height="40"
    >
      <g>
        <path
          fill="#ff05de"
          d="M33.582,2.483c-1.776-1.56-4.077-2.418-6.481-2.418c-2.767,0-5.49,1.134-7.472,3.112l-0.781,0.778
          c-0.188,0.188-0.508,0.188-0.697,0l-1.027-1.024C15.23,1.041,12.711,0,10.032,0C7.415,0,4.938,1,3.059,2.814
          c-1.87,1.805-2.911,4.287-2.933,6.988c-0.023,2.824,1.095,5.573,3.067,7.541l14.252,14.22C17.728,31.845,18.103,32,18.5,32
          s0.772-0.155,1.055-0.437L34.061,17.09c1.952-1.948,3.021-4.645,2.934-7.399C36.906,6.897,35.693,4.338,33.582,2.483z
          M33.355,16.382L18.849,30.855c-0.188,0.188-0.51,0.188-0.697,0L3.899,16.635c-1.784-1.779-2.794-4.267-2.773-6.824
          c0.02-2.431,0.953-4.66,2.627-6.277C5.445,1.9,7.675,1,10.032,1c2.413,0,4.681,0.938,6.387,2.64l1.026,1.024
          c0.565,0.564,1.545,0.564,2.11,0l0.78-0.778c1.796-1.792,4.263-2.82,6.766-2.82c2.161,0,4.228,0.77,5.821,2.169
          c1.902,1.67,2.993,3.974,3.073,6.488C36.075,12.238,35.138,14.603,33.355,16.382z"
        />
      </g>
    </svg>
</div>
<h2 style = {{color:"#ff05de"}}>La féminité</h2>

          </div>
  
          <div>
            <ul style={{display:"flex",gap:"20px",listStyle:"none",alignItems:"center",alignContent:"center"}}>
              <li><a href="#qui_somme_nous">Qui sommes nous ?</a></li>
              <li><a href="#aide">Nous soutenir</a></li>
              <li><a href="#actualite">Nos actualités</a></li>
              <li><button>Espace bénévolats</button></li>
            </ul>
          </div>
        </header>
        {/* debut */}
        <section id='qui_somme_nous' style={{display:"flex",justifyContent:"space-around",alignItems:"center",alignContent:"center",padding:"30px 0"}}>
        <motion.div
            initial={{x:-150,opacity:0}}
            viewport={{amount:0.8}}
            whileInView={{x:0,opacity:1}}
            transition={{type:'spring',duration:0.6}}
            style={{width:"40%"}}
            >
                <h1 style={{fontSize:50}}>Humilité, dignité , partage</h1>
                <p style={{fontSize:20}}>Aidons les femmes les plus démunies à conserver un peu leurs féminités</p>
                <button onClick={()=>setchargement(true)}>Faire un don</button>
                {chargement && charge_page_dom()}
            </motion.div>
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: 20,
        width:500,
        height:400,
        marginBottom: -120,
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
          background: `linear-gradient(306deg, #FF05B4, hsl(10, 100%, 50%))`,
        }}
      />
      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 50,
            rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            },
          },
        }}
        style={{
          width: 300,
          height: 430,
          borderRadius: 20,
          background: "#f5f5f5",
          boxShadow:
            "0 0 1px rgba(0,0,0,0.075), 0 0 2px rgba(0,0,0,0.075), 0 0 4px rgba(0,0,0,0.075), 0 0 8px rgba(0,0,0,0.075), 0 0 16px rgba(0,0,0,0.075)",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* IMAGE INSIDE THE CARD */}
       
          <img
            src="src/assets/feminin-removebg-preview.png"
            alt="feminin"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
      </motion.div>
    </motion.div>

{/* image pour les reseau sosial */}
            <motion.div
            initial={{x:-50,opacity:0}}
            viewport={{amount:0.8}}
            whileInView={{x:0,opacity:1}}
            transition={{type:'spring',duration:0.6}}
            style={{display:"flex",flexDirection:"column",gap:"10px",position:'absolute',right:0}}>
            <div className="reseau">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="#ffffff"
    stroke="#ffffff"
    width="25"
    height="20"
  >
    <path d="M19 6h5V0h-5c-5.5 0-9 3.5-9 9v3H5v6h5v14h6V18h5l1-6h-6v-3c0-1.5.5-3 3-3z"/>
  </svg>
</div>
<div  className="reseau">
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#FF05B4"   width="25"
    height="25">
  <path 
    d="M43.1124,14.394a5.0056,5.0056,0,0,0-3.5332-3.5332c-2.3145-.8936-24.7326-1.3314-31.2358.0256A5.0059,5.0059,0,0,0,4.81,14.42c-1.0446,4.583-1.1239,14.4914.0256,19.1767A5.006,5.006,0,0,0,8.369,37.13c4.5829,1.0548,26.3712,1.2033,31.2358,0a5.0057,5.0057,0,0,0,3.5332-3.5333C44.2518,28.6037,44.3311,19.31,43.1124,14.394Z" 
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path 
    d="M30.5669,23.9952,20.1208,18.004V29.9863Z" 
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
</div>
<div className="reseau">
<svg viewBox="0 -0.5 25 25"   width="25"
    height="25" fill="#ffffff"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#FF05B4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#FF05B4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#ffffff"></rect> <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#FF05B4" stroke-linecap="round"></rect> </g></svg>
</div>
</motion.div>

        </section>
        <section id="demarche">
            <motion.div
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true, amount:0.8}}
            transition={{duration:1,type:"spring"}}
            >
                <h1>Notre démarche</h1>
                <p>Fémininité sans abri lutte contre la précarité, e, constante augmentation en distribuants des kits hygiène au personnes les plus démunies</p>
            </motion.div>
<section>
< Demarche />
</section>
{/* section pour les décomptes */}
<section id="compte">
< Compte />
</section>
{/* section pour les actualité */}
<section>
<Actualite/>
</section>
{/* section pour les Aides */}
<div style={{backgroundColor: "#f8eaf4"}}>
<section>
  <CommentNousAider />
</section>
<section>
  <Footer />
</section>
</div>

{/* Pied de la page  */}
        </section>

      </>
    );
  }
  