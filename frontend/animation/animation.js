export const scaleAnimation = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: custom => ({
        scale: 1,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

export const leftAnimation = {
    hidden: {
        x: -150,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

export const rightAnimation = {
    hidden: {
        x: 150,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

export const topAnimation = {
    hidden: {
        y: -150,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

export const bottomAnimation = {
    hidden: {
        y: 150,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}