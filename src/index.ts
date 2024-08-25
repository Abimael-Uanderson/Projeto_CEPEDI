// Definindo o texto e a imagem para cada escolha
const infoDados = {
    mundoReal: {
        texto: "Você escolheu o Mundo Real. Neste mundo, a humanidade vive fora da Matrix, lutando pela sobrevivência contra as máquinas que controlam a Matrix.",
        imagem: "/src/imagens/mundoReal.png" // Atualize o caminho para a imagem do Mundo Real
    },
    matrix: {
        texto: "Você escolheu a Matrix. Neste mundo, você vive em uma realidade simulada criada pelas máquinas, onde a maioria da humanidade vive sem saber a verdade.",
        imagem: "/src/imagens/matrix.png" 
    }
};

const mundoRealButton = document.getElementById('mundoRealButton') as HTMLButtonElement;
const matrixButton = document.getElementById('matrixButton') as HTMLButtonElement;
const infoSection = document.getElementById('infoSection') as HTMLDivElement;
const infoTextoElement = document.getElementById('infoTexto') as HTMLParagraphElement;
const infoImagem = document.getElementById('infoImagem') as HTMLImageElement;

mundoRealButton.addEventListener('click', () => mostrarInfo('mundoReal'));
matrixButton.addEventListener('click', () => mostrarInfo('matrix'));

function mostrarInfo(escolha: 'mundoReal' | 'matrix'): void {
    const { texto, imagem } = infoDados[escolha];
    infoTextoElement.textContent = texto;
    infoImagem.src = imagem;
    infoImagem.classList.remove('hidden');
    infoSection.classList.remove('hidden');

    // Remove todas as classes de cor anteriores
    infoTextoElement.classList.remove('textoAzul', 'textoVermelho');

    // Adiciona a classe de cor apropriada
    if (escolha === 'mundoReal') {
        infoTextoElement.classList.add('textoAzul');
    } else if (escolha === 'matrix') {
        infoTextoElement.classList.add('textoVermelho');
    }
}
