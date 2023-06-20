const canvas = document.getElementById('tutorial');
const ctx = canvas.getContext('2d');

let Matrice = [[0,0,0],[0,0,0],[0,0,0]];

let giocatorecorrente='X';
const CASELLA_VUOTA = 0;
const CASELLA_X = 1;
const CASELLA_0 = 2;
const lCella=canvas.width/3;
const aCella=canvas.height/3;
canvas.addEventListener('click',OnMouseDown(e)); 
function NuovaPartita()
{
  for(let i = 0; i < 3; i++)
      for(let j = 0; j < 3; j++)
         Matrice[i,j] = CASELLA_VUOTA;
  GiocaX = false;
  Contatore = 0;
  Redraw();
}

function DrawTable()
{
  // Disegni il tabellone di gioco del tris dentro la canvas
  ctx.beginPath();
  ctx.moveTo(lcella, 0);
  ctx.lineTo(lcella,canavas.height);
  ctx.moveTo(lcella*2, 0);
  ctx.lineTo(lcella*2, canavas.height);
  ctx.moveTo(0, acella);
  ctx.lineTo(canvas.width, acella);
  ctx.moveTo(0, acella*2);
  ctx.lineTo(canavas.width, acella*2);
  ctx.stroke();
  
}

function Redraw(colonne,righe,giocatore)
{
    const rectangle=canvas.getBundingClientRect();
    const x= righe*lcella+lcella/2;
    const y= colonne*acella+acella/2;
    ctx.font='45 ';
    ctx.fillText(giocatore,righe,colonne);
}

function OnMouseDown(event)
{
    const rectangle=canvas.getBundingClientRect();
    const offsetX = event.clientX - rectangle.left;//movimento mouse asse orizzontale 
    const offsetY = event.clientY - rectangle.top;//movimemto mouse asse verticale
    const righe = Math.floor(offsetX /acella );
    const colonne = Math.floor(offsetY /lcella );
    if (Matrice[righe][colonne]==='0'){
      Matrice[righe][colonne]==giocatatorecorrente;
      Redraw(colonne,righe,giocatorecorrente);
      if (winner()){
        setTimeout(()=>{
          alert(giocatorecorrente+ ' hai vinto');
          DrawTable();
        },100);
      }
      if(pep()) {
        setTimeout(()=>{
            alert('pareggio');
            DrawTable();
        },100);
      }
    }
}
function winner()
  {
     //Controllo Righe
     for (let i = 0; i < 3; i++) {
      if ([i][0] === giocatorecorrente && Matrice[i][1] === giocatorecorrente && Matrice[i][2] === giocatorecorrente) {
        return true;
      }
    }

    // Controllo vittoria colonne 
    for (let j = 0; j < 3; j++) {
      if (Matrice[0][j] === giocatorecorrente && Matrice[1][j] === giocatorecorrente && Matrice[2][j] === giocatorecorrente) {
        return true;
      }
    }

    // controllo vittoroa diagonali
    if (
      (Matrice[0][0] === giocatorecorrente && Matrice[1][1] === giocatorecorrente && Matrice[2][2] === giocatorecorrente) ||
      (Matrice[0][2] === giocatorecorrente && Matrice[1][1] === giocatorecorrente && Matrice[2][0] === giocatorecorrente)
    ) {
      return true;
    }

    return false;
   
    
  }
function pep(){
   for(let i=0;i<=2;i++){
    for(let j=0;j<=2;j++)
    {
      return Matrice[i][j]=(Matrice[i][j]==='')?  false : true ;
    }

   }
  }
function resetta(){
  Matrice.foreach(row=>rowFill('0'));
  ctx.clearRect(0,0,canvas.width,canvas.height);
  giocatorecorrente='x';
}
;

DrawTable();
