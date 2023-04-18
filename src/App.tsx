import { useState } from 'react'

function App() {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);

  function calcular() {
    const alturaMetros = altura / 100;
    const novoImc = peso / (alturaMetros * alturaMetros);
    setImc(novoImc);
  }

  function getImcStatus() {
    if (imc < 18.6) {
      return { status: 'Abaixo do peso', color: '#FFA07A' };
    } else if (imc >= 18.6 && imc < 24.9) {
      return { status: 'Peso ideal', color: '#9ACD32' };
    } else if (imc >= 24.9 && imc < 29.9) {
      return { status: 'Sobrepeso', color: '#FF8C00' };
    } else if (imc >= 29.9 && imc < 34.9) {
      return { status: 'Obesidade grau I', color: '#FF4500' };
    } else if (imc >= 34.9 && imc < 39.9) {
      return { status: 'Obesidade grau II', color: '#FF1493' };
    } else {
      return { status: 'Obesidade grau III', color: '#8B0000' };
    }
  }

  return (
    <div className="Container">
      <div className='title'>
        <h1>Calculadora IMC</h1>
        <span>calcule o seu imc aqui</span>
      </div>
      <div className='inputbox'>
        <input
        type='text'
        placeholder='Coloque o seu peso aqui...'
        value={peso}
        onChange={(e) =>{setPeso(Number(e.target.value))}}
        />
        <input
        value={altura}
        onChange={(e) => setAltura(Number(e.target.value))}
        type='text'
        placeholder='Coloque a sua altura aqui...'
        />
        <button onClick={calcular}>CALCULAR</button>
        {imc > 0 && (
        <div className="calc" style={{ backgroundColor: getImcStatus().color }}>
          <span>Seu IMC é: {imc.toFixed(2)}  {getImcStatus().status}</span>
        </div>
      )}
      </div>
    </div>
  )
}

export default App
