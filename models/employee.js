
module.exports = function(sequelize, DataTypes) {
    const Employee = sequelize.define("employee", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            // ====Validations====
            validate: {
              len: [1, 40],
            },
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            // ====Validations====
            validate: {
              len: [1, 40],
            },
          }, 
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            }
          }, 
          phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              is: ["^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$", 'i']
            }
          }, 
        status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [[
            'permanent', 'temporary', 'intern', 'contract'
          ]]
        }
      },
      office: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        // ====Validations====
        validate: {
          len: [1, 50],
        },
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [[
            'management', 'engineering', 'marketing', 'sales', 'customer service', 'internal services'
          ]]
        }
      },
    });


    return Employee;
  };
    