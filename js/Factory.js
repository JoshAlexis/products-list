// Class to create the diferents elements used by the views
class Factory{
    static createArticle(){
        const article = document.createElement('article');
        article.classList = 'col-md-3 mt-4';
        return article;
    }

    static createCard(){
        const divCard = document.createElement('div');
        divCard.classList = 'card text-center';
        return divCard;
    }

    static createCardHeader(){
        const cardHeader = document.createElement('div');
        cardHeader.classList = 'card-header';
        return cardHeader;
    }

    static createCardBody(){
        const cardBody = document.createElement('div');
        cardBody.classList = 'card-body' ;
        return cardBody;
    }

    static createCardFooter(){
        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');
        return cardFooter;
    }

    static createButton(type,id,text){
        const button = document.createElement('button');
        button.classList = `btn btn-block btn-${type}`;
        button.setAttribute('id',id);
        button.innerText = text;
        return button;
    }
}

export default Factory