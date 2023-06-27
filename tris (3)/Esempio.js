const canvas = document.getElementById('tutorial');
const ctx = canvas.getContext('2d');

let Matrice = [[0,0,0],[0,0,0],[0,0,0]];


const CASELLA_VUOTA = 0;
const CASELLA_X = 1;
const CASELLA_0 = 2;

let GiocatoreCorrente = CASELLA_X;
var Contatore = 0;
let Spaziatura=10;
const LarghezzaCella = canvas.width / 3;
const AltezzaCella = canvas.height / 3;

canvas.addEventListener('click',OnMouseDown); 

function OnMouseDown(Evento)
{
    const Rectangle = canvas.getBoundingClientRect();
    const OffsetX   = Evento.clientX - Rectangle.left;
    const OffsetY   = Evento.clientY - Rectangle.top;
    const Riga      = Math.floor(OffsetX / AltezzaCella );
    const Colonna   = Math.floor(OffsetY / LarghezzaCella );

    if (Matrice[Riga][Colonna] === CASELLA_VUOTA)
    {
      Matrice[Riga][Colonna] = GiocatoreCorrente;
      Contatore ++;
      Redraw();
      /*if (Winner())
      {
        setTimeout(function()
        {
          alert(GiocatoreCorrente + ' hai vinto');
          NuovaPartita();
        },100);
      }
      else 
      {
        if(Contatore == 9) 
        {
          setTimeout(function()
          {
              alert('pareggio');
              NuovaPartita();
          },100);
        }
        else giocatorecorrete = (GiocatoreCorrente === CASELLA_X) ? CASELLA_X : CASELLA_0;
      }*/
   }
}

function DrawTable()
{
  // Disegni il tabellone di gioco del tris dentro la canvas
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.moveTo(LarghezzaCella, 0);
  ctx.lineTo(LarghezzaCella,canvas.height);
  ctx.moveTo(LarghezzaCella*2, 0);
  ctx.lineTo(LarghezzaCella*2, canvas.height);
  ctx.moveTo(0, AltezzaCella);
  ctx.lineTo(canvas.width, AltezzaCella);
  ctx.moveTo(0, AltezzaCella*2);
  ctx.lineTo(canvas.width, AltezzaCella*2);
  ctx.stroke();
  
}
function DisegnaCroce(Riga,Colonna) 
  { let Cells=AltezzaCella*LarghezzaCella;
    let y=Riga*Cells+Spaziatura;
    let x=Colonna*Cells+Spaziatura;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Cells - Spaziatura * 2, y + Cells - Spaziatura * 2);
    ctx.moveTo(x, y + Cells - Spaziatura* 2);
    ctx.lineTo(x + Cells - Spaziatura * 2, y);
    ctx.stroke();
  }
function DisegnaCerchio(Riga,Colonna) 
  {
    var CentroX = Colonna * Cells + Cells / 2;
    var CentroY = Riga * Cells + Cells / 2;
    var Raggio = (Cells - spacing * 2) / 2;

    ctx.beginPath();
    ctx.arc(CentroX, CentroY, Raggio, 0, 2 * Math.PI);
    ctx.stroke();
  }
function DrawPosizioni()
  {
    for(let i=0;i<3;i++)
    {
      for (let j = 0; j < 3;j++) 
      {
        if (Matrice[i][j]==CASELLA_0) 
        {
          CASELLA_0=DisegnaCerchio(Riga,Colonna);
        }
        if (Matrice[i][j]==CASELLA_X) 
        {
          CASELLA_X=DisegnaCroce(Riga,Colonna);
        }
      }
    }
  }

function Redraw()
{
    DrawTable();
    DrawPosizioni();
}


function winner()
  {
     //Controllo Righe
     for (let i = 0; i < 3; i++) 
         if (Matrice[i][0] === giocatorecorrente && Matrice[i][1] === giocatorecorrente && Matrice[i][2] === giocatorecorrente)   
            return true;

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
      ) 
    {
      return true;
    }

    return false;
   
    
  }


function NuovaPartita()
{
  /*Matrice.foreach(row=>rowFill('0'));*/
  Conteggio = 0;
  GiocatoreCorrente = CASELLA_X;
  DrawTable();
}


NuovaPartita();
