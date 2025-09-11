const formulario = document.querySelector('#formulario');

const objCert = {
    contractNo: "",
    owner: "",
    spouse: "",
    club: "",
    type: ""
}
    document.addEventListener('DOMContentLoaded',()=>{
        formulario.addEventListener('submit', (e) =>{

        e.preventDefault();
        validarFormulario();
    });
});

function validarFormulario() {
    const contractNo = document.querySelector('#contract_no').value;
    const owner = document.querySelector('#owner').value;
    const spouse = document.querySelector('#spouse').value;
    const club = document.querySelector('#club').value;
    const type = document.querySelector('#type').value;

    if (contractNo === "" || owner === "" ||club === ""||type === "") {
        mostrarAlerta("Favor completar todos los campos", "error")
        return;
        }
        
        objCert.contractNo = contractNo;
        objCert.owner = owner;
        objCert.spouse = spouse;
        objCert.club = club;
        objCert.type = type;

        mostrarAlerta("Certificado generado exitosamente", "exito");
        
         setTimeout(() => {
        //Aqui va a usar la informacion para generar el certificado.
        generarCertificado();
        }, 3000);
}

function mostrarAlerta(msg, tipo) {

    const alertaDiv = document.querySelector(".alerta");

            if (!alertaDiv) {
                const divMensaje = document.createElement('DIV');
                tipo === "error" ? divMensaje.classList.add( "error", "alerta" ) : divMensaje.classList.add( "exito", "alerta" );
                divMensaje.textContent = msg

                formulario.appendChild(divMensaje);
            
                setTimeout(() => {
                    divMensaje.remove();
                }, 3000);
        };
}

function generarCertificado() {

    console.log(objCert);

    localStorage.setItem( "contractNo", objCert.contractNo );
    localStorage.setItem( "owner", objCert.owner );
    localStorage.setItem( "spouse", objCert.spouse );
    localStorage.setItem( "club", objCert.club );
    localStorage.setItem( "type", objCert.type );

    if (localStorage.getItem('club') === 'AH') {
        window.open('AH.html');
    } else {
        window.open('HL.html');
    }
};



