import React, { useState } from 'react';
import logo from './../../img/logo.png';
import background from './../../img/background.png';
import './../../styles/login.css';

const data = {
    "Canalización": [
        { name: "Ángulo externo moldura blanca", medida: ["16x32", "40x40"] },
        { name: "Ángulo interno moldura blanca", medida: ["16x32", "40x40"] },
        { name: "Tapa/final moldura blanca", medida: ["16x32", "40x40"] },
        { name: "Canaleta blanca", medida: ["16x32", "40x40"] },
        { name: "Tubo corrugado gris", medida: ["25", "32"] },
        { name: "Tubo rígido gris", medida: ["25", "32"] },
        { name: "Grapas cierre dientes", medida: ["25", "32"] },
        { name: "Manguitos", medida: ["25", "32"] },
        { name: "Tacos nylon", medida: ["8X40"] },
        { name: "Arandela para", medida: ["4x40"] },
        { name: "Tornillos", medida: ["4,5X40"] }
    ],
    "Instalación Eléctrica": [
        { name: "Cinta aislante", color: ["Verde/amarilla", "Negra", "Azul", "Marrón", "Gris", "Blanca", "Rojo"] },
        { name: "Punteras 6mm", color: ["Verde", "Amarilla"] },
        { name: "Punteras tierra 6mm", medida: [] },
        { name: "Regleta", medida: ["2,5", "6", "10", "16", "25"] },
        { name: "Bornera SIGMA", medida: [] },
        { name: "CABLE CAT6 U/UTP LSZH CPR DCA VIOLETA", medida: [] },
        { name: "CABLE 6 mm/4mm", color: ["AZUL", "NEGRO", "VERDE y AMARILLO", "MARRÓN", "GRIS"] },
        { name: "Cable solar negro 6 mm", medida: [] },
        { name: "Par macho/hembra MC4 (inc. Puntera metálica)", medida: [] },
        { name: "Tornillo Goloso cabeza hexagonal M6X45 DIN571", medida: [] },
        { name: "Caja de registro", medida: ["95x75", "100x100", "143x168"] }
    ],
    "Anclaje": [
        { name: "Tamiz", medida: ["16*85"] },
        { name: "Taco químico", medida: [] },
        { name: "Impermeabilizante Líquido", color: ["Rojo Teja", "Blanco", "Gris"] }
    ],
    "Consumibles": [
        { name: "Aguaplast blanca", medida: [] },
        { name: "Bridas", tamaño: ["GRANDES", "PEQUEÑAS"] },
        { name: "Discos radial", medida: [] },
        { name: "Disco para sierra", medida: [] },
        { name: "Brocas", medida: ["Tipo"] },
        { name: "Punta de Diamante", medida: [] },
        { name: "Tiza", medida: [] },
        { name: "Marcador permanente", medida: [] },
        { name: "Brocha", medida: [] },
        { name: "Bolsas de Basura", medida: [] },
        { name: "Cinta Autovulcanizante", medida: [] },
        { name: "Gel Pasacables", medida: [] },
        { name: "Silicona Sikaflex", medida: [] }
    ],
    "Epis": [
        { name: "Guantes", talla: ["TALLA 8", "9", "10"] }
    ],
    "Estructura": [
        { name: "Varillas prearmadas", medida: ["250mm", "300mm"] },
        { name: "Pletinas", medida: [] },
        { name: "Tornillo Cabeza de Martillo", medida: [] },
        { name: "Tuerca para Cabeza de Martillo", medida: [] },
        { name: "Grapa media", color: ["Gris", "Negro"] },
        { name: "Grapa final", color: ["Gris", "Negro"] },
        { name: "Tornillo para grapas", medida: [] },
        { name: "Tuerca para grapas", medida: [] },
        { name: "Uniones", medida: [] },
        { name: "Tornillos autotaladrantes", medida: [] },
        { name: "Tapon perfil", color: ["Gris", "Negro"] }
    ]
};

const Pedido = () => {
    const [selectedFamily, setSelectedFamily] = useState("Selecciona");
    const [cart, setCart] = useState([]);

    const handleSelect = (family) => {
        setSelectedFamily(family);
    };

    const addToCart = (item, medida) => {
        setCart([...cart, { ...item, medida, family: selectedFamily }]);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    return (
        <div className='container p-3'>
            <div className='text-center m-auto p-3' style={{
                width: "20rem",
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: "5px"
            }}>
                <h1 className='text-border-white-blur'>Pedido</h1>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedFamily}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {Object.keys(data).map((family, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href="#" onClick={() => handleSelect(family)}>{family}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedFamily !== "Selecciona" && (
                    <div className="mt-3">
                        <h2>{selectedFamily}</h2>
                        <ul>
                            {data[selectedFamily].map((item, index) => (
                                <li key={index}>
                                    {item.name} - medida: 
                                    <select onChange={(e) => addToCart(item, e.target.value)}>
                                        <option value="">Selecciona una medida</option>
                                        {item.medida && item.medida.map((medida, i) => (
                                            <option key={i} value={medida}>{medida}</option>
                                        ))}
                                        {item.color && item.color.map((color, i) => (
                                            <option key={i} value={color}>{color}</option>
                                        ))}
                                        {item.talla && item.talla.map((talla, i) => (
                                            <option key={i} value={talla}>{talla}</option>
                                        ))}
                                    </select>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="mt-3">
                <h2>Lista</h2>
                {Object.keys(data).map((family, index) => (
                    <div key={index}>
                        <h3>{family}</h3>
                        <ul>
                            {cart.filter(item => item.family === family).map((item, i) => (
                                <li key={i}>
                                    {item.name} - {item.medida || item.color || item.talla}
                                    <button onClick={() => removeFromCart(i)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pedido;
