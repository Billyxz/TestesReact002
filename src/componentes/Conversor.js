import React, { Component } from 'react'

// npm run start

export default class Conversor extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }
        this.converter = this.converter.bind(this);
    }

    converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url= `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=80ae11c6f72a07f8c3b6`; 
        console.log("url: " + url);
        // https://free.currencyconverterapi.com/ &&& &
        // https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=80ae11c6f72a07f8c3b6 
        // https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=80ae11c6f72a07f8c3b6
        fetch(url)
        .then(res => {
            console.log("res: " + res);
            return res.json()
        })
        .then(json => {
            let cotacao = json[de_para];
            console.log("cotacao: " + cotacao);
            console.log("A: " + this.state.moedaA_valor);
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2) 
            // this.state.moedaA_valor * cotacao; 
            // 
            console.log("b :" + moedaB_valor);
            this.setState({moedaB_valor})
        })
    }

    render() 
    {
        return (
            <div className="conversor">

               <h2> {this.props.moedaA} para {this.props.moedaB} </h2>
                    {/* <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input> */}
                    {/* <input type="button" value="Converter!" onClick={this.converter} ></input> */}
                
                <div className="buttonHolder">
                    
                    <div className="container-login100-form-btn">
                        <input className="input100" type="text" placeholder="US$ " onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>

						<button className="login100-form-btn" onClick={this.converter} >
							Converter!
						</button>
					</div>
                </div>
                <h2 className="footerValor"> R$ {this.state.moedaB_valor} </h2>

                <div className="fontesCode">
                CSS adaptado e tirado daqui:<br />
                https://colorlib.com/wp/template/login-form-v1/  <br /><br />
                Tutorial do You Tube de React, no canal do Programador BR: <br />
                https://www.youtube.com/watch?v=tbLziJchz48&t=1221s<br />
                </div>
            </div>
            
        )
    }
}