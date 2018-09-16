import React from 'react'
import styled from 'styled-components'
import { STATUS_CODES } from 'http';

const Texttopp = styled.div`
  padding-top: 248px;
  text-shadow: -5px 5px 5px rgba(0, 0, 0, 0.23);
  color: #fff;
  text-align: center;
  line-height: 0.94;
  text-transform: uppercase;
`

const FirstLine = styled.div`
  font-size: 100px;
`

const SecondLine = styled.div`
  font-size: 100px;
`

const LastLine = styled.div`
  font-size: 100px;
`



export class Texttop extends React.Component{

  state = {
    text: ['CARTOONS','BRANDING','WEB&APP'],
    position: 0,
  }  

  componentDidMount() {
    setInterval( () => {
      (this.setState({position:this.state.position+1}));
      if(this.state.position > 2){
        this.setState({position: 0})
      }
    }, 2000
    )}
  
  render() {
    return (
      <Texttopp>
        <FirstLine>
          i love to make 
        </FirstLine>
        <SecondLine>
          {this.state.text[this.state.position]}
        </SecondLine>
        <LastLine>
          look awesome
        </LastLine>
      </Texttopp>
    )
  }

};

export default Texttop