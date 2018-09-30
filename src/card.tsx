import * as React from 'react';

export interface ICardProp {
     name: string; avatar_url: string; company: string; id: number;
}

export const Card = (props: ICardProp) => {
    return (
        <div style={{ margin: '1em' }}>
            <img width="75" src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

export interface ICardListProp {
    cards: ICardProp[];
}

export const CardList = (props: ICardListProp) => {
    return (        
        <div>
            {props.cards.map(card => <Card {...card} key={card.id}  />)}
        </div>
    );
}
