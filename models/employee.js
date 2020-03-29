module.exports = function(sequelize, DataTypes) {
  const Employee = sequelize.define("employee", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      // ====Validations====
      validate: {
        len: [1, 40]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      // ====Validations====
      validate: {
        len: [1, 40]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        validatePhone: function(value) {
          // regex validation for US Phone number that accept a dot, a space, a dash, a forward slash deliminators
          // can put 0 or 1 in front
          if (
            !/^((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})?$/i.test(
              value
            )
          ) {
            throw new Error("phone format error!");
          }
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["permanent", "temporary", "intern", "contract"]]
      }
    },
    office: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      // ====Validations====
      validate: {
        len: [1, 50]
      }
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [
          [
            "management",
            "engineering",
            "marketing",
            "sales",
            "customer service",
            "internal services"
          ]
        ]
      }
    }
  });

  return Employee;
};
