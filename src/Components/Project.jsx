import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from "react-icons/md";

const Project = (props) => {
    const [plxOffset, setplxOffset] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const [shouldScroll, setShouldScroll] = useState(false);
    const [imageAspectRatio, setImageAspectRatio] = useState('long');
    const imageEl = document.querySelector(`.image${props.id}`);

    const scrollHandler = () => {
        setplxOffset(((window.pageYOffset + window.innerHeight) - imageEl.offsetTop) / 6)
        if(shouldScroll) {
            requestAnimationFrame(scrollHandler)
        } 
    }

    useEffect(() => {
        if(shouldScroll) {
            requestAnimationFrame(scrollHandler)
        }
    }, [shouldScroll]);

    useEffect(() => {   
        const imageEl = document.querySelector(`.image${props.id}`);    
        const imageChild = document.querySelector(`.image-child${props.id}`)
        setImageHeight(imageChild.clientHeight)
        setContainerHeight(imageEl.clientHeight)
        let options = {
            rootMargin: '60px',
            threshold: [0, 0]
          }
          const screenSizeHandler = () => {
                  if(window.innerWidth > 1000) {
                      setImageAspectRatio('wide')
                  } else if(window.innerWidth > 600) {
                      setImageAspectRatio('mid')
                  } else {
                      setImageAspectRatio('long')
                  }
                  setImageHeight(imageChild.clientHeight)
                  setContainerHeight(imageEl.clientHeight)
          }
        window.addEventListener('resize', screenSizeHandler)
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                screenSizeHandler()
            }, 600);
        })
        let i = 0
        const heightInterval = setInterval(() => {
            if(i === 0) {
                if(window.innerWidth > 1000) {
                    setImageAspectRatio('wide')
                } else if(window.innerWidth > 600) {
                    setImageAspectRatio('mid')
                } else {
                    setImageAspectRatio('long')
                }
            }
            if(i<10) {
                i++
                setImageHeight(imageChild.clientHeight)
                setContainerHeight(imageEl.clientHeight)
            } else {
                clearInterval(heightInterval)
            }
        }, 10);
        const intersectionHandler = (entry) => {
            if(entry[0].isIntersecting === true) {
                setShouldScroll(true)
            } else if(entry[0].isIntersecting === false) {
                setShouldScroll(false)
            }
        }
          let observer = new IntersectionObserver(intersectionHandler, options); 
          observer.observe(imageEl)
    }, []);

    return (
        <div className={`${props.left ? "pr-8 sm:pr-12 md:pr-16 lg:pr-56 xl:pr-100 2xl:pr-136" : "pl-8 sm:pl-12 md:pl-16 lg:pl-56 xl:pl-100 2xl:pl-136"} mb-52 `}>
            {/* <img className={`${props.left ? "right-side-border" : "left-side-border"} object-cover h-80 sm:h-96 md:h-104 xl:h-128 w-full `} src={props.image} alt=""/> */}
            <div className={`${props.left ? "right-side-border" : "left-side-border"} image${props.id} transition-fix overflow-hidden h-80 sm:h-96 md:h-104 xl:h-116 2xl:h-124 w-full `} >
                <img className={`w-full relative image-child${props.id}`} style={{transform: `translate(0, ${plxOffset}px)`, top: `-${imageHeight - containerHeight}px`}} src={imageAspectRatio === 'long' ? props.imageLong : imageAspectRatio === 'mid' ? props.imageMid : props.imageWide} alt=""/>
            </div>
                <div className={`${props.left ? "right-side-border mr-8 sm:mr-12 md:ml-12 lg:ml-16 md:rounded-3xl" : "left-side-border ml-8 sm:ml-12 md:mr-12 lg:mr-16 md:ml-auto md:rounded-3xl "} " md:max-w-xl bg-white bg-opacity-70 bd-blur p-8 md:p-12 -mt-8 "`} >
                        <h3 className="text-3xl md:text-4xl mb-8 font-bold">{props.name}</h3>
                        <p className="pb-8">{props.body}</p>
                        <div className=" mb-2 flex flex-row items-center">
                            <MdWeb size="1.7rem" />
                            <a className="ml-2 underline" href={props.link}>Visit the site</a>
                        </div>
                        <div className="flex flex-row items-center">
                            <FaGithub size="1.7rem" />
                            <a className="underline ml-2" href={props.github}>Or check out the github repository</a>
                        </div>
                </div>
        </div>
    );
}

export default Project;
