import React from 'react'

export default function salut(props) {
    let element;
    if (props.curs){
        element = <div> Salut {props.nume} si sunt student la cursul de  {props.curs} </div>;
    }
    else{
        element = <div> Salut sunt {props.nume} </div>;
    }
  return  element;
}
