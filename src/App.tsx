import './App.css'
import {useEffect} from "react";
import { httpURL } from './http/http';

interface projectInterface {
    id:number,
    name:string,
    desc:string,
    stack:string,
    url:string,
    image:string
}

function App() {
    const projects:projectInterface[] = [
        {
            id:1,
            name:"Проект",
            desc:"currently treated as images with the dimensions of the element, or of the background positioning area if the element is SVG, with the corresponding intrinsic proportion. This is non-standard behavior.",
            stack:"Python",
            image:"test.png",
            url:"https://youtube.com"
        },
        {
            id:2,
            name:"Проект",
            desc:"Приятно, граждане, наблюдать, как ключевые особенности структуры проекта.",
            stack:"Python",
            image:"test2.jpg",
            url:"https://youtube.com"
        },
        {
            id:3,
            name:"Проект",
            desc:"Приятно, граждане, наблюдать, как ключевые особенности структуры проекта.",
            stack:"Python",
            image:"test2.jpg",
            url:"https://youtube.com"
        },
        {
            id:4,
            name:"Проект",
            desc:"Приятно, граждане, наблюдать, как ключевые особенности структуры проекта.",
            stack:"Python",
            image:"test.png",
            url:"https://youtube.com"
        }
    ]
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(el=>{
                if(el.isIntersecting){
                    el.target.classList.add('show')
                }else{
                    el.target.classList.remove('show')
                }
            })
        })
        const hiddenObjs = document.querySelectorAll('.hidden');
        hiddenObjs.forEach(el=>observer.observe(el))
    },[])
    
  return (
    <>
        <div className="content">
            <div className="preview-block">
                <div className="decoration-block">
                    <div className="snake snake-decoration-top"></div>
                    <div className="snake snake-decoration-top-add"></div>
                    <div className="snake snake-decoration-right"></div>
                    <div className="snake snake-decoration-bottom"></div>
                    <div className="snake snake-decoration-bottom-add"></div>
                </div>
                <div className="void"></div>
                <div className="preview">
                    <div className="snake snake-content-top">
                        <div className="rel">
                            <h1 className="snake snake-text snake-text-top">Junior  Python</h1>
                            <h1 className="snake snake-text snake-text-right">Developer</h1>
                            <div className="snake snake-content-eye"></div>
                        </div>
                    </div>
                    <div className="snake snake-content-left"></div>
                    <div className="snake snake-content-left-add"></div>
                    <div className="snake snake-content-bottom"></div>
                    <div className="snake snake-content-bottom-add"></div>
                    <img className="photo" src={httpURL+"photo.webp"}></img>
                    <div className="photo-text">
                        <h1 className="name">Андрей Дремков</h1>
                        <p className="subname-text">
                            Приятно, граждане, наблюдать, как ключевые особенности структуры проекта превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
                        </p>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <p className="snake portfolio-title">Портфолио</p>
                <div className="snake snake-portfolio-top"></div>
                <div className="snake snake-portfolio-top-add"></div>
                <div className="snake snake-portfolio-bottom"></div>
                <div className="snake snake-portfolio-bottom-add"></div>
                <div className="portfolio-block hidden">
                    {projects.map((el:projectInterface)=>
                        <div key={el.id} className="project">
                            <div style={{background: `url(${httpURL}${el.image})`}} className="project-image">
                                
                            </div>
                            <div style={{background: `url(${httpURL}${el.image})`}} className="project-back-image"></div>
                            <p className="project-name">{el.name}</p>
                            <p className="project-desc">{el.desc}</p>
                            <p className="project-stack">{el.stack}</p>
                            <a href={el.url} target="_blank" className="project-github">{el.url}</a>
                        </div>
                    )}
                </div>
            </div>
            <div className="experience-contacts hidden">
                <div className="snake-decoration-yellow">
                    <div className="snake yellow snake-decoration-top"></div>
                    <div className="snake yellow snake-decoration-top-add"></div>
                    <div className="snake yellow snake-decoration-right">
                        <div className="rel">
                            <div className="snake-decoration-right-text">
                                <p className="experience-title">Опыт работы</p>
                                <p className="experience-desc">Приятно, граждане, наблюдать, как ключевые особенности структуры проекта превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
                                <p className="experience-time">Продолжительность: 1 год</p>
                            </div>
                        </div>
                    </div>
                    <div className="snake yellow snake-decoration-bottom"></div>
                    <div className="snake yellow snake-decoration-bottom-add"></div>
                </div>
                <div className="contacts">
                    <div className="snake snake-contacts">
                        <div className="rel">
                            <p className="snake-contacts-top">Контакты</p>
                            <div className="snake-contacts-bottom">
                                <p>primer999@gmail.com</p>
                                <p>+7 999 999 9999</p>
                            </div>
                        </div>
                    </div>
                    <div className="snake snake-contacts-add"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
