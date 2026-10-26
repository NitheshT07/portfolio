import {useState,useEffect,useRef} from "react";
import emailjs from "@emailjs/browser";
import {ME,EJS,PROJ,ACH,IC,LG} from "./data";
import "./index.css";

const Row=({l,r})=><div className="mq"><div className={"mt"+(r?" r":"")}>{[...l,...l].map(([n,d],i)=><div className="ic" key={i}><i><img src={d} alt={n+" logo"}/></i>{n}</div>)}</div></div>;
function useIn(){const r=useRef();useEffect(()=>{const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.15});o.observe(r.current);return()=>o.disconnect()},[]);return r}
const Rv=({children,className="",...p})=>{const r=useIn();return <div ref={r} className={"rv "+className} {...p}>{children}</div>};
const tilt=e=>{const b=e.currentTarget,r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg) translateZ(0)`};
const untilt=e=>e.currentTarget.style.transform="";
function Count({to}){const r=useRef();const[v,sv]=useState(0);useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect();let t0;const f=t=>{t0=t0||t;const p=Math.min((t-t0)/1200,1);sv(Math.round(to*p));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)});o.observe(r.current);return()=>o.disconnect()},[]);return <span ref={r}>{v}</span>}
function Type({words}){const[t,s]=useState("");const i=useRef({w:0,c:0,d:false});useEffect(()=>{const id=setInterval(()=>{const k=i.current,w=words[k.w];k.c+=k.d?-1:1;s(w.slice(0,k.c));if(!k.d&&k.c===w.length)k.d=true;else if(k.d&&k.c===0){k.d=false;k.w=(k.w+1)%words.length}},75);return()=>clearInterval(id)},[]);return <span className="cur">{t}</span>}
function Shot({p}){const[a,b]=p.c;return <svg className="shot" viewBox="0 0 320 180"><rect width="320" height="180" rx="10" fill={b}/><rect x="0" y="0" width="320" height="22" fill="#0004"/><circle cx="12" cy="11" r="3" fill="#f87171"/><circle cx="24" cy="11" r="3" fill="#facc15"/><circle cx="36" cy="11" r="3" fill={a}/>
{p.k===0&&<g><rect x="12" y="32" width="64" height="136" rx="6" fill="#0005"/>{[0,1,2,3,4].map(i=><rect key={i} x="20" y={42+i*22} width="48" height="12" rx="4" fill={a} opacity={i?.35:.9}/>)}<rect x="88" y="32" width="220" height="40" rx="6" fill="#0005"/>{[0,1,2].map(i=><rect key={i} x={88+i*76} y="82" width="68" height="34" rx="6" fill={a} opacity=".5"/>)}<rect x="88" y="126" width="220" height="42" rx="6" fill="#0005"/><path d="M96 160 L130 140 L170 150 L220 134 L300 142" stroke={a} strokeWidth="3" fill="none"/></g>}
{p.k===1&&<g><rect x="12" y="32" width="296" height="136" rx="8" fill="#0005"/>{[[60,80],[130,110],[210,70],[250,130],[100,145]].map(([x,y],i)=><g key={i}><circle cx={x+12} cy={y} r="14" fill={a} opacity=".25"/><circle cx={x+12} cy={y} r="5" fill={a}/></g>)}<rect x="22" y="40" width="110" height="20" rx="6" fill={a} opacity=".85"/></g>}
{p.k===2&&<g>{[0,1,2].map(i=><rect key={i} x={12+i*100} y="32" width="92" height="38" rx="8" fill={a} opacity={.35+i*.2}/>)}<rect x="12" y="80" width="190" height="88" rx="8" fill="#0005"/>{[0,1,2,3,4,5,6].map(i=><rect key={i} x={22+i*25} y={160-20-i*i*1.6-i*4} width="16" height={20+i*i*1.6+i*4} rx="3" fill={a}/>)}<rect x="212" y="80" width="96" height="88" rx="8" fill="#0005"/><circle cx="260" cy="124" r="28" fill="none" stroke={a} strokeWidth="10" strokeDasharray="110 70"/></g>}
{p.k===3&&<g><rect x="12" y="32" width="296" height="30" rx="6" fill="#0005"/>{[0,1,2].map(i=><g key={i}><rect x={12+i*100} y="72" width="92" height="96" rx="8" fill="#0005"/><circle cx={58+i*100} cy="104" r="22" fill={a} opacity={.9-i*.2}/><rect x={24+i*100} y="140" width="68" height="8" rx="3" fill={a} opacity=".6"/><rect x={24+i*100} y="154" width="40" height="6" rx="3" fill={a} opacity=".35"/></g>)}</g>}
{p.k===4&&<g><rect x="12" y="32" width="296" height="52" rx="8" fill={a} opacity=".35"/><rect x="24" y="44" width="120" height="10" rx="3" fill={a}/><rect x="24" y="62" width="80" height="8" rx="3" fill={a} opacity=".6"/>{[0,1,2,3].map(i=><g key={i}><rect x={12+i*75} y="96" width="68" height="72" rx="8" fill="#0005"/><rect x={18+i*75} y="102" width="56" height="30" rx="5" fill={a} opacity={.35+i*.15}/><rect x={18+i*75} y="140" width="44" height="6" rx="3" fill={a}/></g>)}</g>}
{p.k===5&&<g><path d="M0 60 L320 30 L320 90 L0 120Z" fill={a} opacity=".3"/><rect x="24" y="52" width="150" height="16" rx="3" fill={a}/><rect x="24" y="76" width="110" height="10" rx="3" fill={a} opacity=".6"/><rect x="200" y="62" width="14" height="40" rx="3" fill={a}/><rect x="214" y="76" width="60" height="12" rx="3" fill={a}/><rect x="274" y="62" width="14" height="40" rx="3" fill={a}/>{[0,1,2].map(i=><rect key={i} x={12+i*100} y="130" width="92" height="38" rx="8" fill="#0005"/>)}</g>}</svg>}

function Contact(){const[f,sf]=useState({name:"",email:"",msg:""});const[st,ss]=useState("");
const send = async e => {
  e.preventDefault();
  ss("Sending…");
  try {
    if (!EJS.service || !EJS.template || !EJS.key) throw new Error("EmailJS keys are empty in src/data.js");
    await emailjs.send(
      EJS.service,
      EJS.template,
      { from_name: f.name, reply_to: f.email, message: f.msg },
      { publicKey: EJS.key }
    );
    ss("Message sent. I will reply soon.");
    sf({ name: "", email: "", msg: "" });
  } catch (err) {
    console.error("EmailJS error:", err);
    ss("Could not send: " + (err?.text || err?.message || "unknown error"));
  }
};
return <div className="grid"><Rv><h3 style={{marginBottom:14}}>Let's build something</h3><p style={{color:"var(--mut)"}}>Open to Software Developer roles. Send a message and I will reply by email or phone.</p><div className="ct" style={{marginTop:18}}>
 {[[LG.mail,"Email: "+ME.email,"mailto:"+ME.email],[LG.phone,"Call: +91 63793 41112","tel:"+ME.phone],[LG.wa,"WhatsApp chat","https://wa.me/"+ME.wa],[LG.li,"LinkedIn","https://www.linkedin.com/in/nithesh-thangavel-447a7327a"],[LG.gh,"GitHub",ME.gh]].map(([i,t,l])=><a className="cl" key={t} href={l} target={l.startsWith("http")?"_blank":undefined} rel="noopener"><img src={i} alt={t+" logo"}/>{t}</a>)}</div></Rv>
 <Rv><form onSubmit={send}><input required placeholder="Your name" value={f.name} onChange={e=>sf({...f,name:e.target.value})}/><input required type="email" placeholder="Your email" value={f.email} onChange={e=>sf({...f,email:e.target.value})}/><textarea required rows="5" placeholder="How can I help?" value={f.msg} onChange={e=>sf({...f,msg:e.target.value})}/><button className="btn p">Send message</button><small style={{color:"var(--acc2)"}}>{st}</small></form></Rv></div>}

function App(){const[m,sm]=useState({x:0,y:0});const[act,sa]=useState("home");const nv=useRef();
 useEffect(()=>{const ids=["home","about","skills","experience","projects","achievements","contact"];const h=()=>{let c="home";const y=innerHeight*.35;ids.forEach(id=>{const e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<=y)c=id});if(innerHeight+scrollY>=document.documentElement.scrollHeight-4)c="contact";sa(c);const pg=document.getElementById("pg"),tp=document.getElementById("top");if(pg)pg.style.width=(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+"%";if(tp){tp.style.opacity=scrollY>600?1:0;tp.style.pointerEvents=scrollY>600?"auto":"none"}};h();addEventListener("scroll",h,{passive:true});return()=>removeEventListener("scroll",h)},[]);
 useEffect(()=>{const d=nv.current,a=d&&d.querySelector(".on");if(a)d.scrollTo({left:a.offsetLeft-d.clientWidth/2+a.clientWidth/2,behavior:"smooth"})},[act]);
 useEffect(()=>{const h=e=>sm({x:e.clientX/innerWidth-.5,y:e.clientY/innerHeight-.5});addEventListener("mousemove",h);return()=>removeEventListener("mousemove",h)},[]);
 return <>
 <div className="orb" style={{width:420,height:420,background:"#2dd4bf",top:"5%",left:"-8%",transform:`translate(${m.x*60}px,${m.y*60}px)`}}/>
 <div className="orb" style={{width:360,height:360,background:"#a3e635",bottom:"5%",right:"-6%",transform:`translate(${-m.x*80}px,${-m.y*80}px)`}}/>
 <div id="pg" className="pg"/>
 <nav><b>NT</b><div ref={nv}>{["Home","About","Skills","Experience","Projects","Achievements","Contact"].map(s=><a key={s} href={"#"+s.toLowerCase()} className={act===s.toLowerCase()?"on":""}>{s}</a>)}</div></nav>
 <section className="hero" id="home"><div><span className="live">Open to Software Developer roles</span><p style={{color:"var(--mut)"}}>Hi, I am</p><h1>Nithesh<span>Thangavel</span></h1>
 <div className="role"><Type words={["Full Stack Developer","MERN Stack Engineer","React.js Builder","Problem Solver"]}/></div>
 <p style={{color:"var(--mut)",maxWidth:480}}>I build role-based dashboards, secure JWT authentication and REST APIs that connect clean interfaces to reliable data.</p>
 <div className="btns"><a className="btn p" href="#projects">View projects</a><a className="btn" href={ME.resume} download>Download resume</a><a className="btn" href="#contact">Contact me</a></div><div className="soc">{[[LG.li,"LinkedIn",ME.li],[LG.gh,"GitHub",ME.gh],[LG.mail,"Email","mailto:"+ME.email],[LG.wa,"WhatsApp","https://wa.me/"+ME.wa]].map(([i,t,l])=><a key={t} href={l} target={l.startsWith("http")?"_blank":undefined} rel="noopener" aria-label={t}><img src={i} alt={t}/></a>)}</div></div>
 <div className="photo"><div className="pc" onMouseMove={tilt} onMouseLeave={untilt} style={{transform:`translate(${m.x*-10}px,${m.y*-10}px)`}}>{ME.photo?<img src={ME.photo} alt="Nithesh Thangavel"/>:<svg width="55%" viewBox="0 0 100 100"><circle cx="50" cy="36" r="18" fill="#2dd4bf" opacity=".6"/><path d="M12 96c0-26 17-38 38-38s38 12 38 38z" fill="#2dd4bf" opacity=".6"/></svg>}<em>{ME.photo?"":"Add your photo in ME.photo"}</em></div></div></section>

 <section id="about"><Rv><h2>About</h2><p style={{maxWidth:680,color:"var(--mut)"}}>Computer Science graduate (B.E., K S Rangasamy College of Technology, CGPA 7.96) with two internships and six projects, including three full-stack applications. Strong in Data Structures and Algorithms, OOP and DBMS, and focused on shipping clean MERN applications.</p>
 <div className="stats">{[[2,"","Internships"],[6,"","Projects built"],[12,"K+","Lines of code"],[4,"","Awards"]].map(([a,s,b])=><div key={b}><b><Count to={a}/>{s}</b>{b}</div>)}</div></Rv></section>

 <section id="skills"><h2>Skills</h2><Rv><Row l={IC.slice(0,10)}/><Row l={IC.slice(10)} r/></Rv>
 <Rv style={{marginTop:22}}><p style={{color:"var(--mut)"}}>Soft skills: logical thinking, problem solving, team collaboration and communication.</p></Rv></section>

 <section id="experience"><h2>Experience</h2><div className="tl">
 <Rv><small>Oct 2025 – Nov 2025</small><h3>Full Stack Developer Intern</h3><p>CubeAISolutions Tech Pvt. Ltd.</p><ul><li>Built and maintained MERN applications with modular architecture and JWT authentication.</li><li>Developed responsive React.js interfaces and integrated REST APIs across Node.js, Express.js and MongoDB.</li><li>Implemented file upload/download, cloud storage and notification services.</li></ul></Rv>
 <Rv><small>Jan 2025 – Feb 2025</small><h3>Web Developer Intern</h3><p>Statix.pro</p><ul><li>Developed and maintained an official college departmental website with HTML, CSS, JavaScript and Bootstrap.</li><li>Built and updated responsive pages across a 12K+ line codebase.</li><li>Improved responsiveness and cross-device compatibility.</li></ul></Rv></div></section>

 <section id="projects"><h2>Projects</h2><div className="grid">{PROJ.map(p=><Rv key={p.n+(p.b||"")} className="card" onMouseMove={tilt} onMouseLeave={untilt}>{p.img?<img className="shot" src={p.img} alt={p.n}/>:<Shot p={p}/>}{p.b&&<span className="badge">{p.b}</span>}<h3>{p.n}</h3><p>{p.d}</p><div>{p.t.map(x=><span className="tag" key={x}>{x}</span>)}</div><div className="btns">{p.live&&<a className="btn p" href={p.live} target="_blank" rel="noopener">Live demo</a>}<a className="btn" href={p.gh} target="_blank" rel="noopener">Code on GitHub</a></div></Rv>)}</div></section>

 <section id="achievements"><h2>Achievements and certifications</h2><div className="grid">{ACH.map(([a,b,c])=><Rv key={a+b} className="card" onMouseMove={tilt} onMouseLeave={untilt}><small style={{color:"var(--acc2)"}}>{c}</small><h3>{a}</h3><p>{b}</p></Rv>)}
 <Rv className="card"><small style={{color:"var(--acc2)"}}>Mar 2026</small><h3>Oracle Certified Foundations Associate</h3><p>Oracle</p></Rv><Rv className="card"><small style={{color:"var(--acc2)"}}>Jun 2025</small><h3>AI-ML Virtual Internship</h3><p>AICTE–EduSkills</p></Rv></div></section>

 <section id="contact"><h2>Contact</h2><Contact/></section>
 <footer>© 2026 Nithesh Thangavel · Built with React</footer><a id="top" className="topb" href="#home" aria-label="Back to top">↑</a></>}
export default App;
