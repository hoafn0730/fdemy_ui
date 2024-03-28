const actions = {
    OPEN_PREVIEW: 'OPEN_PREVIEW',
    CLOSE_PREVIEW: 'CLOSE_PREVIEW',
};

const openPreview = () => {
    return { type: actions.OPEN_PREVIEW };
};
const closePreview = () => {
    return { type: actions.CLOSE_PREVIEW };
};

export { actions, openPreview, closePreview };
