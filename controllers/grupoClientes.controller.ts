import { Request, Response } from "express"
import { Op } from "sequelize";
import GrupoCliente from '../models/grupoClientes';

export const getGrupoClientes = async (req: Request, res: Response) => {

    const grupos = await GrupoCliente.findAll({
        // limit: 2
        where: {
            GRU_TIPO: 'CLI'
        }
    });
    res.json(grupos);
}

export const getGrupoCliente = async (req: Request, res: Response) => {
    const { id } = req.params;

    const grupo = await GrupoCliente.findOne(
        {
            where: {
                GRU_TIPO: 'CLI',
                GRU_CODIGO: id
            }
        }
    );

    res.json(grupo);
}

export const postGrupoCliente = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const grupo = await GrupoCliente.findOne(
            {
                where: {
                    GRU_TIPO: 'CLI',
                    GRU_CODIGO: body.GRU_CODIGO
                }
            }
        );

        if (grupo) {
            return res.status(403).json({
                msg: `Código ${body.GRU_CODIGO} ya está asignado a otro grupo`
            });
        }

        const grup = await GrupoCliente.create(body);
        await grup.save();
        res.json(grup);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const putGrupoCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const grupo = await GrupoCliente.findOne(
            {
                where: {
                    GRU_TIPO: 'CLI',
                    GRU_CODIGO: id
                }
            }
        );

        if (!grupo) {
            return res.status(404).json({
                msg: 'No existe el grupo con el id ' + id
            });
        }

        await grupo.update(body);
        res.json(grupo);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}

export const deleteGrupoCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const grupo = await GrupoCliente.findOne(
            {
                where: {
                    GRU_TIPO: 'CLI',
                    GRU_CODIGO: id
                }
            }
        );

        if (!grupo) {
            return res.status(404).json({
                msg: 'No existe el grupo con el id ' + id
            });
        }

        await grupo.destroy();
        res.json(grupo);
    } catch (error) {
        res.status(500).json({
            msg: 'Ocurrió un error, contáctese con el administrador del sistema',
            error
        });
    }

}