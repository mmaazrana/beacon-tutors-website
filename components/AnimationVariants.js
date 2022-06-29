const opacityVariants = {
    hidden: {opacity: 0}, enter: {opacity: 1}, exit: {opacity: 0},
}
const scaleVariants = {
    hidden: {transform: 'scale(0)'}, enter: {transform: 'scale(1)'}, exit: {transform: 'scale(0)'},
}
const scaleXVariants = {
    hidden: {transform: 'scaleX(0)'}, enter: {transform: 'scaleX(1)'}, exit: {transform: 'scaleX(0)'},
}
const scaleXLeftVariants = {
    hidden: {transform: 'scaleX(0)', transformOrigin: 'left center',},
    enter: {transform: 'scaleX(1)'},
    exit: {transform: 'scaleX(0)'},
}
const scaleXRightVariants = {
    hidden: {transform: 'scaleX(0)', transformOrigin: 'right center',},
    enter: {transform: 'scaleX(1)'},
    exit: {transform: 'scaleX(0)'},
}
const scaleYVariants = {
    hidden: {transform: 'scaleY(0)'}, enter: {transform: 'scaleY(1)'}, exit: {transform: 'scaleY(0)'},
}

const customTransition = (time,delay=0)=>{return {
    transition: time,
    delay: delay,
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-in-out',
}}

export {
    opacityVariants, scaleYVariants, scaleXVariants, scaleVariants, scaleXRightVariants, scaleXLeftVariants,customTransition
}