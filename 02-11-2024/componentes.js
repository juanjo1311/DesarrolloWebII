class AyudaTexto extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                span {
                    background-color: #e0f7fa;
                    color: #00695c;
                    padding: 10px 15px;
                    border-radius: 8px;
                    font-size: 1.1em;
                    font-weight: 600;
                    text-align: center;
                    display: inline-block;
                    margin: 12px auto;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
                }
            </style>
            <span><slot>Ayuda</slot></span>
        `;
    }
}
customElements.define("ayuda-texto", AyudaTexto);

class BotonNotificaciones extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                button {
                    display: flex;
                    align-items: center;
                    background-color: #00897b;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    margin: 10px auto;
                    font-size: 1em;
                    font-weight: 600;
                    transition: background-color 0.3s ease;
                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
                }
                button img {
                    margin-right: 10px;
                }
                button:hover {
                    background-color: #00695c;
                }
            </style>
            <button>
                🔔
                Notificaciones
            </button>
        `;
    }
}
customElements.define("boton-notificaciones", BotonNotificaciones);

class CajaClave extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                input {
                    padding: 12px;
                    width: 85%;
                    max-width: 320px;
                    border: 1px solid #00897b;
                    border-radius: 8px;
                    text-align: center;
                    display: block;
                    margin: 10px auto;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
                    transition: border-color 0.3s ease;
                }
                input:focus {
                    border-color: #004d40;
                    outline: none;
                }
            </style>
            <input type="password" id="clave" placeholder="Ingrese su clave">
        `;

        shadow.querySelector('#clave').addEventListener('change', () => {
            this.encryptAndSend();
        });
    }

    encryptAndSend() {
        const input = this.shadowRoot.querySelector('#clave');
        const clave = btoa(input.value);
        console.log("Clave encriptada:", clave);
        input.value = clave;
    }
}
customElements.define("caja-clave", CajaClave);

class CajaCupon extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
            
                input {
                    padding: 12px;
                    width: 85%;
                    max-width: 320px;
                    border: 2px solid #4caf50; /* Verde destacado */
                    border-radius: 8px;
                    font-style: italic;
                    text-align: center;
                    display: block;
                    margin: 10px auto;
                    color: #333; /* Texto oscuro */
                    background-color: #f1f8e9; /* Fondo claro para el campo */
                    transition: border-color 0.3s ease, background-color 0.3s ease; /* Transiciones suaves */
                }
                input:focus {
                    border-color: #388e3c; /* Verde más oscuro al enfocar */
                    outline: none; /* Quitar el contorno por defecto */
                    background-color: #e8f5e9; /* Fondo un poco más oscuro al enfocar */
                }
                input::placeholder {
                    color: #a5d6a7; /* Color del placeholder */
                    font-style: normal; /* Normalizar el estilo del placeholder */
                }
                /* Animación al agregar el componente */
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                button {
                    display: flex;
                    align-items: center;
                    background-color: #00897b;
                    color: white;
                    border: none;
                    padding: 8px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    margin: 10px auto;
                    font-size: 1em;
                    font-weight: 600;
                    transition: background-color 0.3s ease;
                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
                }
                button img {
                    margin-right: 10px;
                }
                button:hover {
                    background-color: #00695c;
                }   
            </style>
            <input type="text" placeholder="Ingrese cupón de descuento" id="cupon">
            <button>Aplicar</button>
        `;
    }
}
customElements.define("caja-cupon", CajaCupon);
