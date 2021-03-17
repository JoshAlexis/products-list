export const createArticle = () => {
    const article = document.createElement('article');
    article.classList = 'col-md-3 mt-4';
    return article;
}

export const createCard = () => {
    const divCard = document.createElement('div');
    divCard.classList = 'card text-center';
    return divCard;
}

export const createCardHeader = () => {
    const cardHeader = document.createElement('div');
    cardHeader.classList = 'card-header';
    return cardHeader;
}

export const createCardBody = () => {
    const cardBody = document.createElement('div');
    cardBody.classList = 'card-body';
    return cardBody;
}

export const createCardFooter = () => {
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    return cardFooter;
}

export const createButton = ({ type, id, text }) => {
    const button = document.createElement('button');
    button.classList = `btn btn-block btn-${type}`;
    if (id) button.setAttribute('data-id', id);
    button.innerText = text;
    return button;
}

export const createLinkButton = ({ type, text, link }) => {
    const a = document.createElement('a');
    a.classList = `btn btn-block btn-${type}`;
    a.innerText = text;
    a.setAttribute('href', link);
    return a;
}

export const createHidden = (id) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.value = id;
    return input;
}