import React from "react";
import { Button } from "react-bootstrap";

const DashboardProvider = () => {
  return (
    <div className="container text-center mt-2">
    <h1>Dashboard Admin</h1>
    <button className="btn btn-secondary ms-auto">Lista de Instaladores</button>
    <table className="table mt-3 ">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Instalador</th>
                <th scope="col">Fecha</th>
                <th scope="col">Pedido Nº</th>
                <th scope="col">Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody >
            <tr className="">
                <th scope="row">1</th>
                <td>Bernardo</td>
                <td>01/10/24</td>
                <td>A-00001</td>
                <td>Entregado</td>
                <td><i className="btn bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Edwin</td>
                <td>04/10/24</td>
                <td>A-00002</td>
                <td>Procesando</td>
                <td><i className="btn bi bi-pencil-square"></i></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Didac</td>
                <td >05/10/24</td>
                <td>A-00003</td>
                <td>Cancelado</td>
                <td><i className="btn bi bi-pencil-square"></i></td>
            </tr>
        </tbody>
    </table>
    {/* el reporte es para generar un excel con los pedidos entregados filtrados por fecha o instalador */}
    <Button>Reporte</Button>
</div>
  )
}

export default DashboardProvider