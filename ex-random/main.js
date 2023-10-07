
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const h1 = document.querySelector('.text');


const aItens =[
  'Geladeira',
  'Fogão',
  'Armario',
  'Kit Panela',
  'Kit LYOR ou WOLF',
  'Sofá',
  'Máquina lava e seca',
  'Mesa jantar',
  'Rack para sala',
  'Depurador',
  'MOP',
  'Cama BOX',
  'Blindex banheiro',
  'Sofá',
  'Cabeceira',
]

function random(){
  const randomico = Math.floor(Math.random() * aItens.length);
  const r  = aItens[randomico];
  h1.innerHTML = r;
}
btn.addEventListener('click', ()=>{
  random();
})
console.log(random())


