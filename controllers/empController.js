const db = require('../models');

module.exports = {
    create: async (req, res) => {
        const employee = await db.employee.create(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                status: req.body.status,
                office: req.body.office,
                title: req.body.title,
                department: req.body.department
            },
        ).catch(err => {
            console.log(err)
        })
        res.json(employee);
    },
    findAll: async ({ body }, res) => {
        const sort = body.sort || 'id';
        let whereCase = {};
        body.statusParam ? whereCase.status = body.statusParam : '';
        body.departmentParam ? whereCase.department = body.departmentParam : '';

        const employees = await db.employee.findAll({
        where: whereCase,
      order: [
        [sort, 'ASC'],
    ],
        }).catch(err => {
            console.log(err);
        })

        res.json(employees);
    },
    update: ({ params, body }, res) => {
        db.employee.update(
            {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                phone: body.phone,
                status: body.status,
                office: body.office,
                title: body.title,
                department: body.department
            }, {
            where: {
                id: params.id
            }
        })
            .then(updatedEmp => {
                res.send(updatedEmp + ' employee updated!')
            })
            .catch(err => {
                console.log(err)
            })
    },
    findById: async (req, res) => {
        const employee = await db.employee.findAll({
            where: {
                id: req.params.id
            }
        })
            .catch(err => {
                console.log(err)
            })

        res.json(employee);

    },
    delete:  async ({ params }, res) => {
        const emp = await db.employee.destroy({ where: { id: params.id } });
    
        res.json(emp);
      }
}