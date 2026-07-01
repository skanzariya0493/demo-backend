exports.getAllEmployees = async (req, res) => {
  res.status(200).json({ message: 'List of employees' });
};

exports.createEmployee = async (req, res) => {
  res.status(201).json({ message: 'Employee created', data: req.body });
};
