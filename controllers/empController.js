const db = require('../models');
const { Op } = require("sequelize");


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
    findAll: async (req, res) => {
        console.log(req.query);
        const statusFilter = req.query.statusFilter || '';
        const departmentFilter = req.query.departmentFilter || '';
        let whereCase = {};
        statusFilter ? whereCase.status = statusFilter : '';
        departmentFilter ? whereCase.department = departmentFilter : '';

        const employees = await db.employee.findAll({
        where: whereCase,
        }).catch(err => {
            console.log(err);
        })

        res.json(employees);
    },
    search: async (req, res) => {
        console.log(req.query);
        const searchQuery = req.query.query || '';
        const employees = await db.employee.findAll({
            where: {
                [Op.or]: [
                    { firstName: { [Op.like]: '%' + searchQuery + '%' } },
                    { lastName:{ [Op.like]: '%' + searchQuery + '%' } }
                  ]
              },
      order: [
        ["lastName", 'ASC'],
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