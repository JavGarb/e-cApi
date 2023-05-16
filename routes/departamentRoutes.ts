import { Router, Request, Response } from "express";
//import { Department } from "../sequelize/models/departament";

const router = Router();

// // Obtener todos los departamentos
// router.get("/", async (req: Request, res: Response) => {
//   const departaments = await Department.findAll();
//   res.json(departaments);
// });

// // Obtener un departamento por ID
// router.get("/:id", async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const departament = await Department.findByPk(id);
//   if (!departament) {
//     res.status(404).json({ message: "Department not found" });
//     return;
//   }
//   res.json(departament);
// });

// // Crear un nuevo departamento
// router.post("/", async (req: Request, res: Response) => {
//   const { name, description } = req.body;
//   const departament = await Department.create({ name, description });
//   res.json(departament);
// });

// // Actualizar un departamento existente
// router.put("/:id", async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { name, description } = req.body;
//   const departament = await Department.findByPk(id);
//   if (!departament) {
//     res.status(404).json({ message: "Department not found" });
//     return;
//   }
//   departament.name = name;
//   departament.description = description;
//   await departament.save();
//   res.json(departament);
// });

// // Eliminar un departamento
// router.delete("/:id", async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const departament = await Department.findByPk(id);
//   if (!departament) {
//     res.status(404).json({ message: "Department not found" });
//     return;
//   }
//   await departament.destroy();
//   res.json({ message: "Departament deleted" });
// });

export default router;
