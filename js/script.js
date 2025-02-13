
function carregarColaboradores(){
    const colaboradores = JSON.parse(localStorage.getItem('colaboradores')) || []
    let tbColaboradores = document.querySelectorId('tbColaboradores')
    colaboradores.forEach(colaborador => {
        tdColaboradores.appendChild()
        const id = document.createElement('td');
        id.textContent = colaborador.nome;
        const nome = document.createElement('td');
        nome.textContent = colaborador.nome;
        const cargo = document.createElement('td');
        cargo.textContent = cargo.cargo;

        <td>1</td>
                    <td>João Silva</td>
                    <td>Padeiro</td>
                                    <td>
                                        <div class="progress" style="height: 20px;">
                                            <div class="progress-bar" role="progressbar" style="width: 80%"
                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                                1000R$
                                            </div>
                                        </div>
                                    </td>
    });
}
function cadastrarColaborador(){

    console.log("aaaaaaaaaaaaaaaa")
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const venda = document.getElementById('venda').value;

    const colaborador = {
        nome: nome,
        cargo: cargo,
        venda:venda
    };
    
    let colaboradores = [];
    let colaboradoresJson = localStorage.getItem('colaboradores') 
    if(colaboradoresJson)
        colaboradores = JSON.parse(colaboradoresJson);

    colaboradores.push(colaborador);
    localStorage.setItem('colaboradores', JSON.stringify(colaboradores))

}