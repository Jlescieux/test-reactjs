import React from 'react';
import './App.css';

class Block1 extends React.Component {
  render() {
    return (
      <article className="commercial_block1">
        <div className="amount">
          <span>Objectif</span>
          <span><strong>1 000 000 €</strong></span>
        </div>
        <div className="number">
          <span>Propales envoyées</span>
          <span><strong>70</strong></span>
        </div>
        <div className="amount">
          <span>CA global</span>
          <span><strong>438 042 €</strong></span>
        </div>
        <div className="number">
          <span>Rendez-vous</span>
          <span><strong>118</strong></span>
        </div>
      </article>
    );
  }
}

class Block2 extends React.Component {
  render() {
    return (
      <article className="commercial_block2">
        <div className="pipe">
          <svg width="150px" height="150px" viewBox="0 0 24 24">
            <path d="M13.9,22a1,1,0,0,1-.6-.2l-4-3.05a1,1,0,0,1-.39-.8V14.68L4.11,5.46A1,1,0,0,1,5,4H19a1,1,0,0,1,.86.49,1,1,0,0,1,0,1l-5,9.21V21a1,1,0,0,1-.55.9A1,1,0,0,1,13.9,22Z" />
          </svg>
          <span>Pipe</span>
          <span><strong>2 218 500 €</strong></span>
        </div >
        <div className="numbers">
          <div>
            <span>En cours de négo</span>
            <span className="nego">
              <svg width="20px" height="20px" viewBox="0 0 64 64">
                <path d="M25.9,35.34c-5.26,2.43-8.57,7.83-9.46,12.95a6.49,6.49,0,0,1-2.64,4.37A4,4,0,0,0,12,56.31,4.12,4.12,0,0,0,16.18,60H47.82A4.12,4.12,0,0,0,52,56.31a4,4,0,0,0-1.78-3.65,6.63,6.63,0,0,1-2.66-4.46c-.9-5-4.15-10.32-9.28-12.78a3.85,3.85,0,0,1-1.82-1.62,3.73,3.73,0,0,1,1.65-5.15c5.26-2.43,8.57-7.83,9.46-12.95a6.49,6.49,0,0,1,2.64-4.37A4,4,0,0,0,52,7.69,4.12,4.12,0,0,0,47.82,4H16.18A4.12,4.12,0,0,0,12,7.69a4,4,0,0,0,1.78,3.65,6.63,6.63,0,0,1,2.66,4.46c.9,5,4.15,10.32,9.28,12.78a3.85,3.85,0,0,1,1.82,1.62A3.73,3.73,0,0,1,25.9,35.34ZM25.64,18a3.16,3.16,0,0,1-3.06-2.28c-.1-.35-.17-.69-.23-1a13.88,13.88,0,0,0-.89-3A1.18,1.18,0,0,1,22.56,10H41.44a1.18,1.18,0,0,1,1.1,1.64,13.89,13.89,0,0,0-.89,3c-.06.34-.14.68-.23,1A3.16,3.16,0,0,1,38.36,18Zm2.78,22.79A9.55,9.55,0,0,0,31.93,38h.14a9.55,9.55,0,0,0,3.51,2.79,10.87,10.87,0,0,1,5,5.32A1.31,1.31,0,0,1,39.43,48H24.57a1.31,1.31,0,0,1-1.18-1.89A10.87,10.87,0,0,1,28.42,40.79Z" />
              </svg>
              <strong>56</strong></span>
          </div>
          <div>
            <span>Propales envoyées</span>
            <span className="propal">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" />
              </svg>
              <strong>66</strong>
            </span>
          </div>
          <div>
            <span>Offres qualifiées</span>
            <span className="offer">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M18,3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V6A3,3,0,0,0,18,3ZM16.3,9.61l-4.57,6a1,1,0,0,1-.79.39h0a1,1,0,0,1-.79-.38L7.71,12.51a1,1,0,0,1,1.58-1.23l1.63,2.08,3.78-5a1,1,0,1,1,1.6,1.22Z" />
              </svg>
              <strong>96</strong>
            </span>
          </div>
        </div>
      </article >
    );
  }
}

class Commercial extends React.Component {
  render() {
    return (
      <section className="container">
        <h1>Section <span className="section_title commercial">Commercial</span></h1>
        <Block1 />
        <Block2 />
      </section>
    );
  }
}

export default Commercial;