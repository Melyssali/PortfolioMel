import React, { useEffect, useState } from 'react';
import './index.scss';
import logoSolid from '../../../assets/images/mel/newlogo/ombrepartout.png';
import anime from "animejs/lib/anime.es.js"
// import gsap from 'gsap'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'


const Logo = () => {
    const [showIMG, setShowIMG] = useState(false);
    const [showSVG, setShowSVG] = useState(true);

    let animation = () => {
        return (
            anime({
                targets: "svg path",
                strokeDashoffset: [anime.setDashoffset, 0],
                duration: 2000,
                easing: 'easeInOutSine',
                delay: function (el, i) {
                    return i * 20;
                }

            }))
            ;
    }

    useEffect(() => {
        animation();

        setTimeout(() => {
            setShowIMG(true);
            setShowSVG(false);

        }, 3000)
    }, [])


    // const bgRef = useRef()
    // const outlineLogoRef = useRef()
    // const solidLogoRef = useRef()

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin);

    //     gsap.timeline()
    //         .to(bgRef.current, {
    //             duration: 1,
    //             opacity: 1
    //         })
    //         .from(outlineLogoRef.current, {
    //             drawSVG: 0,
    //             duration: 20
    //         })
    //     gsap.fromTo(
    //         solidLogoRef.current,
    //         {
    //             opacity: 0,
    //         },
    //         {
    //             opacity: 1,
    //             delay: 4,
    //             duration: 4,
    //         }
    //     )
    // }, [])

    // className={showIMG ? 'fadein-logo' : 'solid-logo'}
    return (
        <div className="logo-container">
            <img className={showIMG ? 'solid-logo' : 'logopacity'} src={logoSolid} alt="M" />



            {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 573.51 478.91">
                {/* <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                /> */}
            {/* <path className="st0" d="M277.68,313.97c-1.26-1.57-2.36-3.24-3.27-4.99-.08-.01-.15-.03-.23-.05,.7,1.87,1.45,3.73,2.2,5.58,.43-.19,.86-.37,1.29-.55h0Z" fill="#fff" stroke="#414042" strokeMiterlimit="10" />
                <path className="st0" d="M86.08,385.75v-4.35c-1.11,.05-2.21,.1-3.32,.14v4.21c0,56.84-37.15,90.27-82.26,90.27v2.39H167.68v-2.39c-45.11,0-81.6-33.43-81.6-90.27h0Z" fill="#fff" stroke="#414042" strokeMiterlimit="10" />
                <path className="st0" d="M179.13,205.79c1.37,.39,2.75,.74,4.13,1.03,2.32,.09,4.64,.06,6.96-.08,12.45-2.21,24.49-6.48,36.82-9.18,.85-.78,1.69-1.57,2.51-2.38,.9-1.27,1.75-2.57,2.56-3.9,6.28-10.27,18.12-15.15,29.99-14.61L172.98,.5H18.41V3.91c25.21,0,46.44,19.8,64.35,45.06V179.5c1.09-.21,9.81-2.29,10.93-2.39V55.11c5.49,8.15,35.29,76.23,74.13,149.66,3.81-.33,7.65-.03,11.31,1.02h0Z" fill="#fff" stroke="#414042" strokeMiterlimit="10" />
                <path className="st0" d="M573.01,3.92h0c0-1.89-1.53-3.41-3.41-3.41h-141.21l-101.83,254.6c.2,.68,.39,1.37,.58,2.05,.44,.06,7.11,2.87,7.55,2.95L427.69,34.11l.7,365.78c-.66,50.52-3.98,75.1-41.79,75.1v3.41h186.41v-3.41c-37.81,0-41.79-24.58-41.79-75.1V79.02c0-49.84,3.98-75.1,41.79-75.1Z" fill="#fff" stroke="#414042" strokeMiterlimit="10" />
            </svg> */}



            <svg className={showSVG ? 'svgstyle' : 'svgopacity'} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 573.51 554">
                <path d="M86.08,460.84v-4.35c-1.11,.05-2.21,.1-3.32,.14v4.21c0,56.84-37.15,90.27-82.26,90.27v2.39H167.68v-2.39c-45.11,0-81.6-33.43-81.6-90.27h0Z" fill="#fff" stroke="#a8a8a7" strokeMiterlimit="10" />
                <path d="M93.17,207.22c.17-.06,.35-.11,.52-.15v-25.72c-2.93-.07-5.91-.47-8.75,.42-.78,.25-1.51,.29-2.18,.18v30.84" fill="#fff" stroke="#a8a8a7" strokeMiterlimit="10" />
                <path d="M260.05,249.02L170.93,72.85H16.36v3.41c25.21,0,46.44,19.8,64.35,45.06v40.02c.24,.07,.49,.15,.73,.23,.16,.02,.33,.03,.49,.05,1.97,.13,3.94,.35,5.91,.53,1-.02,1.98,.02,2.95,.1,.16-.03,.32-.06,.49-.09,.12-.02,.24-.02,.35-.04v-34.66c2.05,3.05,7.65,16.54,15.69,33.48" fill="#fff" stroke="#a8a8a7" strokeMiterlimit="10" />
                <path d="M203.04,261.9c.98-.62,1.95-.84,2.84-.78,1.33-.59,2.67-1.16,4.02-1.67" fill="#fff" stroke="#a8a8a7" strokeMiterlimit="10" />
                <path d="M135.63,216.51s.01-.06,.02-.09" fill="#fff" stroke="#a8a8a7" strokeMiterlimit="10" />
                <path d="M531.22,474.98V154.11c0-49.84,3.98-75.1,41.79-75.1,0-1.89-1.53-3.41-3.41-3.41h-141.21l-94.19,235.5c3.89-3.8,8.54-7.11,12.78-10.38,.78-.6,1.56-.9,2.3-.98l78.41-190.55,.7,365.78c-.66,50.52-3.98,75.1-41.79,75.1v3.41h186.41v-3.41c-37.81,0-41.79-24.58-41.79-75.1Z" fill="#fff" stroke="#a8a8a7" strokeMiterlimit="10" />
                <path d="M125.67,108.38c.81-23.51-20.87-36.96-41.94-43.38" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M125.66,108.39c-1.31,13.35-11.1,25.39-23.27,34.38-1.7,1.04-3.6,2.2-6.08,3.85h.01" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M110.69,7.73c-16.87,10.13-31.77,32.03-31.43,50.79,.08-.08-.1,.37-.02,.29,.32,4.05,1.19,4.76,4.49,6.19" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M147.12,49.49c-6.21,15.74,10.42,27.21,24.59,24.72,13-2.28,22.91-12.83,25.2-25.68,4.33-24.27-18.8-40.04-39.35-45.58C141.69-1.33,125.3-.16,110.69,7.73" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M346.35,499.53c-.14,.4-.27,.79-.41,1.19" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M346.11,500.26c-1.94-5.8-3.42-11.73-4.51-17.74,1.16,5.91,2.7,11.74,4.61,17.44-.03,.1-.07,.2-.1,.3Z" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M373.71,364.34h0c-27.8,34.41-39.36,78.06-32.11,118.18" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M303.3,451.3c5.51,1.62,10.54,4.32,14.55,8.28h0c1.61,1.73,2.99,3.86,4.4,6.15" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M288.58,449.48h0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M233.09,438.81c9.05,4.17,17.68,6.64,25.35,7.3,6.28,.75,12.46,1.66,18.44,2.84,10.34-1.58,19.05-.56,26.42,2.35" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M166.21,456.64v.02" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M171.84,468.81c3.04-4.51,8.81-4.68,13.44-6.37,3.59-1.16,6.9-3.08,9.43-5.53,.76-1.4,1.64-2.21,1.64-2.21-11.5-12.18-33.78-8.39-39.13-26.23" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M191.82,49.9c-.37,.28-1.44,7.46-4.05,11.27" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M340.95,520.75c-9.44-26.14-18.1-64.88-55.37-62.36h0c-5.97-.96-12.38-1.98-18.89-2.38-3.06-.19-6.15-.24-9.24-.16" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M257.45,455.85c-3.48,.11-6.97,.36-10.43,.77,3.47-.44,6.96-.68,10.43-.77Z" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M132.29,213.11c-2.25,8.07-7.52,20.47-17.04,24.78,6.72-14.5,11.3-28.28,20.21-41.55,0,0-.01,.01-.02,.02" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M169.83,211.67c-9.13-3.42-25.66,19.48-13.4,33.58,.97,1.12,1.47,2.57,2.26,3.82,1.64,2.39,3.59,4.6,5.86,6.55" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M171.66,260.7c1.67,.74,3.37,1.44,5.09,2.06,3.79,1.15,7.75,1.59,11.8,1.48-3.62,.03-7.33-.43-11.15-1.59-5.02-1.55-9.32-3.98-12.86-7.03,.38,.38,.75,.76,1.14,1.12,1.92,1.61,3.92,2.91,5.97,3.96Z" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M196.65,263.37c-2.73,.48-5.43,.79-8.09,.86,2.74-.03,5.43-.34,8.09-.86Z" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M196.65,263.37c2.07-.36,4.15-.84,6.24-1.39,.05-.03,.1-.06,.15-.09,.26-.16,.52-.29,.77-.4-2.37,.76-4.75,1.4-7.16,1.88Z" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M204.67,261.21c.41-.09,.82-.12,1.21-.09,1.33-.59,2.67-1.16,4.02-1.67,4.18-1.59,8.79-3.34,13.52-4.6" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M407.55,318.76c5.29,2.28,17.34,7.64,21.15,11.45h-.01c.19,.03,.38,.06,.57,.08" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M189.72,210.63c-5.58-12.14-21.43-36.62-40.29-25.43" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M210.68,199.57c5.22,18.86-16.38,25.01-20.96,11.06" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M429.48,330.31c-.54-.07-1.08-.15-1.63-.2" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M150.59,123.83c-.25,.32-.51,.65-.77,.97,.12-.09,.23-.17,.35-.26,.3-.41,.62-.81,.92-1.22,3.08-3.85,6.04-5.53,9.01-6.83,8.71-.64,18.29-.76,24.85,3.05,2.92,1.69,5.23,4.17,6.61,7.72,1.47,2.16,2.85,4.37,4.18,6.61,1.47,2.03,2.91,4.09,4.22,6.28,.57,.95,.78,1.88,.74,2.75,1.4,2.7,2.74,5.42,4.07,8.14,.34,.61,.65,1.22,.91,1.86,1.91,3.92,2.38,7.17,4.36,10.99" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M206.01,152.14h-.02" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M276.33,283.97c-7.27-11.53,4.38-28.32-5.52-37.42-5.36-4.92-12.64,3.67-19.16,7.5" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M243.93,253.37c.89,.44,5.32,1.87,6.2,1.49,.5-.23,1.01-.51,1.52-.81" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M423.07,321.98c-9.4-6.4-15.71-13.5-9.09-17.7,1.23-1.27,2.67-2.4,2.55-3.7" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M421.78,321.18c3.26,1.96,6.39,4.28,9.21,6.98,.65,.88,1.27,1.8,1.88,2.72-.65-.13-1.31-.27-1.97-.38l-1.64-.21" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M130.22,203.39h-.01" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M416.43,300.59c3.4-3.47-18.43-12.78-28.38-13.05" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M314.87,327.46c-1.46,.06-18.18,.49-28.49-13.26-7.5-10.01-15.67-18.71-10.05-30.23" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M94.42,40.15c9.52-21.59,45.95-34.24,65.8-29.02,1.26,.18,2.51,.4,3.76,.65" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M210.04,163.89c.21,.6,.4,1.22,.58,1.84,1.32,4.31,2.32,8.75,2.27,13.34-.02,.47-2.3,20.16-2.21,20.49" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M92.76,43.8c.4-.61,.98-2,1.66-3.65" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M88.48,97.78c-2.07-1.97-5.16-3.5-9.15-4.67h0c-29.68-2.81-43.53,28.14-44.28,50.09" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M61.01,180.12c-21.91-8.06-28.32-29.83-25.31-42.16h0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M108.46,191.88s1.75-3.93,1.78-3.93c.78-1.61,1.63-3.18,2.56-4.69-1.19-1.19-5.51-1.85-8.08-1.78" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M98.11,180.84c-.31,.16-.63,.3-.98,.4-.44,.06-.89,.12-1.33,.18-.35,.01-.69-.02-1.02-.1-.25,.03-.5,.04-.77,.04-.76-.01-1.53-.05-2.29-.08-8.24,1.06-16.44,3.64-24.26,2.19-1.99-.89-4.1-2.4-6.44-3.35h0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M136.76,287.49c-3.44-5.51-4.05-12.54-7.24-18.71-.99,3.94-2.17,4.34-1.83,8.53" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M79.21,122.3c10.5-8.14,17.86-24.02,2.22-28.71-.69-.28-1.34-.36-2.1-.48" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M83.8,260.76c-3.34-4.51-10.65-20.24-9.11-22.05l2.42-12.78c-3.94-1.22,25.3-32.55,31.35-34.06" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M101.25,181.57c-1.09-.16-2.29-.4-3.66-.49-.15,.06-.3,.11-.45,.16-.06,0-.11,.01-.17,.02" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M104.72,181.48c-1.21,.12-2.34,.14-3.48,.09" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M247.25,416.52c-.93,3.62-11.55,14.56-14.85,6.42-2.64,.75-10.61,5.26-10.59,5.38h0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M176.74,474c16.44,4.15,37.85-4.26,47.86-16.49,1.68-1.19,3.18-1.73,4.58-1.95" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M171.83,468.82c.14,2.87,3.23,3.88,4.91,5.18" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M364.28,376.11h-.01" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M373.71,364.34c10.25-7.93,22.72-49.05,33.84-45.58,1.04-.04-1.02,0,0,0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M388.05,287.54c-5.15-1.98-33.75,6.76-38.41,12.19" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M336.52,308.96c3.35-2.93,7.03-5.6,10.46-8.24,.01,0,.02-.01,.03-.02" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M344.93,302.19c.12-.06,.24-.12,.36-.18,.57-.43,1.14-.86,1.69-1.29,1.03-.79,2.06-1.06,3-.97" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M314.87,327.46c.43-.09,10.7-5.21,11.11-5.39,.12-.18,.23-.36,.37-.54,.88-1.1,1.79-2.17,2.71-3.22,1.79-3.49,4.43-6.55,7.45-9.35" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M266.74,330.9s.01,0,.02,.01" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M127.63,281.67l-10.32-.25c-12.77-4.84-24.49-10.75-33.51-20.66" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M71.19,157c13.1,15.27,39.88,4.29,55.5-4.01,0,0-.88,.81-1.5,.67" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M191.82,49.9c2.26-9.79-1.25-19.41-7.19-26.98-1.44-1.67-7.12-5.95-9.3-7.39h0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M169.83,211.67c1.07-10.52-25.13-23.56-31.17-10.49" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M127.63,281.67h-.01" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M127.63,281.66h-.01" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M127.22,281.66c.38-.14,.89-1.53,.47-4.35" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M296.59,410.67h0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M47.42,116.76h.01" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M54.94,109.71c4.4-4.05,14.02-11.38,19.74-4.51,2.48,2.27-.16,4.7,.61,7.03" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M157.4,349.38c-4.07-5.36-5.56-11.58-7.1-17.94-.33-1.04-.71-2.21-1.37-3.08h-.01" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M157.4,349.38c1.99,1.68,4.17,3.96,6.33,5.9" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M163.73,355.28c1.94,1.76,7.54,6.85,9.35,8.5-1.87-1.72-3.74-3.44-5.62-5.17-.01,0-3.72-3.33-3.73-3.33Z" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M173.19,363.37h0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M90.05,266.67h0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M190.88,415.72c3.46-1.67,5.22-3.29,7.86-5.72l-.88,.81c7.92-7.28,10.83-17.55,10.54-28.1" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M244.99,397.39c-19.94,4.7-26.38,26.64-44.1,24.29" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M274.36,413.87c-4.99,.43-22.22,2.44-27.11,2.65h.01" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M208.16,382.6c1.62-.62-.06-12.35-4.58-16.8-1.08-.91-2.89-2.36-2.77-2.01" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M175.4,345.86c-1.26-.37-2.55-.64-3.82-.98" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M333.44,384.78c-.12,.21-.24,.43-.37,.65,.43-.11,.86-.25,1.29-.42,.53-.88,1.08-1.75,1.64-2.61-.52,.26-1.05,.47-1.59,.63-.32,.58-.64,1.16-.97,1.74Z" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M128.61,338.82h0c7.33-9.16,9.41-20.18,14.85-29.74" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M156.38,342.77h0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M138.66,201.17c-1.59,2.36-5.41,9.5-6.37,11.94,1.14-2.46,4.92-9.6,6.37-11.94Z" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M349.57,363.87c-2.34,2.84-5.9,5.41-9.32,7.95-2.24,3.96-4.11,8.15-6.34,12.12,.55-.27,1.1-.54,1.64-.84,4.3-6.71,9.32-12.94,14.31-19.18-.09-.02-.18-.03-.27-.05h-.01Z" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M202.02,364.49c-8.57-5.49-17.52-11.35-25.26-18.17-1.15-.44-2.35-.75-3.55-1.04" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M174.34,357.13h0" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
                <path d="M243.92,253.38l-20.5,1.46" fill="none" stroke="#6d6e71" strokeMiterlimit="10" />
            </svg>
        </div>
    );
}
export default Logo;
